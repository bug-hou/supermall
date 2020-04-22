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
              <span>{{shopinfo.fans}}</span><br/>
              <span>总销量</span>
              </div>
              <div>
              <span>{{shopinfo.goodsCount}}</span><br/>
              <span>全部宝贝</span>
              </div>
          </div>
          <div>
          </div>
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

  computed: {},

  mounted(){},

  methods: {}
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
}
.shopdian>.dian1>*{
    flex: 1;
}
</style>