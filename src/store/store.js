import Vue from 'vue'
import Vuex from 'vuex'
import { setStore, getStore } from '@/config/utils'

Vue.use(Vuex)

const user = getStore('user')

export default new Vuex.Store({
  state: {
    loginUser: user
  },
  mutations: {
    setLoginUser(state, user) {
      state.loginUser = user
      setStore('user', user)
    },
    updateUserData(state, user) {
      state.loginUser.data.user = user
      setStore('user', state.loginUser)
    }
  },
  actions: {

  },
  getters: {
    getLoginUserInfo(state) {
      try {
        return state.loginUser
      }
      catch {
        return null;
      }
    },
    isUserLogined(state) {
      try {
        if(state.loginUser.token != null && state.loginUser.token != ''&& typeof(state.loginUser.token) != undefined ) {
          return true
        }
        return false
      }
      catch {
        return false;
      }
     
    }
  }
})