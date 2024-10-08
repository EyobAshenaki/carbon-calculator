<template>
  <div
    class="w-full lg:w-[90%] flex flex-col justify-center items-center rounded-md shadow-lg"
  >
    <!-- Contract Name header -->
    <header class="w-full flex justify-end py-3 pr-5 sm:pr-10">
      <div class="flex items-center gap-2">
        <span class="font-medium bg-gray-100 rounded-md mr-1 py-1 px-3"
          >Contract Name</span
        >
        <div v-if="!contractName" class="flex items-center space-x-2">
          <div
            class="w-12 sm:w-16 h-3 sm:h-4 bg-slate-200 rounded-full animate-pulse"
          ></div>
          <div
            class="w-20 sm:w-28 h-3 sm:h-4 bg-slate-200 rounded-full animate-[pulse_3s_ease-in_infinite]"
          ></div>
        </div>
        <span v-else class="font-mono text-lg text-custom-teal">{{
          contractName
        }}</span>
      </div>
    </header>

    <!-- Icons section -->
    <div
      class="max-w-3xl flex flex-wrap justify-center items-center gap-10 p-5"
    >
      <div
        v-for="(emissionItem, idx) in emissionItems"
        :key="idx"
        class="icon-container"
        :class="{ active: selectedEmissionItem.value === emissionItem.value }"
      >
        <slot :name="emissionItem.value">
          <img src="~/assets/images/loading-hourglass.gif" />
        </slot>
        <p v-if="emissionItem">{{ emissionItem.name }}</p>
        <p v-else>Loading...</p>
        <div
          class="overlay"
          @click="selectEmissionItem($event, emissionItem)"
        ></div>
      </div>
    </div>

    <!-- Slider section -->
    <div class="w-full sm:w-auto flex flex-col items-center gap-1 py-10">
      <div class="flex items-center gap-5">
        <slider
          :value="parseInt(sliderValue)"
          :min="minSliderValue"
          :max="maxSliderValue"
          @rangeChange="handleSliderValueChange($event)"
        />
        <select-input
          :value="selectedEmissionItem.targetUnit"
          :options="unitOptions"
          class="w-24 sm:w-32"
          @unitChange="handleUnitChange($event)"
        />
      </div>
      <p class="font-medium text-lg text-custom-teal">
        {{ selectedEmissionItem.name }}
      </p>
      <p>OR</p>
      <number-input
        :value="parseInt(sliderValue)"
        :min="minSliderValue"
        :max="maxSliderValue"
        @inputChange="handleSliderValueChange($event)"
      />
    </div>

    <!-- Action section -->
    <div
      class="w-[95%] md:w-[85%] flex justify-center gap-10 border-t border-gray-400 py-5"
    >
      <button
        class="font-medium text-gray-500 bg-white border border-gray-500 rounded-md hover:text-white hover:bg-gray-500 py-1 px-4"
        @click="handleSkip"
      >
        Skip
      </button>
      <button
        class="font-medium text-custom-teal bg-white border border-custom-teal rounded-md hover:text-white hover:bg-custom-teal py-1 px-4"
        @click="handleNext"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import Slider from '~/components/global/Slider.vue'
import SelectInput from '~/components/global/SelectInput.vue'
export default {
  name: 'GaseousFuel',
  components: {
    Slider,
    SelectInput,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    unitOptions: {
      type: Array,
      default: () => [],
    },
    minSliderValue: {
      type: Number,
      default: 0,
    },
    maxSliderValue: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      selectedEmissionItem: {
        name: '',
        value: '',
        amount: 0,
        unit: '',
        targetUnit: '',
      },
      sliderValue: 0,
    }
  },
  computed: {
    contractName() {
      return this.$store.getters['emission/getContractName']
    },

    emissionItems() {
      const tempEmissionItems = this.items
      for (const item of tempEmissionItems) {
        if (item.amount === undefined) item.amount = 0
      }
      return tempEmissionItems
    },
  },
  watch: {
    sliderValue(value) {
      this.selectedEmissionItem.amount = value
    },
  },
  methods: {
    selectEmissionItem(e, emissionItem) {
      this.sliderValue = emissionItem.amount
      this.selectedEmissionItem = emissionItem
      const selectedSvg = e.target.parentElement
      const svgContainers = document.querySelectorAll('.icon-container')
      if (!emissionItem.value) return

      // Reset all svg icons stroke to black
      for (const svgContainer of svgContainers) {
        const svg = svgContainer.firstElementChild
        if (svg && svg.children) {
          for (const child of svg.children) {
            if (child.getAttribute('stroke') === 'white')
              child.setAttribute('stroke', 'black')
            if (child.getAttribute('fill') === 'white')
              child.setAttribute('fill', 'black')
          }
        }
      }

      // Change selected svg icon stroke to white
      for (const child of selectedSvg.children[0].children) {
        if (child.getAttribute('stroke') === 'black')
          child.setAttribute('stroke', 'white')
        if (child.getAttribute('fill') === 'black')
          child.setAttribute('fill', 'white')
      }
    },

    handleSliderValueChange(e) {
      this.sliderValue = e
    },

    handleUnitChange(e) {
      // this.selectedEmissionUnit = e
      this.selectedEmissionItem.targetUnit = e
    },

    handleSkip() {
      // Proceeds to next section without saving data
      this.$store.dispatch('emission/nextSection', {})
    },

    handleNext() {
      // Proceeds to next section and save data
      this.$store.dispatch('emission/nextSection', {
        emissionData: this.emissionItems,
      })
    },
  },
}
</script>

<style scoped>
.icon-container {
  @apply w-32 md:h-32 relative flex flex-col justify-evenly items-center bg-gray-100 rounded-md p-2;
}

.icon-container p {
  @apply text-sm text-center;
}

.icon-container .overlay {
  @apply w-full h-full absolute top-0 left-0 bg-transparent cursor-pointer;
}

.active {
  @apply bg-[#266e73] text-white;
}
</style>
