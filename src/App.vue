<template>
  <div id="app">
    <keep-alive exclude="detail" v-if="$store.state.isRouterAlive">
    <router-view></router-view>
    </keep-alive>
    <main-footer/>
  </div>
</template>
<script>
import mainFooter from "./components/content/mainfooter/main"
export default {
  components:{
    mainFooter
  }
}
</script>
<style>
@import url(./assets/css/base.css);
</style>
