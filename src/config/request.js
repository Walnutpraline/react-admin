import axios from 'axios'
import { message } from 'antd';
// 默认域名 
// axios.defaults.baseURL = "http://10.26.4.123:8080/api/";
/**
 * 设置post请求头
 * application/json;charset=UTF-8   JSON格式
 * application/x-www-form-urlencoded;charset=UTF-8  Form表单格式
 */
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
// 超时时间10s
axios.defaults.timeout = 10000;
/**
 * 请求防抖当一个url地址被请求多次就会取消前一次请求
 */
let removeSource = (config) => {
    for (let source in sources) {
        // 当多次请求相同时，取消之前的请求
        if (sources[source].umet === config.url + '&' + config.method) {
            sources[source].cancel("取消请求")
            sources.splice(source, 1)
        }
    }
}
// 获取缓存中的用户信息, 这是接口返回的信息。
var user;
function getUser() {
    if (localStorage.getItem('userInfo')) {
        user = JSON.parse(localStorage.getItem('userInfo'));
    }
}
//请求拦截器
axios.interceptors.request.use(
    config => {
        removeSource(config)
        getUser();//获取用户信息判断token
        if (user) {
            // 设置统一的请求header
            config.headers.authorization = user.token //授权(每次请求把token带给后台)
        }
        config.headers.platform = user ? user.platform : 8 //后台需要的参数
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.returnCode === '0014') { // 登录失效
            localStorage.clear(); // 清除缓存
            message.success({
                content: '您的登录已经失效，请重新登录',
                duration: 2
            });
            setTimeout(() => {
                //让用户从新回到登录页面
                window._ROUTER_.push('/login');//router是在顶级入口app.js文件定义了window._ROUTER_ = this.props.history;
            }, 2000)
        }
        return response;
    },
    error => {
        return Promise.resolve(error.response);
    }
);

// 处理请求返回的数据
function checkStatus(response) {
    return new Promise((resolve, reject) => {
        if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
            resolve(response.data);
        } else {
            message.success({
                content: '网络异常，请检查网络连接是否正常！',
                duration: 2
            });
        }
    });
}

export default {
    post(url, params) {
        return axios({
            method: "post",
            url,
            data: params
        }).then(response => {
            return checkStatus(response);
        });
    },
    get(url, params) {
        return axios({
            method: "get",
            url,
            params,
        }).then(response => {
            return checkStatus(response);
        });
    }
};