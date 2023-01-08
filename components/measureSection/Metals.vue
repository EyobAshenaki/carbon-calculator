<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <measure-card
      :items="metals"
      :unit-options="unitOptions"
      :min-slider-value="0"
      :max-slider-value="200"
    >
      <template #aluminum>
        <aluminum-icon />
      </template>

      <template #copper>
        <copper-icon />
      </template>

      <template #gold>
        <gold-icon />
      </template>

      <template #silver>
        <silver-icon />
      </template>

      <template #platinum>
        <platinum-icon />
      </template>

      <template #titanium>
        <titanium-icon />
      </template>

      <template #nickel>
        <nickel-icon />
      </template>

      <template #cobalt>
        <cobalt-icon />
      </template>
    </measure-card>
  </section>
</template>

<script>
import MeasureCard from '~/components/global/MeasureCard.vue'
import AluminumIcon from '~/components/icons/measure_section/metals/AluminumIcon.vue'
import CopperIcon from '~/components/icons/measure_section/metals/CopperIcon.vue'
import GoldIcon from '~/components/icons/measure_section/metals/GoldIcon.vue'
import SilverIcon from '~/components/icons/measure_section/metals/SilverIcon.vue'
import PlatinumIcon from '~/components/icons/measure_section/metals/PlatinumIcon.vue'
import TitaniumIcon from '~/components/icons/measure_section/metals/TitaniumIcon.vue'
import NickelIcon from '~/components/icons/measure_section/metals/NickelIcon.vue'
import CobaltIcon from '~/components/icons/measure_section/metals/CobaltIcon.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Metals',
  components: {
    MeasureCard,
    AluminumIcon,
    CopperIcon,
    GoldIcon,
    SilverIcon,
    PlatinumIcon,
    TitaniumIcon,
    NickelIcon,
    CobaltIcon,
  },
  data() {
    return {
      metals: [
        {
          name: 'Aluminum',
          value: 'aluminum',
          conversionFactor: 0.81,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Copper',
          value: 'copper',
          conversionFactor: 0.72,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Gold',
          value: 'gold',
          conversionFactor: 1.32,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Silver',
          value: 'silver',
          conversionFactor: 1.32,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Platinum',
          value: 'platinum',
          conversionFactor: 11,
          unit: 'gram',

          targetUnit: 'gram',
        },
        {
          name: 'Titanium',
          value: 'titanium',
          conversionFactor: 4,
          unit: 'gram',

          targetUnit: 'gram',
        },
        {
          name: 'Nickel',
          value: 'nickel',
          conversionFactor: 0.84,
          unit: 'pound',
          targetUnit: 'pound',
        },
        {
          name: 'Cobalt',
          value: 'cobalt',
          conversionFactor: 4,
          unit: 'gram',

          targetUnit: 'gram',
        },
      ],
      unitOptions: ['pound', 'gram'],
    }
  },
}
</script>
