/*
* @Author: dothin
* @Date:   2017-05-12 23:38:35
* @Last Modified by:   dothin
* @Last Modified time: 2017-05-15 02:02:32
*/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//状态对象
const state = {
    count: 10
}

//触发状态
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

export default new Vuex.Store({
    state,
    mutations,
    getters
})