<template>
  <section class="w-full flex justify-center p-5 px-0 md:p-10">
    <get-started v-if="selectedMenuItem === 'getStarted'" />
    <gaseous-fuels v-if="selectedMenuItem === 'gaseousFuels'" />
    <liquid-fuels v-if="selectedMenuItem === 'liquidFuels'" />
  </section>
</template>

<script>
import GetStarted from '~/components/measureSection/GetStarted.vue'
import GaseousFuels from '~/components/measureSection/GaseousFuels.vue'
import LiquidFuels from '~/components/measureSection/LiquidFuels.vue'

export default {
  name: 'IndexPage',
  components: {
    GetStarted,
    GaseousFuels,
    LiquidFuels,
  },
  computed: {
    selectedMenuItem() {
      return this.$store.getters.getSelectedMenuItem
    },
  },
}
</script>
