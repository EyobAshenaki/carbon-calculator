<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <measure-card
      :items="minerals"
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
        },
        {
          name: 'Quartz',
          value: 'quartz',
        },
        {
          name: 'Bauxite',
          value: 'bauxite',
        },
        {
          name: 'Gypsum',
          value: 'gypsum',
        },
        {
          name: 'Hematite',
          value: 'hematite',
        },
        {
          name: 'Graphite',
          value: 'graphite',
        },
        {
          name: 'Mica',
          value: 'mica',
        },
        {
          name: 'Calcite',
          value: 'calcite',
        },
      ],
    }
  },
}
</script>
