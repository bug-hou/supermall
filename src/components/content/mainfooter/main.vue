<!--  -->
<template>
      <tabber>
      <min path="/first"><div slot="icon" class="iconfont icon-index"></div>
      <div slot="name">主页</div></min>
      <min path="/search"><div slot="icon" class="iconfont icon-sort"></div>
      <div slot="name">分类</div></min>
      <min path="/car"><div slot="icon" class="iconfont icon-che"></div>
      <div slot="name">购物车</div></min>
      <min path="/me"><div slot="icon" class="iconfont icon-Icon_wode--outline"></div>
      <div slot="name">我的</div></min>
    </tabber>
</template>

<script>
import tabber from 'components/common/tabber/footer';
import min from 'components/common/tabber/min';

export default {
  data () {
    return {
    };
  },

  components: {
    tabber,
    min
  },

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style>
</style>