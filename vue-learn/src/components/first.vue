<template>
  <div class="first">
    <h1>{{ msg }}</h1>
    <button v-on:click="goSecond">second</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'first',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    goSecond(){
      this.$router.push('/second');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
</style>
