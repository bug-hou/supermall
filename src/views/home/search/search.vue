<!--  -->
<template>
  <div>
      <div class="sswapper">
      <ul class="content">
        <li>商品1</li>
        <li>商品2</li>
        <li>商品3</li>
        <li>商品4</li>
        <li>商品5</li>
        <li>商品6</li>
        <li>商品7</li>
        <li>商品8</li>
        <li>商品9</li>
        <li>商品10</li>
        <li>商品11</li>
        <li>商品12</li>
        <li>商品13</li>
        <li>商品14</li>
        <li>商品15</li>
        <li>商品16</li>
        <li>商品17</li>
        <li>商品18</li>
        <li>商品19</li>
        <li>商品20</li>
        <li>商品21</li>
        <li>商品22</li>
        <li>商品23</li>
        <li>商品24</li>
        <li>商品25</li>
        <li>商品26</li>
        <li>商品27</li>
        <li>商品28</li>
        <li>商品29</li>
        <li>商品30</li>
        <li>商品31</li>
        <li>商品32</li>
        <li>商品33</li>
        <li>商品34</li>
        <li>商品35</li>
        <li>商品36</li>
        <li>商品37</li>
        <li>商品38</li>
        <li>商品39</li>
        <li>商品40</li>
        <li>商品41</li>
        <li>商品42</li>
        <li>商品43</li>
        <li>商品44</li>
        <li>商品45</li>
        <li>商品46</li>
        <li>商品47</li>
        <li>商品48</li>
        <li>商品49</li>
        <li>商品50</li>
        <li>商品51</li>
        <li>商品52</li>
        <li>商品53</li>
        <li>商品54</li>
        <li>商品55</li>
        <li>商品56</li>
        <li>商品57</li>
        <li>商品58</li>
        <li>商品59</li>
        <li>商品60</li>
        <li>商品61</li>
        <li>商品62</li>
        <li>商品63</li>
        <li>商品64</li>
        <li>商品65</li>
        <li>商品66</li>
        <li>商品67</li>
        <li>商品68</li>
        <li>商品69</li>
        <li>商品70</li>
        <li>商品71</li>
        <li>商品72</li>
        <li>商品73</li>
        <li>商品74</li>
        <li>商品75</li>
        <li>商品76</li>
        <li>商品77</li>
        <li>商品78</li>
        <li>商品79</li>
        <li>商品80</li>
        <li>商品81</li>
        <li>商品82</li>
        <li>商品83</li>
        <li>商品84</li>
        <li>商品85</li>
        <li>商品86</li>
        <li>商品87</li>
        <li>商品88</li>
        <li>商品89</li>
        <li>商品90</li>
        <li>商品91</li>
        <li>商品92</li>
        <li>商品93</li>
        <li>商品94</li>
        <li>商品95</li>
        <li>商品96</li>
        <li>商品97</li>
        <li>商品98</li>
        <li>商品99</li>
        <li>商品100</li>
      </ul>
      </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll"
export default {
  data () {
    return {
      scroll :null
    };
  },
  created() {
    console.log("jjjj")
    
  },
  mounted() {    
    console.log("jjjj")
    console.log(document.querySelector(".sswapper"));
    this.scroll = new Bscroll(document.querySelector(".sswapper"),{

    })

  },
  components: {},

  computed: {},

  methods: {}
}

</script>
<style>
.sswapper{
  height: 150px;
  background-color: red;
  overflow: hidden;
}
</style>