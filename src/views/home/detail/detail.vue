<!--  -->
<template>
  <div>
    <first :title="title"></first>
    <swiper :imageTop="imageTop"/>
    <dtitle :shuju="shuju" :counts="counts" :ser="ser"></dtitle>
    <shop1 :shopinfo="shopInfo"></shop1>
  </div>
</template>

<script>
import first from "./item/header"
import dtitle from "./title/title"
import shop1 from './shop/shop1'

import goods from "../../../network/detail/detail"
import {shuju} from '../../../network/detail/shuju'
import swiper from "./swiper/swiper"


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
    };
  },

  components: {
    first,
    swiper,
    dtitle,
    shop1
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
      console.log(this.shopInfo)
    })
  },

  methods: {}
}

</script>
<style scoped>
</style>