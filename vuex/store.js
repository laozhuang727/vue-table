import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'


import NoteManagerState from './modules/note-manager-state'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    NoteManagerState,
  },
  strict: debug
})
