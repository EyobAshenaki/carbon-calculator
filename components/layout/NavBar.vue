<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav
    class="w-full h-20 flex justify-between items-center bg-white shadow-md md:pl-3 pr-5"
  >
    <greencheddar-logo class="h-16 transition-[height] duration-300 ease-out" />

    <!-- Mobile menu icon -->
    <div class="lg:hidden flex" @click="toggleMenu">
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        class="menu-right-alt transition-all duration-200 ease-out"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Line - 1 -->
        <path
          d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
          fill="currentColor"
          class="top-line origin-top-left transition-all duration-200 ease-out"
        />

        <!-- Line - 3 -->
        <path
          d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
          fill="currentColor"
          class="bottom-line origin-bottom-left transition-all duration-200 ease-out"
        />
        <!-- Line - 2 -->
        <path
          d="M11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H11Z"
          fill="currentColor"
          class="middle-line"
        />
      </svg>
    </div>
  </nav>
</template>

<script>
import GreencheddarLogo from '@/components/icons/GreencheddarLogo.vue'
export default {
  name: 'NavBar',
  components: {
    GreencheddarLogo,
  },
  data() {
    return {
      sidenavActive: false,
    }
  },
  computed: {
    isMenuClosed() {
      return this.$store.getters.getMenuState
    },
  },
  watch: {
    isMenuClosed() {
      this.$nextTick(() => {
        this.changeMenuIcon()
      })
    },
  },
  methods: {
    // hamburger menu functions
    toggleMenu() {
      this.$store.dispatch('toggleMenu')
    },
    changeMenuIcon() {
      const topLine = document.querySelector('.top-line')
      const middleLine = document.querySelector('.middle-line')
      const bottomLine = document.querySelector('.bottom-line')

      topLine.classList.toggle('rotate-45')
      topLine.classList.toggle('translate-x-1')

      middleLine.classList.toggle('hidden')

      bottomLine.classList.toggle('-rotate-45')
      bottomLine.classList.toggle('translate-x-1')
      bottomLine.classList.toggle('translate-y-[1px]')
    },
  },
}
</script>
