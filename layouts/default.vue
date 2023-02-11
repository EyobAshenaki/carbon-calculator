<template>
  <div>
    <toast v-if="toastOpen" />
    <nav-bar />
    <section class="h-full flex">
      <side-bar />
      <nuxt />
    </section>
    <footer-section />
  </div>
</template>

<script>
import Toast from '~/components/global/Toast.vue'
import NavBar from '~/components/layout/NavBar.vue'
import FooterSection from '~/components/layout/FooterSection.vue'
import SideBar from '~/components/layout/SideBar.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Toast,
    NavBar,
    FooterSection,
    SideBar,
  },
  computed: {
    toastOpen() {
      return this.$store.getters.getToastState
    },
  },
  beforeMount() {
    // register the custom element
    window.customElements.define('f-f', class extends HTMLElement {})
  },
  mounted() {
    /**
     * Get the form submission result from the query string.
     * If the form was submitted successfully, display a success message.
     * Otherwise, display an error message.
     */
    if (this.$route.query.result) {
      const result = JSON.parse(this.$route.query.result)
      if (!result.Success) {
        this.$store.dispatch('setAlert', {
          message: 'Something went wrong, please try again',
          type: 'error',
        })
      } else {
        this.$store.dispatch('setAlert', {
          message: 'Form submitted successfully',
          type: 'success',
        })
      }

      this.$store.dispatch('toggleToast')
    }
  },
}
</script>
