<!--  -->
<template>
  <div id="car">
    <car-bar>
      <div slot="main">购物车</div>
      <div slot="right" class="iconfont icon-refresh" @click="refresh"></div>
    </car-bar>
    <scroll class="Cscroll">
      <car-item v-for="(item,index) in $store.state.goods" :key="index" :item="item" class="item"/>
    </scroll>
    <price :price="price" class="Cprice"></price>
  </div>
</template>

<script>
import carItem from "./item/caritem"
import price from "./price/price"

import carBar from "components/common/navbar/navBar"
import scroll from "components/common/scroll/scroll"
export default {
  data () {
    return {
    };
  },

  components: {
    carItem,
    carBar,
    scroll,
    price
  },
  
  computed: {
    price(){
      var count = 0
      this.$store.state.goods.forEach(item => {
        count += item.price*item.count
      });
      return count;
    }
  },

  mounted(){
  },
  created() {
  },
  activated() {
    // this.$router.go(0);
  },
  methods: {
    refresh(){
      this.$router.go(0);
    }
  }
}

</script>
<style>
@import url(//at.alicdn.com/t/font_1674147_oq20ffc2xfe.css);
#car{
  height: 100vh;
}
.Cscroll{
  margin-top: 44px;
  height: calc(100% - 44px - 49px - 50px);
  width: 100%;
  overflow: hidden;
}
.Cprice{
  position: fixed;
  bottom: 49px;
  width: 100%;
  height: 50px;
}
.icon-refresh{
  font-size: 25px;
}
</style>