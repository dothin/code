/*
* @Author: dothin
* @Date:   2017-05-12 23:38:35
* @Last Modified by:   dothin
* @Last Modified time: 2017-05-20 01:54:38
*/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//状态对象
const state = {
    count: 10
}

//触发状态，同步
const mutations = {
    add (state, n=1) {
        state.count += n
    },
    delete (state, n) {
        state.count -= n.a
    }
}

const getters = {
    count (state) {
        return state.count += 100
    }
}

//异步
const actions = {
    addAll (context) {
        context.commit('add', 10)
        setTimeout(()=>{
            context.commit('delete',{a:20})
        },2000)
    },
    deleteAll ({commit}) {
        commit('delete', {a: 10})
    }
}

/*const moduleA = {
    state,
    mutations,
    actions,
    getters
}*/

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})