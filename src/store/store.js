import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const carstore = new Vuex.Store({
    state:{
       goods:[],
       isRouterAlive:true
    },
    getters:{

    },
    mutations:{
        addCar(state,good){
            var add = true
            for(let i=0;i<state.goods.length;i++){
                if(state.goods[i].id===good.id){
                    state.goods[i].count++;
                    add = false;
                }
            }
            if(add)
            state.goods.push(good);
        }
    }
}
)
export default carstore