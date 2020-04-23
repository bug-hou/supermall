<!--  -->
<template>
  <div id="Xbox">
      <div class="Xbox">
          <div class="column" v-for="(item,index) in itemParams.tables" :key="index">
              <div v-for="it in item" :key="it">{{it}}</div>
          </div>
      </div>
      <div class="set" v-for="(item,index) in itemParams.set" :key="index">
          <div class="key">{{item.key}}</div>
          <div class="value">{{item.value}}</div>
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
  itemParams:{}
  },
  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
#Xbox{
    width: 100%;
    margin-top: 10px;
    box-shadow: 0 -1px 2px #888;
}
.Xbox{
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
.column{
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #999;
}
.column>*{
    flex: 1;
    justify-self: flex-start;
}
.set{
        width: 90%;
    margin: 0 auto;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
}
.set>.key{
    width: 100px;
}
.set>.value{
    flex: 1;
    color: red;
}
</style>