<template>
  <section>
    <measure-card
      :items="solidFuels"
      :min-slider-value="0"
      :max-slider-value="200"
    >
      <template #industrialCoal>
        <industrial-coal-icon />
      </template>

      <template #electricityGenerationCoal>
        <electricity-generation-coal-icon />
      </template>

      <template #cokingCoal>
        <coking-coal-icon />
      </template>

      <template #petroleumCoke>
        <petroleum-coke-icon />
      </template>
    </measure-card>
  </section>
</template>

<script>
import MeasureCard from '~/components/global/MeasureCard.vue'
import IndustrialCoalIcon from '~/components/icons/measure_section/solid_fuels/IndustrialCoalIcon.vue'
import ElectricityGenerationCoalIcon from '~/components/icons/measure_section/solid_fuels/ElectricityGenerationCoalIcon.vue'
import CokingCoalIcon from '~/components/icons/measure_section/solid_fuels/CokingCoalIcon.vue'
import PetroleumCokeIcon from '~/components/icons/measure_section/solid_fuels/PetroleumCokeIcon.vue'

export default {
  name: 'SolidFuels',
  components: {
    MeasureCard,
    IndustrialCoalIcon,
    ElectricityGenerationCoalIcon,
    CokingCoalIcon,
    PetroleumCokeIcon,
  },
  data() {
    return {
      solidFuels: [
        {
          name: 'Coal (industrial)',
          value: 'industrialCoal',
        },
        {
          name: 'Coal (electricity generation)',
          value: 'electricityGenerationCoal',
        },
        {
          name: 'Coking coal',
          value: 'cokingCoal',
        },
        {
          name: 'Petroleum coke',
          value: 'petroleumCoke',
        },
      ],
    }
  },
}
</script>
