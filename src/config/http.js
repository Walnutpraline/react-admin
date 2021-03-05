import axios from "axios";
import store from "../store";
import router from "../router";
import { Message } from "element-ui";
import { serverHost, server } from "@/settings";
export const baseurl =
  process.env.NODE_ENV === "production" ? serverHost : server;

axios.defaults.withCredentials = true;
// 创建axios实例
const service = axios.create({
  xsrfHeaderName: "Authorization",
  baseURL: baseurl, // api的base_url
  timeout: 60000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    // if (store.state.token) {
    //   config.headers["Authorization"] = store.state.token // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
    // }
    let token = sessionStorage.getItem("access_token");
    let tokenType = sessionStorage.getItem("token_type");
    if (token) {
      config.headers["Authorization"] = tokenType + " " + token; // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
    }
    return config;
  },
  error => {
    alert(error);
    Promise.reject(error);
  }
);

// respone拦截器
let i = 0;
service.interceptors.response.use(
  response => {
    if (-999 === response.data.code) {
      i = i + 1;
      sessionStorage.clear();
      if (i == 1) {
        Message.error({
          message: response.data.message
        });
      }
      setTimeout(() => {
        store.dispatch("logout").then(res => {
          router.push(res);
        });
      }, 2000);
    } else {
      return response;
    }
  },
  error => {
    // i = i + 1
    console.log("err" + error); // for debug

    // if (i == 1) {
    //   Message.error({
    //     message: "请检查您的网络！"
    //   })
    // }
    return Promise.reject(error);
  }
);

export default service;