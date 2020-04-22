<!--  -->
<template>
   <swiper>
      <swiper-item class="detailswiper" v-for="(item,index) in imageTop" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper/index"
export default {
  data () {
    return {
    };
  },
  props:{
    imageTop:{
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
<style scoped>
.detailswiper{
    height: 300px;
    overflow: hidden;
}
</style>