<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <measure-card
      :items="agricultureProducts"
      :min-slider-value="0"
      :max-slider-value="200"
    >
      <template #wheat>
        <wheat-icon />
      </template>

      <template #rice>
        <rice-icon />
      </template>

      <template #corn>
        <corn-icon />
      </template>

      <template #soybeans>
        <soybeans-icon />
      </template>

      <template #potatoes>
        <potatoes-icon />
      </template>

      <template #tomatoes>
        <tomatoes-icon />
      </template>

      <template #apple>
        <apple-icon />
      </template>

      <template #orange>
        <orange-icon />
      </template>
    </measure-card>
  </section>
</template>

<script>
import MeasureCard from '~/components/global/MeasureCard.vue'
import WheatIcon from '~/components/icons/measure_section/agriculture/WheatIcon.vue'
import RiceIcon from '~/components/icons/measure_section/agriculture/RiceIcon.vue'
import CornIcon from '~/components/icons/measure_section/agriculture/CornIcon.vue'
import SoybeansIcon from '~/components/icons/measure_section/agriculture/SoybeansIcon.vue'
import PotatoesIcon from '~/components/icons/measure_section/agriculture/PotatoesIcon.vue'
import TomatoesIcon from '~/components/icons/measure_section/agriculture/TomatoesIcon.vue'
import AppleIcon from '~/components/icons/measure_section/agriculture/AppleIcon.vue'
import OrangeIcon from '~/components/icons/measure_section/agriculture/OrangeIcon.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Agriculture',
  components: {
    MeasureCard,
    WheatIcon,
    RiceIcon,
    CornIcon,
    SoybeansIcon,
    PotatoesIcon,
    TomatoesIcon,
    AppleIcon,
    OrangeIcon,
  },
  data() {
    return {
      agricultureProducts: [
        {
          name: 'Wheat',
          value: 'wheat',
          conversionFactor: 1.6,
          unit: 'kgCO2e/GBP',
        },
        {
          name: 'Rice',
          value: 'rice',
          conversionFactor: 0.39,
          unit: 'kgCO2e/GBP',
        },
        {
          name: 'Corn',
          value: 'corn',
          conversionFactor: 0.97,
          unit: 'kgCO2e/GBP',
        },
        {
          name: 'Soybeans',
          value: 'soybeans',
          conversionFactor: 0.07,
          unit: 'kgCO2e/GBP',
        },
        {
          name: 'Potatoes',
          value: 'potatoes',
          conversionFactor: 0.07,
          unit: 'kgCO2e/GBP',
        },
        {
          name: 'Tomatoes',
          value: 'tomatoes',
          conversionFactor: 0.07,
          unit: 'kgCO2e/GBP',
        },
        {
          name: 'Apple',
          value: 'apple',
          conversionFactor: 0.07,
          unit: 'kgCO2e/GBP',
        },
        {
          name: 'Orange',
          value: 'orange',
          conversionFactor: 0.07,
          unit: 'kgCO2e/GBP',
        },
      ],
    }
  },
}
</script>
