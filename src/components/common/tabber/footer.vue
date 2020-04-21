<!--  -->
<template>
<div>    
    <div id="tabber">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style>
@import url(//at.alicdn.com/t/font_1674147_mzst1i0gsg.css);
 #tabber{
   z-index: 11;
   width: 100%;
   height: 49px;
   display: flex;
   background-color: #f6f6f6;
   position: fixed;
   left: 0;
   bottom: 0;
   box-shadow: 0 -1px 3px rgba(100, 100, 100, .2);
 }
 #tabber>*{
   flex: 1;
   justify-content: center;
   align-items: center;
   display: flex;
   font-size: 12px;
   flex-direction: column;
 }
</style>