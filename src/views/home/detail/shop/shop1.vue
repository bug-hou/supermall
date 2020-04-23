<!--  -->
<template>
  <div class="shopbox">
      <div class="logo">
         <img :src="shopinfo.logo" alt="">
         <span>{{shopinfo.name}}</span>
      </div>
      <div class="shopdian">
          <div class="dian1">
              <div>
              <span>{{shopinfo.fans}}</span>
              <span>总销量</span>
              </div>
              <div>
              <span>{{shopinfo.goodsCount}}</span>
              <span>全部宝贝</span>
              </div>
          </div>
          <div class="dian2">
              <div v-for="(item,index) in shopinfo.score" :key="index">
                  <span>{{item.name}}<span class="gao" :class="{active:item.isBetter}">
                      {{item.score|fiexd}}
                  </span>
                  <span class="tugao" :class="{tuactive:item.isBetter}">
                  </span>
                  </span></div>
          </div>
      </div>
      <div class="shopdian12">
          进店逛逛
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
      shopinfo:{
          type:Object,
          default:{}
      }
  },
  components: {},

  computed: {
  },

  mounted(){},

  methods: {},

  filters:{
      fiexd(item){
        return item.toFixed(2)
      },
      bColor(item){
         return     
      }
  }
}

</script>
<style scoped>
.logo{
    position: relative;
    width: 50%;
}
.logo>img{
    border-radius: 50%;
    width: 45%;
    margin-top: 10px;
    margin-left: 10px;
    overflow: hidden;
    box-shadow: 0 0 5px rgba(100, 100, 100, .3);
}
.logo>span{
    position: absolute;
    font-size: 20px;
    top: 50%;
    transform: translateY(-50%);
    left: 58%;
    white-space: nowrap;
}
.shopdian{
    margin-top: 20px;
    display: flex;
}
.shopdian>*{
    flex: 1;
}
.shopdian>.dian1{
    padding-left: 20px;
    display: flex;
    position: relative;
}
.shopdian>.dian1::after{
    position: absolute;
    content: "";
    height: 50%;
    top: 50%;
    right: 0;
    border-right:1px solid #999;
    transform: translateY(-50%);
}
.shopdian>.dian1>*{
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
}
.shopdian>.dian2{
   height: 60px;
   display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: center;
   padding-left: 20px;
}
.shopdian>.dian2>*{
    flex: 1;
    font-size: 12px;
}
.gao{
    color: green;
}
.shopdian>.dian2 .active{
    color: red;
}
.tugao{
    height: 10px;
    width: 10px;
    display: inline-block;
    background-color: green;
    color: white;
    content: "低";
}
.shopdian>.dian2 .tuactive{
    background-color: red;
    content: "高";
}
.shopdian12{
  width: 30%;
  font-size: 20px;
  line-height: 30px;
  height: 30px;
  text-align: center;
  margin: 2px auto;
  background-color: #ddd;
  border-radius: 5px;
}
</style>