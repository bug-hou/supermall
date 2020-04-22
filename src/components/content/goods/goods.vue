<!--  -->
<template>
  <div class="goods">
      <goodsitem v-for="(item,index) in goodslist.list" :key="index" :item="item" @click.native="goodsclick(item)"/>
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

  methods: {
    goodsclick(item){
      console.log(item)
      this.$router.push("/detail/"+item.iid);
    }
  }
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