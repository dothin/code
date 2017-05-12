/*
* @Author: dothin
* @Date:   2017-05-12 23:38:35
* @Last Modified by:   dothin
* @Last Modified time: 2017-05-13 00:29:05
*/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//状态对象
const state = {
    count: 0
}

//触发状态
const mutations = {
    add (state) {
        state.count ++
    },
    delete (state) {
        state.count --
    }
}

export default new Vuex.Store({
    state,
    mutations
})