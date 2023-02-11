<template>
  <div
    class="w-full max-w-xs fixed top-28 right-5 z-[5] flex flex-col text-gray-500 bg-gray-100 rounded-lg rounded-b-none shadow"
    role="alert"
  >
    <div class="w-full relative flex items-center p-5 pb-3">
      <button class="absolute top-1 right-2" @click="closeToast">
        <close-icon
          class="w-6 h-6 cursor-pointer rounded-full text-black hover:bg-gray-200 p-1"
        />
      </button>
      <div
        class="w-8 h-8 inline-flex flex-shrink-0 justify-center items-center rounded-lg"
        :class="toastColor"
      >
        <notification-outline-icon />
        <span class="sr-only">Fire icon</span>
      </div>
      <div class="font-medium text-base ml-3">{{ message }}</div>
    </div>
    <div class="w-full h-1 bg-gray-200">
      <div
        id="progressBar"
        class="w-0 h-1 transition-all ease-in-out duration-[3000ms]"
        :class="progressBarColor"
      ></div>
    </div>
  </div>
</template>

<script>
import NotificationOutlineIcon from '~/components/icons/NotificationOutlineIcon.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Toast',
  components: {
    NotificationOutlineIcon,
    CloseIcon,
  },
  computed: {
    message() {
      return this.$store.getters.getToastData.message
    },
    progressBarColor() {
      switch (this.$store.getters.getToastData.type) {
        case 'success':
          return 'bg-green-600'
        case 'error':
          return 'bg-red-600'
        case 'info':
          return 'bg-blue-600'
        case 'warning':
          return 'bg-orange-600'
        default:
          return 'bg-gray-600'
      }
    },
    toastColor() {
      switch (this.$store.getters.getToastData.type) {
        case 'success':
          return 'text-green-500 bg-green-200'
        case 'error':
          return 'text-red-500 bg-red-200'
        case 'info':
          return 'text-blue-500 bg-blue-200'
        case 'warning':
          return 'text-orange-500 bg-orange-200'
        default:
          return 'text-gray-500 bg-gray-200'
      }
    },
  },
  mounted() {
    window.onload = () => {
      const progressBarElmt = document.getElementById('progressBar')

      // Close toast after 3.5 seconds because of the 3 seconds transition of the progress bar set on the element
      const toastCloseTimeout = setTimeout(() => {
        this.closeToast()
        clearTimeout(toastCloseTimeout)
      }, 3500)

      // Start the progress bar animation
      const progressBarTimeout = setTimeout(() => {
        progressBarElmt.classList.remove('w-0')
        progressBarElmt.classList.add('w-full')
        clearTimeout(progressBarTimeout)
      }, 100)
    }
  },
  methods: {
    closeToast() {
      this.$store.dispatch('toggleToast')
    },
  },
}
</script>
