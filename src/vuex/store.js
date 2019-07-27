import Vue from 'vue'
import Vuex from 'vuex'
import request from '@/common/js/request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : null
  },
  mutations: {
    UPDATE_USERINFO (state, payload) {
      state.userInfo = payload
      sessionStorage.setItem('userInfo', JSON.stringify(payload))
    }
  },
  actions: {
    login ({ commit }, payload) {
      request.post('/login', payload).then(res => {
        if (res.data) {
          commit('UPDATE_USERINFO', res.data)
        }
      })
    }
  },
  getters: {
    userInfo (state, getters) {
      return state.userInfo
    }
  }
})
