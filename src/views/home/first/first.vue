<!--  -->
<template>
  <div id="home">
<nav-bar><div slot="main">购物街</div></nav-bar>

<scroll class="swap" ref="scroll" @scrolly="position" @fush="fush">
  <home-swiper :banners="banners"/>
  <second :recommends="recommends"/>
  <three/>
  <vartab class="vartab" :vartab="vartab" @show="show"/>
  <goods :goodslist="goods[item]"/>
</scroll>
<top class="top" @click.native="back" :style="isshow"/>
  </div>
</template>

<script>

import navBar from "components/common/navbar/navBar"
import scroll from "components/common/scroll/scroll"

import vartab from "components/content/vartab/vartab"
import goods from "components/content/goods/goods"
import top from "components/content/top/top"

import {getHomeNav,getGoods} from "../../../network/home/home"

import homeSwiper from "./home/swiper"
import second from "./home/second"
import three from "./home/three"

export default {
  data () {
    return {
     banners:null,
     recommends:[],
     res:null,
     vartab:["流行","新款","精选"],
     goods:{
       pop:{page:1,list:[]},
       new:{page:1,list:[]},
       sell:{page:1,list:[]}
     },
     item:"pop",
     display:"none"
    };
  },
 
  created() {
    getHomeNav().then(res=>{
      this.res = res;
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    }),
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },

  components: {
    navBar,
    homeSwiper,
    second,
    three,
    vartab,
    goods,
    scroll,
    top
  },

  computed: {
    isshow(){
      return {display:this.display}
    }
  },

  mounted(){
    // const refresh = this.debounce(this.$refs.scroll.scroll.refresh,200);
    console.log(this.$refs.scroll);
    this.$bus.$on("imgload",()=>{
      this.$refs.scroll.scroll.refresh();
      })
      // refresh();
  },

  methods: {
    debounce(func,time){
       let timer = null;
       return function(){
         if(timer)clearTimeout(timer);
         timer = setTimeout(()=>{
            func();
            console.log("---");
         },time)
       }
    },
    // 用来获取到网络资源
    getGoods(type){
      const page = this.goods[type].page;
      getGoods(type,page).then(res=>{
      this.goods[type].list = this.goods[type].list.concat(res.data.data.list);
      // this.goods[type].list.push(...res.data.data.list)
      this.goods[type].page += 1;
    })
    },
    show(item){
        const i = this.vartab.indexOf(item);
        if(i==0){
          this.item = "pop"
        }else if(i==1){
          this.item = "new"
        }else{
          this.item = "sell"
        }
    },
    back(){
      console.log(this.$refs.scroll.scroll);
      this.$refs.scroll.scroll.scrollTo(0,0,500);
    },
    position(Y){
      if(Y<-1000){
        this.display = "block"
      }else{
        this.display = "none"
      }
    },
    fush(){
      this.getGoods(this.item);
      setTimeout(() => {
        this.$refs.scroll.scroll && this.$refs.scroll.scroll.finishPullUp()
        }, 500);
    },
  }
}

</script>
<style>
#home{
  /* height: 100vh; */
  position: relative;
  height: 100vh;
}
.vartab{
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.swap{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>