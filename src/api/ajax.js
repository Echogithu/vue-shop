import axios from 'axios'

export default function ajax (url ='', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      let dataStr = ''// 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }

    promise.then(response => {
      console.log(response.data)
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
// export default function ajax(url, data = {}, type = 'get') {
//   return new Promise((resolve, reject) => {
//     const options = {
//       url,
//       type
//     }
//     if (type.toLowerCase() === 'get') {
//       options.params = data   
//     } else {
//       options.data = data
//     }
//     axios(options)
//       .then(res => {
//         console.log('返回数据', res.data)
//         resolve(res.data)
//       })
//       .catch(error => {
//         reject()
//         console.error(error)
//       })
//   })
// }
