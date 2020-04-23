<!--  -->
<template>
  <div class="first">
      <div class="title">{{shuju.title}}</div>
      <div class="price">
          <div class="newprice">{{shuju.price}}</div>
          <div class="oldprice">{{shuju.oldPrice}}</div>
          <div class="discountDesc" :style="bColor">{{shuju.discountDesc}}</div>
      </div>
      <!-- <div>{{counts}}</div> -->
      <div class="count">
          <div class="shu ">{{counts[0]}}</div>
          <div class="shou">{{counts[1]}}</div>
          <div class="bao ">{{counts[2]}}</div>
      </div>
      <div class="service">
         <div v-for="(item,index) in ser" :key="index" v-show="index!==0" class="iconfont icon-xuanzhong1">{{item.name}}</div>
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
      shuju:{
          type:Object,
          default(){
              return {}
          }
          },
      counts:{
          type:Array,
          default(){
              return []
      },

      },
    ser:{
          default:{}
      }
  },
  components: {},
  computed: {
      bColor(){
          return {backgroundColor:this.shuju.discountBgColor}
      },
      shu(){
          return this.counts
      }
  },

  methods: {}
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1674147_h55w90t93y9.css);
.first{
    box-shadow: 0px 1px 3px rgba(100, 100, 100, .4);
    padding-bottom: 5px;
}
.title{
    margin-top: 10px;
    font-size: 18px;
}
.price{
    margin-top: 10px;
    overflow: hidden;
}
.price>*{
    float: left;
}
.newprice{
    font-size: 25px;
    color: red;
    margin-left: 5px;
}
.oldprice{
    margin-top: 10px;
    margin-left: 5px;
    font-size: 12px;
    text-decoration: line-through;
}
.discountDesc{
    margin-left: 5px;
    border-radius: 5px;
    color: #fff;

}
.count{
    height: 15px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    align-items: center;
    color: #999;
    margin:0 5px;
    margin-top: 30px;
    padding-bottom:4px ;
    border-bottom: 1px solid #999;
}
.service{
    width: 100%;
    height: 60px;
    line-height:60px;
    text-align: center;
    display: flex;
    justify-content: space-between;
}
.service>.iconfont{
    font-size: 12px;
}
</style>