export const state = () => ({
  contractName: '',
  emissions: {
    gaseousEmission: [],
    liquidEmission: [],
    solidEmission: [],
    agricultureEmission: [],
    metalsEmission: [],
    mineralsEmission: [],
  },
  totalEmission: 0,
  conversionData: {
    pound: {
      dollar: 1.21,
      euro: 1.13,
    },
    dollar: {
      pound: 0.83,
      euro: 0.94,
    },
    euro: {
      pound: 0.88,
      dollar: 1.07,
    },
    kilogram: {
      tonne: 0.001,
    },
    tonne: {
      kilogram: 1000,
    },
    litre: {
      'cubic metre': 0.001,
    },
    'cubic metre': {
      litre: 1000,
    },
  },
})

export const getters = {
  getContractName(state) {
    return state.contractName
  },
  getEmissions(state) {
    return state.emissions
  },
  getTotalEmission(state) {
    return state.totalEmission
  },
  getConversionData(state) {
    return state.conversionData
  },
}

export const mutations = {
  SET_CONTRACT_NAME(state, payload) {
    state.contractName = payload
  },
  SET_GAS_EMISSION(state, payload) {
    state.emissions.gaseousEmission = payload
  },
  SET_LIQUID_EMISSION(state, payload) {
    state.emissions.liquidEmission = payload
  },
  SET_SOLID_EMISSION(state, payload) {
    state.emissions.solidEmission = payload
  },
  SET_AGRICULTURE_EMISSION(state, payload) {
    state.emissions.agricultureEmission = payload
  },
  SET_METALS_EMISSION(state, payload) {
    state.emissions.metalsEmission = payload
  },
  SET_MINERALS_EMISSION(state, payload) {
    state.emissions.mineralsEmission = payload
  },
  SET_TOTAL_EMISSION(state, payload) {
    state.totalEmission = payload
  },
}

export const actions = {
  async nextSection(
    { dispatch, commit, rootState },
    { contractName = '', emissionData }
  ) {
    emissionData = emissionData
      ? await dispatch('calculateConversion', {
          emissionData,
        })
      : null

    switch (rootState.selectedMenuItem) {
      case 'getStarted':
        dispatch('setSelectedMenuItem', 'gaseousFuels', { root: true })

        if (!contractName) return

        dispatch('resetEmission')
        commit('SET_CONTRACT_NAME', contractName)
        break

      case 'gaseousFuels':
        dispatch('setSelectedMenuItem', 'liquidFuels', { root: true })

        if (!emissionData) return

        commit('SET_GAS_EMISSION', emissionData)
        break

      case 'liquidFuels':
        dispatch('setSelectedMenuItem', 'solidFuels', { root: true })

        if (!emissionData) return

        commit('SET_LIQUID_EMISSION', emissionData)
        break

      case 'solidFuels':
        dispatch('setSelectedMenuItem', 'agriculture', { root: true })

        if (!emissionData) return

        commit('SET_SOLID_EMISSION', emissionData)
        break

      case 'agriculture':
        dispatch('setSelectedMenuItem', 'metals', { root: true })

        if (!emissionData) return

        commit('SET_AGRICULTURE_EMISSION', emissionData)
        break

      case 'metals':
        dispatch('setSelectedMenuItem', 'totalEmission', { root: true })

        if (!emissionData) return

        commit('SET_METALS_EMISSION', emissionData)
        break

      // case 'minerals':
      // dispatch('setSelectedMenuItem', 'totalEmission', { root: true })

      //   if (!emissionData) return

      //   commit('SET_MINERALS_EMISSION', emissionData)
      //   break

      case 'totalEmission':
        dispatch('resetEmission')
        dispatch('setSelectedMenuItem', 'getStarted', { root: true })
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
      // case 'minerals':
      //   commit('SET_SELECTED_MENU_ITEM', 'metals', { root: true })
      //   break
      case 'totalEmission':
        commit('SET_SELECTED_MENU_ITEM', 'metals', { root: true })
        break
      default:
        break
    }
  },

  resetEmission({ commit }) {
    commit('SET_CONTRACT_NAME', '')
    commit('SET_GAS_EMISSION', [])
    commit('SET_LIQUID_EMISSION', [])
    commit('SET_SOLID_EMISSION', [])
    commit('SET_AGRICULTURE_EMISSION', [])
    commit('SET_METALS_EMISSION', [])
    commit('SET_MINERALS_EMISSION', [])
    commit('SET_TOTAL_EMISSION', 0)
  },

  calculateTotalEmission({ commit, getters }) {
    const emissions = getters.getEmissions

    const totalEmission = Object.values(emissions).reduce((total, emission) => {
      const tempEmission = emission.reduce((acc, cur) => {
        const tempCur = parseFloat(cur.amount) * cur.conversionFactor
        return acc + tempCur
      }, 0)
      return total + tempEmission
    }, 0)

    commit('SET_TOTAL_EMISSION', totalEmission)
  },

  convertUnit({ state }, { value, fromUnit, toUnit }) {
    return value * state.conversionData[fromUnit][toUnit]
  },

  // convert emission data values into the provided unit
  calculateConversion({ dispatch }, { emissionData }) {
    emissionData = emissionData.map(async (item) => {
      if (item.unit !== item.targetUnit)
        item.conversionFactor = await dispatch('convertUnit', {
          value: item.conversionFactor,
          fromUnit: item.unit,
          toUnit: item.targetUnit,
        })
      item.unit = item.targetUnit
      return item
    })

    return Promise.all(emissionData)
  },
}
