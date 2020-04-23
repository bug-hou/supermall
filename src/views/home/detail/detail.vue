<!--  -->
<template>
<div>
  <div id="detail">
    <first :title="title" @position="gaibian"></first>
    <scroll class="detailscroll" ref="detailscroll" @scrolly="weizi">
    <swiper :imageTop="imageTop"/>
    <dtitle :shuju="shuju" :counts="counts" :ser="ser"></dtitle>
    <shop1 :shopinfo="shopInfo"></shop1>
    <listdata :listdata="listarr" @imgload="imgload"></listdata>
    <xiang :itemParams="itemParams"/>
    </scroll>
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

import goods from "../../../network/detail/detail"
import {shuju,shuju2} from '../../../network/detail/shuju'
import scroll from "../../../components/common/scroll/scroll"


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
      itemParams:{}
    };
  },

  components: {
    first,
    swiper,
    dtitle,
    shop1,
    scroll,
    listdata,
    xiang
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
      console.log(res.data.result)
    });

  },
  
  mounted() {
  //  console.log(this.$refs.detailscroll.scroll.refresh)
  }, 

  methods: {
    weizi(Y){
    },
    gaibian(){
      console.log("123456");
    },
    imgload(){
      console.log("1111");
       this.$refs.detailscroll.scroll.refresh()
    }
  }
}

</script>
<style scoped>
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
  bottom: 0;
  overflow: hidden;
}
</style>