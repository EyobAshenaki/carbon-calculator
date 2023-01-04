<template>
  <section>
    <measure-card
      :items="liquidFuels"
      :min-slider-value="0"
      :max-slider-value="200"
    >
      <template #aviationSpirit>
        <aviation-spirit-icon />
      </template>

      <template #aviationTurbineFuel>
        <aviation-turbine-fuel-icon />
      </template>

      <template #diesel>
        <diesel-icon />
      </template>

      <template #fuelOil>
        <fuel-oil-icon />
      </template>

      <template #gasOil>
        <gas-oil-icon />
      </template>

      <template #petrol>
        <petrol-icon />
      </template>

      <template #marineGasOil>
        <marine-gas-oil-icon />
      </template>

      <template #marineFuelOil>
        <marine-fuel-oil-icon />
      </template>
    </measure-card>
  </section>
</template>

<script>
import MeasureCard from '~/components/global/MeasureCard.vue'
import AviationSpiritIcon from '~/components/icons/measure_section/liquid_fuels/AviationSpiritIcon.vue'
import AviationTurbineFuelIcon from '~/components/icons/measure_section/liquid_fuels/AviationTurbineFuelIcon.vue'
import DieselIcon from '~/components/icons/measure_section/liquid_fuels/DieselIcon.vue'
import FuelOilIcon from '~/components/icons/measure_section/liquid_fuels/FuelOilIcon.vue'
import GasOilIcon from '~/components/icons/measure_section/liquid_fuels/GasOilIcon.vue'
import PetrolIcon from '~/components/icons/measure_section/liquid_fuels/PetrolIcon.vue'
import MarineGasOilIcon from '~/components/icons/measure_section/liquid_fuels/MarineGasOilIcon.vue'
import MarineFuelOilIcon from '~/components/icons/measure_section/liquid_fuels/MarineFuelOilIcon.vue'

export default {
  name: 'LiquidFuels',
  components: {
    MeasureCard,
    AviationSpiritIcon,
    AviationTurbineFuelIcon,
    DieselIcon,
    FuelOilIcon,
    GasOilIcon,
    PetrolIcon,
    MarineGasOilIcon,
    MarineFuelOilIcon,
  },
  data() {
    return {
      liquidFuels: [
        {
          name: 'Aviation Spirit',
          value: 'aviationSpirit',
          conversionFactor: 2.33,
          unit: 'kgCO2e/litres',
        },
        {
          name: 'Aviation Turbine Fuel',
          value: 'aviationTurbineFuel',
          conversionFactor: 2.55,
          unit: 'kgCO2e/litres',
        },
        {
          name: 'Diesel (100% mineral diesel)',
          value: 'diesel',
          conversionFactor: 2.7,
          unit: 'kgCO2e/litres',
        },
        {
          name: 'Fuel oil',
          value: 'fuelOil',
          conversionFactor: 3.18,
          unit: 'kgCO2e/litres',
        },
        {
          name: 'Gas oil',
          value: 'gasOil',
          conversionFactor: 2.76,
          unit: 'kgCO2e/litres',
        },
        {
          name: 'Petrol (100% mineral petrol)',
          value: 'petrol',
          conversionFactor: 2.34,
          unit: 'kgCO2e/litres',
        },
        {
          name: 'Marine gas oil',
          value: 'marineGasOil',
          conversionFactor: 2.78,
          unit: 'kgCO2e/litres',
        },
        {
          name: 'Marine fuel oil',
          value: 'marineFuelOil',
          conversionFactor: 3.11,
          unit: 'kgCO2e/litres',
        },
      ],
    }
  },
}
</script>
