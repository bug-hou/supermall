<!--  -->
<template>
  <div class="vartab">
      <div v-for="(item,index) in vartab" :key="index" @click="dian(index)" :class="{active:item===vartab[current]}"><span>{{item}}</span></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current : 0
    };
  },
  props:{
  vartab:{
    type:Array,
    default(){
        return []
    }
  }
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {
    dian(index){
      this.current = index;
      this.$emit("show",this.vartab[index]);
    }
  }
}

</script>
<style>
.vartab{
    width: 100%;
    height: 44px;
    line-height: 44px;
    display: flex;
    z-index: 10;
    text-align: center;
}
.vartab>*{
    flex: 1;
}
.active{
  color: pink;
}
.vartab span{
  padding: 3px;
}
.active>span{
  border-bottom: 2px solid pink;
}
</style>