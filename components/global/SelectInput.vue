<template>
  <div class="w-full relative">
    <label for="select"> Unit </label>
    <select
      id="select"
      v-model="selectedValue"
      @focus="handleFocus"
      @blur="handleBlur"
    >
      <option v-for="(option, idx) in selectOptions" :key="idx" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectInput',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    selectedValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('unitChange', value)
      },
    },

    selectOptions() {
      return this.options
    },
  },
  watch: {
    selectedValue(value) {
      const select = document.querySelector('select')
      if (value) {
        select.focus()
        this.handleFocus()
      } else {
        select.blur()
        this.handleBlur()
      }
    },
  },
  mounted() {
    if (this.selectedValue) {
      document.querySelector('select').focus()
      this.handleFocus()
    }
  },
  methods: {
    handleFocus(e) {
      document.querySelector('label').classList.add('bottom-7', 'text-[0.7rem]')
    },
    handleBlur() {
      if (!this.selectedValue) {
        document
          .querySelector('label')
          .classList.remove('bottom-7', 'text-[0.7rem]')
      }
    },
  },
}
</script>

<style scoped>
label {
  @apply absolute text-gray-500 transition-all duration-300;
}

select {
  @apply appearance-none w-full h-8 text-base border-b-2 border-slate-600 focus:outline-none focus:border-[#266e73];
}
</style>
