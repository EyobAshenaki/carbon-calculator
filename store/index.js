export const state = () => ({
  toast: {
    open: false,
    message: '',
    type: 'default', // success, error, info, warning, default
  },
  selectedMenuItem: 'getStarted',
  isMenuClosed: true,
})

export const getters = {
  getToastState(state) {
    return state.toast.open
  },
  getToastData(state) {
    return { message: state.toast.message, type: state.toast.type }
  },
  getMenuState(state) {
    return state.isMenuClosed
  },
  getSelectedMenuItem(state) {
    return state.selectedMenuItem
  },
}

export const mutations = {
  TOGGLE_TOAST(state, open) {
    state.toast.open = !state.toast.open
  },
  SET_TOAST(state, { message, type }) {
    state.toast.message = message
    state.toast.type = type
  },
  TOGGLE_MENU(state) {
    state.isMenuClosed = !state.isMenuClosed
  },
  SET_SELECTED_MENU_ITEM(state, payload) {
    state.selectedMenuItem = payload
  },
}

export const actions = {
  toggleToast({ commit }) {
    commit('TOGGLE_TOAST')
  },
  toggleMenu({ commit, getters }) {
    commit('TOGGLE_MENU')
  },
  setAlert({ commit }, payload) {
    commit('SET_TOAST', payload)
  },
  setSelectedMenuItem({ commit }, payload) {
    commit('SET_SELECTED_MENU_ITEM', payload)
  },
}
