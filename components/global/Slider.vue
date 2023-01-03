<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-80 relative">
    <input
      v-model="rangeValue"
      class="range"
      type="range"
      :min="min"
      :max="max"
    />
    <output class="bubble">{{ rangeValue }}</output>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Slider',
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      range: null,
      bubble: null,
    }
  },
  computed: {
    rangeValue: {
      get() {
        return isNaN(this.value) ? 0 : this.value
      },
      set(value) {
        this.$emit('rangeChange', value)
      },
    },
  },
  watch: {
    rangeValue(value) {
      this.setBubble(this.range, this.bubble, value)
    },
  },
  mounted() {
    this.range = document.querySelector('.range')
    this.bubble = document.querySelector('.bubble')

    this.range.addEventListener('input', () => {
      this.setBubble(this.range, this.bubble)
    })
    this.setBubble(this.range, this.bubble)
  },
  methods: {
    setBubble(range, bubble, value = range.value) {
      const val = value
      const min = range.min ? range.min : 0
      const max = range.max ? range.max : 100
      let newVal = Number(((val - min) * 100) / (max - min))
      newVal = newVal > 100 ? 100 : newVal < 0 ? 0 : newVal
      bubble.innerHTML = val

      // Sorta magic numbers based on size of the native UI thumb
      bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`
    },
  },
}
</script>

<style scoped>
/* stylelint-disable property-no-vendor-prefix */
input[type='range'] {
  -webkit-appearance: none;
  @apply w-full appearance-none bg-transparent cursor-pointer focus:outline-none;
}

/***** Track Styles *****/

/***** Chrome, Safari, Opera, and Edge Chromium *****/
input[type='range']::-webkit-slider-runnable-track {
  @apply h-2 bg-gray-200 rounded-md;

  animation: 0.2s;
}

/******** Firefox ********/
input[type='range']::-moz-range-track {
  @apply h-2 bg-gray-200 rounded-md;

  animation: 0.2s;
}

/***** Thumb Styles *****/

/***** Chrome, Safari, Opera, and Edge Chromium *****/
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */

  /* To center the thumb used this formula - margin-top = (track height in pixels / 2) - (thumb height in pixels /2) */
  @apply h-5 w-5 appearance-none bg-green-600 rounded-full -mt-[6px];
}

/***** Firefox *****/
input[type='range']::-moz-range-thumb {
  @apply h-5 w-5 bg-green-600 border-none rounded-full;
}

/***** Focus Styles *****/

/***** Chrome, Safari, Opera, and Edge Chromium *****/
input[type='range']:focus::-webkit-slider-thumb {
  @apply outline-1 outline-green-600 outline-offset-2;
}

/******** Firefox ********/
input[type='range']:focus::-moz-range-thumb {
  @apply outline-1 outline-green-600 outline-offset-2;
}

/***** Bubble Styles *****/
.bubble {
  @apply absolute bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white rounded-sm py-0.5 px-2;
}

.bubble::after {
  content: '';
  @apply w-2.5 h-2 absolute -bottom-1 left-1/2 -translate-x-1/2 bg-green-600 rotate-[62deg] skew-x-[35deg];
}
</style>
