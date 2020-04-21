<!--  -->
<template>
  <div class="goods">
      <goodsitem v-for="(item,index) in goodslist.list" :key="index" :item="item"/>
  </div>
</template>

<script>
import goodsitem from "./goodsitem"

export default {
  data () {
    return {
    };
  },
  props:{
      goodslist:{
        default(){
            return {}
        }
      }
  },
  components: {
      goodsitem
  },
  
  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style>
.goods{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>