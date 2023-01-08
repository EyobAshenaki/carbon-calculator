<template>
  <section>
    <measure-card
      :items="items"
      :unit-options="unitOptions"
      :min-slider-value="0"
      :max-slider-value="200"
    >
      <template #butane>
        <butane-icon />
      </template>

      <template #cng>
        <cng-icon />
      </template>

      <template #lng>
        <lng-icon />
      </template>

      <template #lpg>
        <lpg-icon />
      </template>

      <template #naturalGas>
        <natural-gas-icon />
      </template>

      <template #naturalGasMineralBlend>
        <natural-gas-mineral-blend-icon />
      </template>

      <template #otherPetroleumGas>
        <other-petroleum-gas-icon />
      </template>

      <template #propane>
        <propane-icon />
      </template>
    </measure-card>
  </section>
</template>

<script>
import ButaneIcon from '../icons/measure_section/gaseous_fuels/ButaneIcon.vue'
import NaturalGasMineralBlendIcon from '../icons/measure_section/gaseous_fuels/NaturalGasMineralBlendIcon.vue'
import OtherPetroleumGasIcon from '../icons/measure_section/gaseous_fuels/OtherPetroleumGasIcon.vue'
import CngIcon from '~/components/icons/measure_section/gaseous_fuels/CNGIcon.vue'
import LngIcon from '~/components/icons/measure_section/gaseous_fuels/LNGIcon.vue'
import LpgIcon from '~/components/icons/measure_section/gaseous_fuels/LPGIcon.vue'
import NaturalGasIcon from '~/components/icons/measure_section/gaseous_fuels/NaturalGasIcon.vue'
import MeasureCard from '~/components/global/MeasureCard.vue'
import PropaneIcon from '~/components/icons/measure_section/gaseous_fuels/PropaneIcon.vue'
export default {
  name: 'GaseousFuels',
  components: {
    MeasureCard,
    ButaneIcon,
    CngIcon,
    LngIcon,
    LpgIcon,
    NaturalGasIcon,
    NaturalGasMineralBlendIcon,
    OtherPetroleumGasIcon,
    PropaneIcon,
  },
  data() {
    return {
      gaseousFuels: [
        {
          name: 'Butane',
          value: 'butane',
          conversionFactor: 1.75,
          unit: 'litre',
          targetUnit: 'litre',
        },
        {
          name: 'CNG',
          value: 'cng',
          conversionFactor: 0.44,
          unit: 'litre',
          targetUnit: 'litre',
        },
        {
          name: 'LNG',
          value: 'lng',
          conversionFactor: 1.16,
          unit: 'litre',
          targetUnit: 'litre',
        },
        {
          name: 'LPG',
          value: 'lpg',
          conversionFactor: 1.56,
          unit: 'litre',
          targetUnit: 'litre',
        },
        {
          name: 'Natural Gas',
          value: 'naturalGas',
          conversionFactor: 2.02,
          unit: 'cubic metre',
          targetUnit: 'cubic metre',
        },
        {
          name: 'Natural Gas (100% mineral blend)',
          value: 'naturalGasMineralBlend',
          conversionFactor: 2.03,
          unit: 'cubic metre',
          targetUnit: 'cubic metre',
        },
        {
          name: 'Other Petroleum-Based Gases',
          value: 'otherPetroleumGas',
          conversionFactor: 0.94,
          unit: 'litre',
          targetUnit: 'litre',
        },
        {
          name: 'Propane',
          value: 'propane',
          conversionFactor: 1.54,
          unit: 'litre',
          targetUnit: 'litre',
        },
      ],
      unitOptions: ['litre', 'cubic metre'],
    }
  },
  computed: {
    items() {
      const cache = this.$store.getters['emission/getEmissions'].gaseousEmission
      return cache.length !== 0 ? cache : this.gaseousFuels
    },
  },
}
</script>
