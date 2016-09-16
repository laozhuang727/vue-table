import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'


import note from './modules/note'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    note,
  },
  strict: debug
})
