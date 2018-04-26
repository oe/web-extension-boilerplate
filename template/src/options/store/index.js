import Vue from 'vue'
import Vuex from 'vuex'

import demo from './demo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    demo
  },
  strict: process.env.NODE_ENV !== 'production'
})
