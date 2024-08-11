import { createStore } from 'vuex'

const store = createStore({
  state: {
    userLogged: false
  },
  mutations: {
    setUserLogged(state, value) {
      state.userLogged = value
    }
  },
  actions: {

  }
})

export default store