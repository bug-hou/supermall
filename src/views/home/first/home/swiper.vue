<!--  -->
<template>
  <div>
      <swiper>
     <swiper-item v-for="item in banners" :key="item.image">
       <a :href="item.link">
         <img :src="item.image" alt="" @load="swiperload">
       </a>
     </swiper-item>
    </swiper>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper/index"

export default {
  data () {
    return {
      isload:true
    };
  },
   props:{
     banners:{
         type:Array,
         default(){
             return []
         }
     }
   },
  components: {
    Swiper,
    SwiperItem
  },

  computed: {},

  mounted(){},

  methods: {
    swiperload(){
      if(this.isload){
        this.$bus.$emit("swiperimgload")
        this.isload = !this.isload;
      }
    }
  }
}

</script>
<style>
</style>