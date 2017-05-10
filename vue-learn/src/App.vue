<template>
  <div id="app">

    <button v-on:click="goBack">后退</button>
    <button @click="goTo">前进</button>
    <button v-on:click="goState">跳转</button>
    <button v-on:click="goParams">传参</button>
    <ul>
    <li>
      <router-link to="/first">first</router-link>
      <ul>
        <li><router-link to="/first/child1">/first/child1</router-link></li>
        <li><router-link to="/first/child2">/first/child2</router-link></li>
      </ul>
    </li>
    <li><router-link :to="{ path: '/query', query: { plan: 'private' }}">query</router-link></li>
    <li><router-link :to="{ path: '/replace'}" replace>replace</router-link></li>
    <li><router-link :to="{ path: 'append'}" append>append</router-link></li>
    <li><router-link to="/tag" tag="li">tag</router-link></li>
    <li><router-link to="/second">second</router-link></li>
    <li><router-link to="/user/bar">/user/bar</router-link></li>
    <li><router-link to="/user/foo">/user/foo</router-link></li>
    <ul>
        <li><router-link to="/user/foo/profile">/user/foo/profile</router-link></li>
        <li><router-link to="/user/foo/posts">/user/foo/posts</router-link></li>
    </ul>
    <li><router-link :to="{ name: 'params', params: { id: 1 }}">params</router-link></li>
    <li><router-link to="/redirect">redirect</router-link></li>
    <li><router-link to="/redirect1">redirect1</router-link></li>
    <li><router-link to="/redirect2/001">redirect2</router-link></li>
    <li><router-link to="/fdafda">404</router-link></li>
    </ul>
    <transition :name="aaa"><router-view></router-view></transition>
  </div>

</template>

<script>
export default {
  name: 'app',
  watch: {
    '$route' (to, from) {
        if(to.path === '/second'){
            this.aaa = 'fade';
        }else{
          this.aaa = 'fade1';
        }
    }
  },
  methods: {
      goBack(){
        this.$router.go(-1);
      },
      goTo(){
        this.$router.go(1);
      },
      goState(){
        this.$router.push('/second');
      },
      goParams(){
        this.$router.push({path:'params',params:{name:1}});
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
  color: red;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity .5s;
}
.fade-enter,.fade-leave-active{
  opacity: 0;
}
.fade1-enter-active,.fade1-leave-active{
  transition: opacity 2s;
}
.fade1-enter,.fade1-leave-active{
  opacity: 0;
}
</style>
