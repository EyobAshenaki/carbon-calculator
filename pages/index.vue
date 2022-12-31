<template>
  <section class="p-10">
    <get-started v-if="selectedMenuItem === 'getStarted'" />
  </section>
</template>

<script>
import GetStarted from '~/components/measureSection/GetStarted.vue'
export default {
  name: 'IndexPage',
  components: { GetStarted },
  computed: {
    selectedMenuItem() {
      return this.$store.getters.getSelectedMenuItem
    },
  },
}
</script>
