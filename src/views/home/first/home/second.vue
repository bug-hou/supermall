<!--  -->
<template>
  <div id="second" >
  <div v-for="item in recommends" :key="item.image">
   <a :href="item.link">
       <img :src="item.image" alt="">
       <div>{{item.title}}</div>
   </a>
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
     recommends:{
         type:Array,
         default(){
             return []
         }
     }
 },

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style>
#second{
    width: 100%;
    display: flex;
    padding: 10px 0 20px;
    box-shadow: 0px 3px 5px rgba(100, 100, 100, .5);
}
img{
    width: 90%;
}
#second>div{
    flex: 1;
    font-size: 12px;
    text-align: center;
}
#second>div div{
    color: #008c8c;
}
</style>