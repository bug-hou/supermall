<!--  -->
<template>
  <div id="price">
      <div class="heji">合计:{{price}}元</div>
      <div class="jie">结算</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
      price:{
          type:Number,
          default:0
      }
  },
  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
#price{
    display: flex;
    background: #303a52;
    align-items: center;
    border-radius: 5px;
}
.heji{
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
    flex: 1;
    align-items: center;
    margin-left: 50px;
}
.jie{
    height: 40px;
    width: 80px;
    border-radius: 10px;
    background: #fc5185;
    color: #e2f3f5;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
}
</style>