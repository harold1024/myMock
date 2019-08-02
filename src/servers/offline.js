import axios from 'axios'
// import { GET_INIT } from './constants';


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function (config) {
    console.log(config)
    return config;
}, function (error) {
    return Promise.reject(error);
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
    console.log(response)
    return response;
}, function (error) {
    return Promise.reject(error);
})

// 封装axios的post请求
export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

// let base = ''
let base = 'http://api.0328e.com/index.php/index'
export const getInfo = params => { return axios.post(`${base}/index/info`, params).then(res => res.data) }
export const Message = params => { return axios.post(`${base}/message/index`, params).then(res => res.data) }

export default {
    getInfo,
    Message,
}
// export default {
//     mockdata(url, params) {
//         return fetch(url, params);
//     },
// }
