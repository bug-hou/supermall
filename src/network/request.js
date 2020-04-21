import axios from "axios"

export function request(config){
const install = axios.create({
    baseURL:"http://123.207.32.32:8000/api/h8",
    timeout:5000
})
install.interceptors.response.use(solve=>{
    return solve;
},err=>{

})
return install(config)
}
// 请求拦截
// install.interceptors.request.use(solve=>{
//     console.log(solve);
//     return solve;
// },err=>{
//     console.log(err);
// })
// 响应拦截
// install.interceptors.response.use(solve=>{
//     console.log(solve);
//     // return solve.data
// },err=>{
//     console.log(err);
// })
// return install(config)
// }
// export function request(config){
//     return new Promise((resolve,reject)=>{
//         const install = axios.create({
//         baseURL:"http://123.207.32.32:8000/api/h8/home",
//         timeout:5000
//     })
//             install({
//                 url:config
//             }).then(res=>{
//                 resolve(res);
//             }).catch(err=>{
//                 exject(err);
//             })
//     })
// }