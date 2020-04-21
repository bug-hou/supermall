<!--  -->
<template>
  <div class="navbar" :style="isColor">
      <div class="left">
          <slot name="left"></slot>
      </div>
      <div class="main">
          <slot name="main"></slot>
      </div>
      <div class="right">
          <slot name="right"></slot>
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
     bColor:{
         default:"pink"
     }
  },

  components: {},

  computed: {
      isColor(){
          return "background-color:"+this.bColor;
      }
  },

  mounted(){},

  methods: {}
}

</script>
<style>
.navbar{
    z-index: 10;
    background-color: pink; 
    width: 100%;
    height: 44px;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
    color: #fff;
}
.left,.right{
    width: 60px;
    height: 100%;
}
.main{
    flex: 1;
}
/* .navbar {
display: flex;
line-height: 44px;
text-align: center;
box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.left, .right {
width: 40px;
}
.main {
flex: 1;
} */
</style>