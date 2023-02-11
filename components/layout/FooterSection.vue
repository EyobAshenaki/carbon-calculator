<template>
  <footer
    class="md:h-44 flex flex-col md:flex-row justify-around gap-7 md:gap-0 bg-custom-teal text-white px-15 py-10"
  >
    <div
      class="flex flex-col-reverse items-center md:items-start order-last md:order-first gap-3"
    >
      <p class="font-normal text-sm">&copy; 2022 Green Cheddar Ltd.</p>
      <img
        class="w-fit"
        src="@/assets/images/footer_icon.svg"
        alt="footer icon"
      />
    </div>

    <div
      class="flex flex-col justify-between items-center md:items-start gap-1 md:gap-0 font-normal"
    >
      <header class="text-gray-200 mb-2">About</header>
      <a
        href="https://greencheddar.earth/"
        target="_blank"
        class="font-semibold"
        >Green Cheddar</a
      >
      <a
        href="https://michaeltesta.earth/"
        target="_blank"
        class="font-semibold"
        >Portfolio</a
      >
    </div>

    <div class="flex flex-col items-center md:items-start font-normal">
      <header class="text-gray-200 mb-4">Legal documents</header>
      <p class="font-semibold">Privacy Policy</p>
    </div>

    <div class="flex flex-col items-center md:items-start font-normal">
      <header class="text-gray-200 mb-4">Support</header>
      <!-- <p class="font-semibold">Help Center</p> -->
      <nuxt-link :to="{ name: 'faq' }" class="font-semibold">FAQ</nuxt-link>
    </div>

    <div class="flex flex-col items-center md:items-start font-normal">
      <header class="text-gray-200 mb-2">Social Media</header>
      <div class="flex gap-4">
        <twitter-outline-icon class="w-5" />
        <instagram-outline-icon class="w-5" />
        <!-- <facebook-outline-icon class="w-5" /> -->
        <tiktok-outline-icon class="w-5" />
      </div>
    </div>
  </footer>
</template>

<script>
import TwitterOutlineIcon from '@/components/icons/TwitterOutlineIcon.vue'
import InstagramOutlineIcon from '@/components/icons/InstagramOutlineIcon.vue'
// import FacebookOutlineIcon from '@/components/icons/FacebookOutlineIcon.vue'
import TiktokOutlineIcon from '@/components/icons/TiktokOutlineIcon.vue'
export default {
  name: 'FooterSection',
  components: {
    TwitterOutlineIcon,
    InstagramOutlineIcon,
    // FacebookOutlineIcon,
    TiktokOutlineIcon,
  },
}
</script>
