import {request} from "../request"
 export default function(iid){
      return  request({
          url:"/detail",
          params:{
              iid
          }
      })
 }