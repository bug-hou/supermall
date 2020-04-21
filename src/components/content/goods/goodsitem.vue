<!--  -->
<template>
  <div class="goodsitem">
      <div class="image"><img :src="item.show.img" alt="" @load="load"></div>
      <div class="content">
          <p>{{item.title}}</p>
          <span class="price">￥{{item.price}}</span>
          <span class="goodsright iconfont icon-shoucang">{{item.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
      item:{

          default(){
              return {}
          }
      }
  },
  components: {},

  computed: {},

  mounted(){},

  methods: {
    load(){
      this.$bus.$emit("imgload");
    }
  }
}

</script>
<style>
@import url(//at.alicdn.com/t/font_1674147_puq4kxg3sc.css);
.goodsitem{
    width: 49%;
    margin-bottom: 10px;
    position: relative;
}
.goodsitem img{
    width: 100%;
    border-radius: 5px;
}
.goodsitem>.image{
  width: 100%;
  height: 276px;
}
.goodsitem .content>p{
   font-size: 12px;
   line-height: 15px;
   overflow: hidden;
   text-overflow: ellipsis;
   /* white-space: nowrap; */
   display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
}
.goodsitem .content>.goodsright{
  float:right;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  margin-right: 5px;
}
.goodsitem .content>.price{
    color: pink;
}
.icon-shoucang:before{
     color: red;
     font-size: 12px;
}
</style>