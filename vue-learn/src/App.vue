<template>
  <div id="app">
    <ul>
    <li>
      <router-link to="/first">first</router-link>
      <ul>
        <li><router-link to="/first/child1">/first/child1</router-link></li>
        <li><router-link to="/first/child2">/first/child2</router-link></li>
      </ul>
    </li>
    <li><router-link :to="{ path: 'query', query: { plan: 'private' }}">query</router-link></li>
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
    <li><router-link :to="{ name: 'user', params: { id: 'foo' }}">User</router-link></li>
    </ul>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'app'
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
</style>
