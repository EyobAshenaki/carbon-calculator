<template>
  <section class="w-full flex justify-center p-5 px-0 md:p-10">
    <get-started v-if="selectedMenuItem === 'getStarted'" />
    <gaseous-fuels v-if="selectedMenuItem === 'gaseousFuels'" />
    <liquid-fuels v-if="selectedMenuItem === 'liquidFuels'" />
    <solid-fuels v-if="selectedMenuItem === 'solidFuels'" />
    <agriculture v-if="selectedMenuItem === 'agriculture'" />
    <metals v-if="selectedMenuItem === 'metals'" />
    <minerals v-if="selectedMenuItem === 'minerals'" />
    <total-emissions v-if="selectedMenuItem === 'totalEmission'" />
    <designers v-if="selectedMenuItem === 'designers'" />
    <carbon-accountants v-if="selectedMenuItem === 'carbonAccountants'" />
    <smart-energy v-if="selectedMenuItem === 'smartEnergy'" />
  </section>
</template>

<script>
import GetStarted from '~/components/measureSection/GetStarted.vue'
import GaseousFuels from '~/components/measureSection/GaseousFuels.vue'
import LiquidFuels from '~/components/measureSection/LiquidFuels.vue'
import SolidFuels from '~/components/measureSection/SolidFuels.vue'
import Agriculture from '~/components/measureSection/Agriculture.vue'
import Metals from '~/components/measureSection/Metals.vue'
import Minerals from '~/components/measureSection/Minerals.vue'
import TotalEmissions from '~/components/measureSection/TotalEmissions.vue'
import Designers from '~/components/menuSection/Designers.vue'
import CarbonAccountants from '~/components/menuSection/CarbonAccountants.vue'
import SmartEnergy from '~/components/othersSection/SmartEnergy.vue'

export default {
  name: 'IndexPage',
  components: {
    GetStarted,
    GaseousFuels,
    LiquidFuels,
    SolidFuels,
    Agriculture,
    Metals,
    Minerals,
    TotalEmissions,
    Designers,
    CarbonAccountants,
    SmartEnergy,
  },
  computed: {
    selectedMenuItem() {
      return this.$store.getters.getSelectedMenuItem
    },
  },
}
</script>
