<template>
  <div>
    <nav-bar />
    <section class="h-full flex">
      <side-bar />
      <nuxt />
    </section>
    <footer-section />
  </div>
</template>

<script>
import NavBar from '~/components/layout/NavBar.vue'
import FooterSection from '~/components/layout/FooterSection.vue'
import SideBar from '~/components/layout/SideBar.vue'
export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    FooterSection,
    SideBar,
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
      }
      this.$store.dispatch('setAlert', {
        message: 'Form submitted successfully',
        type: 'success',
      })

      this.$store.dispatch('toggleToast')
    }
  },
}
</script>
