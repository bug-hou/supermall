<!--  -->
<template>
     <navbar bColor="white">
      <div slot="left" class="iconfont icon-fanhui" @click="back"></div>
      <div slot="main" class="main">
          <div v-for="(item,index) in title" :key="index" @click="dian(index)" :class="{active:index === current}">{{item}}</div>
      </div>
    </navbar>
</template>

<script>
import navbar from "components/common/navbar/navBar"
export default {
  data () {
    return {
      current:0
    };
  },
  props:{
    title:{
        type:Array,
        default(){
            return []
        }
    },
    // current :{
    //   type:Number,
    //   default:0
    // },
    shuju:{}
  },
  components: {
      navbar
  },
  created() {
  },

  computed: {},

  mounted(){},

  methods: {
      dian(index){
          this.current = index;
          this.$emit("position",index);
      },
      back(){
        //   console.log(this.$router);
          this.$router.back()
      }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1674147_ds11ng6uaco.css);
.icon-fanhui{
  font-size: 20px;
}
.main{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #333;
}
.main>*{
    flex: 1;
}
.active{
    color: pink;
}
</style>