<template>
  <section class="w-full flex justify-center p-5 px-0 md:p-10">
    <get-started v-if="selectedMenuItem === 'getStarted'" />
    <gaseous-fuels v-if="selectedMenuItem === 'gaseousFuels'" />
  </section>
</template>

<script>
import GetStarted from '~/components/measureSection/GetStarted.vue'
import GaseousFuels from '~/components/measureSection/GaseousFuels.vue'

export default {
  name: 'IndexPage',
  components: {
    GetStarted,
    GaseousFuels,
  },
  computed: {
    selectedMenuItem() {
      return this.$store.getters.getSelectedMenuItem
    },
  },
}
</script>
