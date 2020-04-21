<!--  -->
<template>
<div @click="dian">
    <div :class="{active:isactive}"><slot name="icon"></slot></div>
    <div :style="isColor"><slot name="name"></slot></div>
</div>
      <!-- <div><div class="iconfont icon-index"></div>主页</div> -->
</template>

<script>
export default {
  data () {
    return {
      // isactive:true
    };
  },
  computed: {
    isactive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    isColor(){
      return this.isactive? {color:this.activeColor}:{}
    }
  },
  props:{
   path:String,
   activeColor:{
        type:String,
        default:"red"
        }
  },
  components: {},

  mounted(){},

  methods: {
    dian(){
      this.$router.push(this.path)
    }
  }
}

</script>
<style>
#tabber .active{
    color: red;
}
</style>