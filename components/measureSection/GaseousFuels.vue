<template>
  <section>
    <measure-card
      :items="gaseousFuels"
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
        },
        {
          name: 'CNG',
          value: 'cng',
        },
        {
          name: 'LNG',
          value: 'lng',
        },
        {
          name: 'LPG',
          value: 'lpg',
        },
        {
          name: 'Natural Gas',
          value: 'naturalGas',
        },
        {
          name: 'Natural Gas (100% mineral blend)',
          value: 'naturalGasMineralBlend',
        },
        {
          name: 'Other Petroleum-Based Gases',
          value: 'otherPetroleumGas',
        },
        {
          name: 'Propane',
          value: 'propane',
        },
      ],
    }
  },
}
</script>
