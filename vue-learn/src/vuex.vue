<template>
  <div id="app">
        <h1>Hello world</h1>
        <p>{{$store.state.count}} - {{count}} {{age}}</p>
        <p v-once>{{count}}</p>
        <button @click="add()">增加1</button>
        <button @click="add(2)">增加2</button>
        <button @click="$store.commit('delete', {a:2})">减少2</button>
        <button @click="addAll">增加10</button>
        <button @click="deleteAll">减少10</button>
    </div>
</template>



<script>
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

    export default {
        name: 'app',
        data () {
            return {
                age:11
            }
        },
        computed: {
            // count () {
            //     return this.$store.state.count
            // }
            ...mapState({
                count:state=>state.count
            }),
            // count () {
            //     return this.$store.getters.count
            // },
            // ...mapGetters(['count'])
        },
        methods: {
            ...mapMutations(['add', 'delete']),
            ...mapActions(['addAll']),
            ...mapActions({
                deleteAll: 'deleteAll'
            })
        },
        beforeCreate(){
            console.log('1,beforeCreate,初始化之后')
        },
        created () {
            console.log('2,created,创建完成')
        },
        beforeMount () {
            console.log('3,beforeMount,挂载之前')
        },
        mounted () {
            console.log('4,mounted,挂在完成')
        },
        beforeUpdate () {
            console.log('5,beforeUpdate,数据更新前')
        },
        updated () {
            console.log('6,updated,更新后')
        },
        activated () {
            console.log('7,activated,')
        },
        deactivated () {
            console.log('8,deactivated')
        },
        beforeDestroy () {
            console.log('9,beforeDestroy,销毁前')
        },
        destroyed () {
            console.log('10,destroyed,销毁后')
        }
    }
</script>
