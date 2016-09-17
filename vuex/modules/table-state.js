import {
  TABLE_SET_FILTER,
  VUETABLE_REFRESH
} from '../mutation-types'

const state = {
  searchFor: '',
  appendParams: '',
  refresh: false
}

const mutations = {
  [TABLE_SET_FILTER] (state, text) {
    state.appendParams = 'filter=' + text
  },
  [VUETABLE_REFRESH] (state, appendParams, searchFor) {
    debugger
    state.appendParams = appendParams
    state.searchFor = searchFor
  },

}

export default ({
  state,
  mutations
})
