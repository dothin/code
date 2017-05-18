const mutations = {
  SET_LOGIN_INFO(state, payload){
    state.username = payload.username;
    state.role = payload.role;
  },
    add (state, n=1) {
        state.count += n
    },
    delete (state, n) {
        state.count -= n.a
    }
};

export default mutations;
