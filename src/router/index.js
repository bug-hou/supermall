import Vue from 'vue'
import Router from 'vue-router'

const first = ()=> import("../views/home/first/first");
const search = ()=> import("../views/home/search/search");
const car = ()=> import("../views/home/car/car");
const profile = ()=> import("../views/home/profile/profile");

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

  const routes = [
    {
      path:"",
      redirect:"/first"
    },{
      path:"/first",
      component:first
    },{
       path:"/search",
       component:search
    },{
      path:"/car",
      component:car
    },{
      path:"/profile",
      component:profile
    }
]

export default new Router({
  routes,
  mode:"history",
})
 
document.title = "爱购物"
