<template>
  <div
    class="w-full lg:w-[90%] flex flex-col justify-center items-center rounded-md shadow-lg"
  >
    <!-- Icons section -->
    <div
      class="max-w-3xl flex flex-wrap justify-center items-center gap-10 p-5"
    >
      <div
        v-for="(iconItem, idx) in iconItems"
        :key="idx"
        class="icon-container"
        :class="{ active: selectedIconItem.value === iconItem.value }"
      >
        <slot :name="iconItem.value">
          <img src="~/assets/images/loading-hourglass.gif" />
        </slot>
        <p v-if="iconItem">{{ iconItem.name }}</p>
        <p v-else>Loading...</p>
        <div class="overlay" @click="selectIconItem($event, iconItem)"></div>
      </div>
    </div>

    <!-- Slider section -->
    <div class="flex flex-col items-center gap-1 py-10">
      <slider
        :value="parseInt(sliderValue)"
        :min="minSliderValue"
        :max="maxSliderValue"
        @rangeChange="handleRangeChange($event)"
      />
      <p class="font-medium text-lg text-green-600">
        {{ selectedIconItem.name }}
      </p>
      <p>OR</p>
      <input
        v-model="sliderValue"
        class="w-32 appearance-none rounded-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 py-1 px-2"
        type="number"
        :min="minSliderValue"
        :max="maxSliderValue"
      />
    </div>

    <!-- Action section -->
    <div
      class="w-[95%] md:w-[85%] flex justify-center gap-10 border-t border-gray-400 py-5"
    >
      <button
        class="font-medium text-gray-500 bg-white border border-gray-500 rounded-md hover:text-white hover:bg-gray-500 py-1 px-4"
      >
        Skip
      </button>
      <button
        class="font-medium text-green-600 bg-white border border-green-600 rounded-md hover:text-white hover:bg-green-600 py-1 px-4"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import Slider from '~/components/global/Slider.vue'
export default {
  name: 'GaseousFuel',
  components: {
    Slider,
  },
  props: {
    items: {
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
      selectedIconItem: {
        name: '',
        value: '',
      },
      sliderValue: 0,
    }
  },
  computed: {
    iconItems() {
      return this.items
    },
  },
  methods: {
    selectIconItem(e, iconItem) {
      this.selectedIconItem = iconItem
      const selectedSvg = e.target.parentElement
      const svgContainers = document.querySelectorAll('.icon-container')
      if (!iconItem.value) return

      // Reset all svg icons stroke to black
      for (const svgContainer of svgContainers) {
        const svg = svgContainer.firstElementChild
        if (svg && svg.children) {
          for (const child of svg.children) {
            if (child.getAttribute('stroke') === 'white')
              child.setAttribute('stroke', 'black')
            if (child.getAttribute('fill') === 'white')
              child.setAttribute('fill', 'black')
            // if (iconItem.value === 'petroleumCoke') {
            //   child.setAttribute('fill', 'black')
            // }
          }
        }
      }

      // Change selected svg icon stroke to white
      for (const child of selectedSvg.children[0].children) {
        if (child.getAttribute('stroke') === 'black')
          child.setAttribute('stroke', 'white')
        if (child.getAttribute('fill') === 'black')
          child.setAttribute('fill', 'white')
        // if (iconItem.value === 'petroleumCoke') {
        //   child.setAttribute('fill', 'white')
        // }
      }
    },
    handleRangeChange(e) {
      this.sliderValue = e
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
  @apply bg-green-600 text-white;
}
</style>
