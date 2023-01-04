<template>
  <div class="number-input">
    <button @click="decrement"></button>
    <input
      :value="inputValue"
      :min="min"
      :max="max"
      :step="step"
      type="number"
      @input="handleInputChange($event)"
    />
    <button class="plus" @click="increment"></button>
  </div>
</template>

<script>
export default {
  name: 'NumberInput',
  props: {
    value: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    inputValue: {
      get() {
        return isNaN(this.value) ? 0 : this.value
      },
      set(value) {
        this.$emit('inputChange', parseInt(value))
      },
    },
  },
  methods: {
    handleInputChange(e) {
      this.inputValue = e.target.value
    },
    increment() {
      if (this.inputValue < this.max) this.inputValue += this.step
    },
    decrement() {
      if (this.inputValue > this.min) this.inputValue -= this.step
    },
  },
}
</script>

<style scoped>
/* stylelint-disable property-no-vendor-prefix */

input[type='number'] {
  -moz-appearance: textfield;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.number-input {
  @apply inline-flex items-center;
}

.number-input button {
  -webkit-appearance: none;
  @apply w-6 h-6 relative flex items-center justify-center rounded-full border border-slate-400 cursor-pointer hover:border-green-600 hover:bg-green-600 hover:ring-1 hover:ring-green-600;
}

.number-input input[type='number'] {
  @apply w-16 text-center bg-gray-100 border border-slate-300 rounded-md focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 py-1 px-2 mx-2;
}

.number-input button::before,
.number-input button::after {
  @apply w-2.5 h-[1px] content-[''] inline-flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black;
}

.number-input button:hover::before,
.number-input button:hover::after {
  @apply w-3 h-0.5 bg-white;
}

.number-input button.plus::after {
  @apply -translate-x-1/2 -translate-y-1/2 rotate-90;
}
</style>
