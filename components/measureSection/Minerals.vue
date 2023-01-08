<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <measure-card
      :items="items"
      :unit-options="unitOptions"
      :min-slider-value="0"
      :max-slider-value="200"
    >
      <template #diamond>
        <diamond-icon />
      </template>

      <template #quartz>
        <quartz-icon />
      </template>

      <template #bauxite>
        <bauxite-icon />
      </template>

      <template #gypsum>
        <gypsum-icon />
      </template>

      <template #hematite>
        <hematite-icon />
      </template>

      <template #graphite>
        <graphite-icon />
      </template>

      <template #mica>
        <mica-icon />
      </template>

      <template #calcite>
        <calcite-icon />
      </template>
    </measure-card>
  </section>
</template>

<script>
import MeasureCard from '~/components/global/MeasureCard.vue'
import DiamondIcon from '~/components/icons/measure_section/minerals/DiamondIcon.vue'
import QuartzIcon from '~/components/icons/measure_section/minerals/QuartzIcon.vue'
import BauxiteIcon from '~/components/icons/measure_section/minerals/BauxiteIcon.vue'
import GypsumIcon from '~/components/icons/measure_section/minerals/GypsumIcon.vue'
import HematiteIcon from '~/components/icons/measure_section/minerals/HematiteIcon.vue'
import GraphiteIcon from '~/components/icons/measure_section/minerals/GraphiteIcon.vue'
import MicaIcon from '~/components/icons/measure_section/minerals/MicaIcon.vue'
import CalciteIcon from '~/components/icons/measure_section/minerals/CalciteIcon.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Minerals',
  components: {
    MeasureCard,
    DiamondIcon,
    QuartzIcon,
    BauxiteIcon,
    GypsumIcon,
    HematiteIcon,
    GraphiteIcon,
    MicaIcon,
    CalciteIcon,
  },
  data() {
    return {
      minerals: [
        {
          name: 'Diamond',
          value: 'diamond',
          conversionFactor: 0,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Quartz',
          value: 'quartz',
          conversionFactor: 0,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Bauxite',
          value: 'bauxite',
          conversionFactor: 0,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Gypsum',
          value: 'gypsum',
          conversionFactor: 3.36,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Hematite',
          value: 'hematite',
          conversionFactor: 0,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Graphite',
          value: 'graphite',
          conversionFactor: 0.25,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Mica',
          value: 'mica',
          conversionFactor: 0,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Calcite',
          value: 'calcite',
          conversionFactor: 0,
          unit: 'pound',
          targetUnit: 'pound',
        },
      ],
      unitOptions: ['pound', 'dollar', 'euro'],
    }
  },
  computed: {
    items() {
      const cache =
        this.$store.getters['emission/getEmissions'].mineralsEmission
      return cache.length !== 0 ? cache : this.minerals
    },
  },
}
</script>
