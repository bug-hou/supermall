<!--  -->
<template>
  <div class="ping">
   <div class="pTitle">评论</div>
   <div class="pContent">
       <p>{{rate.created}}</p>
       <p>{{rate.content}}</p>
   </div>
   <p>{{rate.explain}}</p>
   <p class="Pstyle">{{rate.style}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
      rate:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
.ping{
    margin-top: 10px;
    width: 100%;
}
.pTitle{
    color: #008c8c;
    font-size: 20px;
}
.pContent{
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 12px;
    margin-bottom: 5px;
}
.pContent>*{
    flex: 1;
}
p{
    font-size: 12px;
}
.Pstyle{
    margin-top: 5px;
    font-size: 15px;
    color: red;
}
</style>