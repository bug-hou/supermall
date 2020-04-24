<!--  -->
<template>
  <div id="Bbox">
      <div class="Bleft">
          <div class="iconfont icon-kefu">客服</div>
          <div class="iconfont icon-stroe">店铺</div>
          <div class="iconfont icon-shoucang1">收藏</div>
      </div>
      <div class="Bright">
          <div @click="Bgou">购物车</div>
          <div>立即购买</div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {
      Bgou(){
          this.$emit("Bgou");
      }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1674147_g76nugf154r.css);
#Bbox{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    display: flex;
}
#Bbox>*{
    flex: 1;
}
.Bleft{
    display: flex;
    background-color:#ddd;
    color: #333;
    font-size: 12px;
    border-radius: 5px;
}
.Bleft>*{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.Bright{
     display: flex;
    border-radius: 5px;
    overflow: hidden;
}
.Bright>*{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Bright>*:nth-child(1){
    background: yellowgreen;
}
.Bright>*:nth-child(2){
    background: pink;
}
</style>