<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-44 sm:w-80 relative">
    <div
      class="progress-overlay w-full h-2 absolute rounded-md bg-gray-200"
    ></div>
    <div class="progress h-2 absolute rounded-md bg-custom-teal z-10"></div>
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
        this.$emit('rangeChange', parseInt(value))
      },
    },
  },
  watch: {
    rangeValue(value) {
      this.setBubble(this.range, this.bubble, value)

      this.setProgressWidth(value)
    },
  },
  mounted() {
    this.range = document.querySelector('.range')
    this.bubble = document.querySelector('.bubble')
    const progress = document.querySelector('.progress')
    const progressOverlay = document.querySelector('.progress-overlay')

    const rangeRect = this.range.getBoundingClientRect()
    const containerRect = this.range.parentElement.getBoundingClientRect()

    const progressTop = rangeRect.top - containerRect.top
    const progressLeft = rangeRect.left - containerRect.left
    const progressOverlayTop = rangeRect.top - containerRect.top
    const progressOverlayLeft = rangeRect.left - containerRect.left

    progress.style.top = `${progressTop}px`
    progress.style.left = `${progressLeft}px`
    progressOverlay.style.top = `${progressOverlayTop}px`
    progressOverlay.style.left = `${progressOverlayLeft}px`

    this.setProgressWidth(this.rangeValue)

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
    setProgressWidth(value) {
      const progress = document.querySelector('.progress')

      value = value > this.max ? this.max : value < this.min ? this.min : value

      const progressWidth = ((value - this.min) * 100) / (this.max - this.min)

      progress.style.width = `calc(${progressWidth}% + (${
        2 - progressWidth * 0.15
      }px))`
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
  animation: 0.2s;
  @apply h-2 bg-transparent rounded-md z-20;
}

/******** Firefox ********/
input[type='range']::-moz-range-track {
  animation: 0.2s;
  @apply h-2 bg-transparent rounded-md z-20;
}

/***** Thumb Styles *****/

/***** Chrome, Safari, Opera, and Edge Chromium *****/
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */

  /* To center the thumb used this formula - margin-top = (track height in pixels / 2) - (thumb height in pixels /2) */
  @apply h-5 w-5 appearance-none bg-[#266e73] rounded-full -mt-[6px] z-30;
}

/***** Firefox *****/
input[type='range']::-moz-range-thumb {
  @apply h-5 w-5 bg-[#266e73] border-none rounded-full z-30;
}

/***** Focus Styles *****/

/***** Chrome, Safari, Opera, and Edge Chromium *****/
input[type='range']:focus::-webkit-slider-thumb {
  @apply outline-1 outline-[#266e73] outline-offset-2;
}

/******** Firefox ********/
input[type='range']:focus::-moz-range-thumb {
  @apply outline-1 outline-[#266e73] outline-offset-2;
}

/***** Bubble Styles *****/
.bubble {
  @apply absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#266e73] text-white rounded-sm py-0.5 px-2;
}

.bubble::after {
  content: '';
  @apply w-2.5 h-2 absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#266e73] rotate-[62deg] skew-x-[35deg];
}
</style>
