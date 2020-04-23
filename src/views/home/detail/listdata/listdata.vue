<!--  -->
<template>
  <div>
      <div v-for="(item,index) in listdata" :key="index"><img :src="item" alt="" @load="imgload"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgCount:1,
      loadCount:1
    };
  },
  
  props:{
   listdata:{
       type:Array,
       default(){
           return [];
       }
   }
  },
  components: {},

  computed: {},

  mounted(){},

  methods: {
    imgload(){
      if(++this.imgCount === this.listdata.length){
        this.$emit("imgload");
      }
    }
  }
}

</script>
<style scoped>
img{
    width: 100%;
}
</style>