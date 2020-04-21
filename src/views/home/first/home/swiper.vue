<!--  -->
<template>
  <div>
      <swiper>
     <swiper-item v-for="item in banners" :key="item.image">
       <a :href="item.link">
         <img :src="item.image" alt="">
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

  methods: {}
}

</script>
<style>
</style>