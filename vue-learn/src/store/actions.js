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
};

export default actions;
