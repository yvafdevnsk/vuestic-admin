import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n' // load vuex i18n module
import app from './modules/app'
import axios from 'axios'

import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
  },
  state: {
    loginId: '',
    loginPassword: '',
    loginSucceeded: false,
    loginUserName: '',
    summaryTerm: 'short',
    userProfileShowInfo: true,
    userProfileShowSecurity: false,
  },
  mutations: {
    setLoginId (state, payload) {
      state.loginId = payload.loginId
    },
    setLoginPassword (state, payload) {
      state.loginPassword = payload.loginPassword
    },
    setLoginSucceeded (state, payload) {
      state.loginSucceeded = payload.loginSucceeded
    },
    setLoginUserName (state, payload) {
      state.loginUserName = payload.loginUserName
    },
    setSummaryTerm (state, payload) {
      state.summaryTerm = payload.summaryTerm
    },
    setUserProfileShowInfo (state, payload) {
      state.userProfileShowInfo = payload.show
    },
    setUserProfileShowSecurity (state, payload) {
      state.userProfileShowSecurity = payload.show
    },
  },
  actions: {
    getLoginUserName (context) {
      return axios
        .get('http://localhost:8080/VueService-0.0.1-SNAPSHOT/login', {
          params: {
            loginId: context.state.loginId,
            loginPassword: context.state.loginPassword,
          },
        })
        .then(response => {
          if (response.data.loginSucceeded) {
            context.commit('setLoginUserName', {
              loginUserName: response.data.loginUserName,
            })
          }
          context.commit('setLoginSucceeded', {
            loginSucceeded: response.data.loginSucceeded,
          })
        })
        .catch(error => {
          console.log(error)
          context.commit('setLoginSucceeded', {
            loginSucceeded: false,
          })
        })
    },
  },
})

Vue.use(VuexI18n.plugin, store)

export default store
