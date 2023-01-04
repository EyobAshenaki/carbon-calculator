export const state = () => ({
  contactName: '',
  gaseousEmission: [],
  liquidEmission: [],
  solidEmission: [],
  agricultureEmission: [],
  metalsEmission: [],
  mineralsEmission: [],
  totalEmission: 0,
})

export const getters = {
  getContactName(state) {
    return state.contactName
  },
  getGasEmission(state) {
    return state.gaseousEmission
  },
  getLiquidEmission(state) {
    return state.liquidEmission
  },
  getSolidEmission(state) {
    return state.solidEmission
  },
  getAgricultureEmission(state) {
    return state.agricultureEmission
  },
  getMetalsEmission(state) {
    return state.metalsEmission
  },
  getMineralsEmission(state) {
    return state.mineralsEmission
  },
  getTotalEmission(state) {
    return state.totalEmission
  },
}

export const mutations = {
  SET_CONTACT_NAME(state, payload) {
    state.contactName = payload
  },
  SET_GAS_EMISSION(state, payload) {
    state.gaseousEmission = payload
  },
  SET_LIQUID_EMISSION(state, payload) {
    state.liquidEmission = payload
  },
  SET_SOLID_EMISSION(state, payload) {
    state.solidEmission = payload
  },
  SET_AGRICULTURE_EMISSION(state, payload) {
    state.agricultureEmission = payload
  },
  SET_METALS_EMISSION(state, payload) {
    state.metalsEmission = payload
  },
  SET_MINERALS_EMISSION(state, payload) {
    state.mineralsEmission = payload
  },
  SET_TOTAL_EMISSION(state, payload) {
    state.totalEmission = payload
  },
}

export const actions = {
  nextSection({ dispatch, commit, rootState }, payload) {
    switch (rootState.selectedMenuItem) {
      case 'getStarted':
        commit('SET_SELECTED_MENU_ITEM', 'gaseousFuels', {
          root: true,
        })

        if (!payload) return

        dispatch('resetEmission')
        commit('SET_CONTACT_NAME', payload)
        break

      case 'gaseousFuels':
        commit('SET_SELECTED_MENU_ITEM', 'liquidFuels', { root: true })

        if (!payload) return

        commit('SET_GAS_EMISSION', payload)
        break

      case 'liquidFuels':
        commit('SET_SELECTED_MENU_ITEM', 'solidFuels', { root: true })

        if (!payload) return

        commit('SET_LIQUID_EMISSION', payload)
        break

      case 'solidFuels':
        commit('SET_SELECTED_MENU_ITEM', 'agriculture', { root: true })

        if (!payload) return

        commit('SET_SOLID_EMISSION', payload)
        break

      case 'agriculture':
        commit('SET_SELECTED_MENU_ITEM', 'metals', { root: true })

        if (!payload) return

        commit('SET_AGRICULTURE_EMISSION', payload)
        break

      case 'metals':
        commit('SET_SELECTED_MENU_ITEM', 'minerals', { root: true })

        if (!payload) return

        commit('SET_METALS_EMISSION', payload)
        break

      case 'minerals':
        commit('SET_SELECTED_MENU_ITEM', 'totalEmission', {
          root: true,
        })

        if (!payload) return

        commit('SET_MINERALS_EMISSION', payload)
        break

      case 'totalEmission':
        commit('SET_SELECTED_MENU_ITEM', 'getStarted', { root: true })

        if (!payload) return

        commit('SET_TOTAL_EMISSION', payload)
        break

      default:
        break
    }
  },

  previousSection({ commit, rootState }) {
    switch (rootState.selectedMenuItem) {
      case 'getStarted':
        commit('SET_SELECTED_MENU_ITEM', 'totalEmission', {
          root: true,
        })
        break
      case 'gaseousFuels':
        commit('SET_SELECTED_MENU_ITEM', 'getStarted', { root: true })
        break
      case 'liquidFuels':
        commit('SET_SELECTED_MENU_ITEM', 'gaseousFuels', { root: true })
        break
      case 'solidFuels':
        commit('SET_SELECTED_MENU_ITEM', 'liquidFuels', { root: true })
        break
      case 'agriculture':
        commit('SET_SELECTED_MENU_ITEM', 'solidFuels', { root: true })
        break
      case 'metals':
        commit('SET_SELECTED_MENU_ITEM', 'agriculture', { root: true })
        break
      case 'minerals':
        commit('SET_SELECTED_MENU_ITEM', 'metals', { root: true })
        break
      case 'totalEmission':
        commit('SET_SELECTED_MENU_ITEM', 'minerals', { root: true })
        break
      default:
        break
    }
  },

  resetEmission({ commit }) {
    commit('SET_CONTACT_NAME', '')
    commit('SET_GAS_EMISSION', [])
    commit('SET_LIQUID_EMISSION', [])
    commit('SET_SOLID_EMISSION', [])
    commit('SET_AGRICULTURE_EMISSION', [])
    commit('SET_METALS_EMISSION', [])
    commit('SET_MINERALS_EMISSION', [])
    commit('SET_TOTAL_EMISSION', 0)
  },

  // calculateTotalEmission({ commit, state }) {
}
