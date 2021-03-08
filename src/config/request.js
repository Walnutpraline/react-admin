import axios from 'axios';
//引入qs模块，用来序列化post类型的数据
import QS from 'qs';
//antd的message提示组件
import { message } from 'antd';
//设置axios基础路径
const service = axios.create({
    baseURL: process.env.NODE_ENV == 'development' ? 'https://jsonplaceholder.typicode.com' : 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
    withCredentials: true // 选项表明了是否是跨域请求
})

// 请求拦截器
service.interceptors.request.use(config => {
    const token = window.localStorage.getItem('userToken');
    //在每次的请求中添加token
    if (token) {
        config.data = Object.assign({}, config.data, {
            token: token,
        })
    }
    //设置请求头
    config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    }
    //序列化请求参数，不然post请求参数后台接收不正常
    config.data = QS.stringify(config.data)
    return config
}, error => {
    return error;
})

// 响应拦截器
service.interceptors.response.use(response => {
    //根据返回不同的状态码做不同的事情
    // 这里一定要和后台开发人员协商好统一的错误状态码
    if (response.code) {
        switch (response.code) {
            case 200:
                return response.data;
            case 401:
                //未登录处理方法
                break;
            case 403:
                //token过期处理方法
                break;
            default:
                message.error(response.data.msg)
        }
    } else {
        return response;
    }
})
//最后把封装好的axios导出
export default service
