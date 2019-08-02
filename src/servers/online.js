import axios from 'axios'

let base = 'http://api.0328e.com/index.php/index'
// let config = {
//   headers: {
//     'Content-Type': 'multipart/form-data'
//   }
// }

// 个人介绍
export const getInfo = params => { return axios.post(`${base}/index/info`, params).then(res => res.data) }
export const Message = params => { return axios.post(`${base}/message/index`, params).then(res => res.data) }
