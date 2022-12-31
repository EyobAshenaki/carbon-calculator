export const state = () => ({
  contactName: '',
})

export const getters = {
  getContactName(state) {
    return state.contactName
  },
}

export const mutations = {
  SET_CONTACT_NAME(state, payload) {
    state.contactName = payload
  },
}

export const actions = {
  setContactName({ commit, getters }, payload) {
    commit('SET_CONTACT_NAME', payload)
    console.log('setContactName', getters.getContactName)
  },
}
