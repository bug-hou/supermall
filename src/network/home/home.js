import {request} from '../../network/request.js';
export function getHomeNav(){
   return request("/home/multidata")
}
export function getGoods(type,page){
   return request({
      url:"/home/data",
      params:{
         type,
         page
      }
   })
}