<!--  -->
<template>
  <div class="swapper" ref="swapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  data () {
    return {
        scroll : null
    };
  },
  components: {},

  computed: {},

  mounted(){
     this.scroll = new BScroll(this.$refs.swapper,{
         pullUpLoad:true,
         click:true,
         probeType:3
     }),
     this.scroll.on("scroll",position=>{
           this.$emit("scrolly",position.y);
     })
      this.scroll.on("pullingUp",()=>{
      //  console.log("lll");
               this.$emit("fush")
      });
  },
 
  methods: {}
}

</script>
<style scoped>
</style>