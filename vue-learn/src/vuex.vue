<template>
  <div id="app">
        <h1>Hello world</h1>
        <p>{{$store.state.count}} - {{count}}</p>
        <button @click="$store.commit('add')">增加</button>
        <button v-on:click="$store.commit('delete')">减少</button>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'app',
        data() {
            return {
                count: 0
            }
        },
        computed: {
            count () {
                return this.$store.state.count
            }
        }
        /*computed: mapState({
            count:state=>state.count
        })*/
    }
</script>