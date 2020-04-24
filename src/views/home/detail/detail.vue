<!--  -->
<template>
<div>
  <div id="detail">
    <first :title="title" @position="gaibian" ref="title"></first>
    <scroll class="detailscroll" ref="detailscroll" @scrolly="weizi">
    <swiper :imageTop="imageTop"/>
    <dtitle :shuju="shuju" :counts="counts" :ser="ser"></dtitle>
    <shop1 :shopinfo="shopInfo"></shop1>
    <listdata :listdata="listarr" @imgload="imgload" ref="listdata"></listdata>
    <xiang :itemParams="itemParams" ref="xiang"/>
    <pinglu :rate="rate"/>
    </scroll>
    <back-top v-show="Dshow" @click.native="Ddian"/>
    <bottom @Bgou="Bgou"></bottom>
    <div class="success iconfont icon-chenggong" v-show="Sgong"></div>
  </div>
  </div>
</template>

<script>
import first from "./item/header"
import dtitle from "./title/title"
import shop1 from './shop/shop1'
import swiper from "./swiper/swiper"
import listdata from "./listdata/listdata"
import xiang from './xiangqi/xiangqi'
import pinglu from "./pinglu/pinglu"
import bottom from "./bottom/bottom"

import goods from "../../../network/detail/detail"
import {shuju,shuju2,shuju3} from '../../../network/detail/shuju'
import scroll from "../../../components/common/scroll/scroll"
import backTop from "../../../components/content/top/top"

import carstore from "../../../store/store"

export default {
  name:"detail",
  data () {
    return {
      id:Number,
      title:["商品","参数","评论","推荐"],
      shuju : {},
      imageTop:[],
      count:{},
      counts:[],
      ser:{},
      shopInfo:{},
      listarr : [],
      itemParams:{},
      rate:{},
      Dshow:false,
      Sgong:false,
      goods:{}
    };
  },

  components: {
    first,
    swiper,
    dtitle,
    shop1,
    scroll,
    listdata,
    xiang,
    pinglu,
    bottom,
    backTop
  },

  computed: {},
  created(){
    this.id = this.$route.params.id;
    goods(this.id).then(res=>{
      this.shuju = res.data.result.itemInfo
      this.imageTop = res.data.result.itemInfo.topImages;
      this.count = res.data.result;
      this.counts[0] = this.count.columns[0]
      this.counts[1] = this.count.columns[1]
      this.counts[2] = this.count.shopInfo.services[0].name
      this.ser = this.count.shopInfo.services;
      this.shopInfo = new shuju(this.count.shopInfo)
      this.listarr = (res.data.result.detailInfo.detailImage[0].list)
      this.itemParams = new shuju2(res.data.result.itemParams)
      this.rate = new shuju3(res.data.result.rate.list[0])
    });

  },
  
  mounted() {
  }, 

  methods: {
    weizi(Y){
      if(Y<=-1000)
      this.Dshow = true;
      if(Y>-this.$refs.listdata.$el.offsetTop){
          this.$refs.title.current = 0
      }else if(Y>-this.$refs.xiang.$el.offsetTop){
         this.$refs.title.current = 1
      }else{
         this.$refs.title.current = 2
      }
    },
    gaibian(item){
       switch (item) {
         case 0:
           this.$refs.detailscroll.scroll.scrollTo(0,0)
           break;
         case 1:
           this.$refs.detailscroll.scroll.scrollTo(0,-this.$refs.listdata.$el.offsetTop)
           break;
           case 2:
           this.$refs.detailscroll.scroll.scrollTo(0,-this.$refs.xiang.$el.offsetTop)
           break;
          case 3:
           this.$refs.detailscroll.scroll.scrollTo(0,-this.$refs.xiang.$el.offsetTop)
           break;
       }
    },
    imgload(){
       this.$refs.detailscroll.scroll.refresh()
    },
    Ddian(){
      this.$refs.detailscroll.scroll.scrollTo(0,0,1000);
    },
    Bgou(){
      this.Sgong = true;
      this.goods.img = this.imageTop[0];
      this.goods.title = this.shuju.title
      this.goods.price = this.shuju.lowNowPrice
      this.goods.id = this.id;
      this.goods.count = 1;
      this.$store.commit("addCar",this.goods)
      setTimeout(()=>{
      this.Sgong = false;
      },1000)
    }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1674147_tkn17egice.css);
#detail{
  z-index: 15;
  background-color: #fff;
  position: relative;
  height: 100vh;
}
.detailscroll{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
.success{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 80px;
  border-radius: 50%;
  color: #9c1de7;
  background: linear-gradient(to right, rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89));
}
</style>