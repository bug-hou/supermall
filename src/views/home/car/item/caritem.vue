<!--  -->
<template>
  <div id="Cbox" @click="Cdian">
      <div class="img"><img :src="item.img" alt=""></div>
      <div class="Lbox">
        <div class="title">{{item.title}}</div>
        <div class="Pbox">
            <div class="price">￥{{item.price}}</div>
            <div class="count">x{{item.count}}</div>
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
      item:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  components: {},

  computed: {},

  mounted(){},

  methods: {
      Cdian(){
          this.$router.push("/detail/"+this.item.id)
      }
  }
}

</script>
<style scoped>
#Cbox{
    width: 100%;
    margin: auto;
    height: 100px;
    display: flex;
    margin: 10px 0;
    /* border-radius: 8px; */
    background: #ddd;
}
.img>img{
    width: 80px;
    height: 80px;
}
.img{
    height: 80px;
    display: flex;
    justify-content: center;
    margin-top:10px ;
    margin-left: 5px;
}
.Lbox{
    margin-left: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
}
.title{
    align-items: center;
    display: flex;
    height: 60px;
    font-size: 16px;
    flex-direction: row;
}
.Pbox{
    display: flex;
}
.price{
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: red;
    font-size: 25px;
}
.count{
    margin-right: 10px;
    width: 20px;
    display: flex;
    align-items: center;
    font-size: 15px;
}
</style>