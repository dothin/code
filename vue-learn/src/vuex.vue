<template>
  <div id="app">
        <h1>Hello world</h1>
        <p>{{$store.state.count}} - {{count}} {{age}}</p>
        <button @click="add()">增加</button>
        <button @click="add(2)">增加</button>
        <button v-on:click="$store.commit('delete', {a:2})">减少</button>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters } from 'vuex'

    export default {
        name: 'app',
        data () {
            return {
                age:11
            }
        },
        /*computed: {
            count () {
                return this.$store.state.count
            }
        }*/
        computed: {
            ...mapState({
                count:state=>state.count
            }),
            // count () {
            //     return this.$store.getters.count
            // },
            ...mapGetters(['count'])
        },
        methods: {
            ...mapMutations(['add', 'delete'])
        }
    }
</script>