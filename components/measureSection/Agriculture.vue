<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <measure-card
      :items="items"
      :unit-options="unitOptions"
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

      <template #cotton>
        <cotton-icon />
      </template>

      <template #cocoa>
        <cocoa-icon />
      </template>

      <template #sugar>
        <sugar-icon />
      </template>

      <template #coffee>
        <coffee-icon />
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
import CottonIcon from '~/components/icons/measure_section/agriculture/CottonIcon.vue'
import CocoaIcon from '~/components/icons/measure_section/agriculture/CocoaIcon.vue'
import SugarIcon from '~/components/icons/measure_section/agriculture/SugarIcon.vue'
import CoffeeIcon from '~/components/icons/measure_section/agriculture/CoffeeIcon.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Agriculture',
  components: {
    MeasureCard,
    WheatIcon,
    RiceIcon,
    CornIcon,
    SoybeansIcon,
    CottonIcon,
    CocoaIcon,
    SugarIcon,
    CoffeeIcon,
  },
  data() {
    return {
      agricultureProducts: [
        {
          name: 'Wheat',
          value: 'wheat',
          conversionFactor: 1.6,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Rice',
          value: 'rice',
          conversionFactor: 0.39,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Corn',
          value: 'corn',
          conversionFactor: 0.97,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Soybeans',
          value: 'soybeans',
          conversionFactor: 0.07,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Cotton',
          value: 'cotton',
          conversionFactor: 0.397,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Cocoa',
          value: 'cocoa',
          conversionFactor: 0.397,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Sugar',
          value: 'sugar',
          conversionFactor: 2.78,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Coffee',
          value: 'coffee',
          conversionFactor: 0.397,
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
        this.$store.getters['emission/getEmissions'].agricultureEmission
      return cache.length !== 0 ? cache : this.agricultureProducts
    },
  },
}
</script>
