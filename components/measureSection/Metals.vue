<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <measure-card :items="metals" :min-slider-value="0" :max-slider-value="200">
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
        },
        {
          name: 'Copper',
          value: 'copper',
        },
        {
          name: 'Gold',
          value: 'gold',
        },
        {
          name: 'Silver',
          value: 'silver',
        },
        {
          name: 'Platinum',
          value: 'platinum',
        },
        {
          name: 'Titanium',
          value: 'titanium',
        },
        {
          name: 'Nickel',
          value: 'nickel',
        },
        {
          name: 'Cobalt',
          value: 'cobalt',
        },
      ],
    }
  },
}
</script>
