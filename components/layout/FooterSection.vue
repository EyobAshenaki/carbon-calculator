<template>
  <footer
    class="md:h-44 flex flex-col md:flex-row justify-around gap-7 md:gap-0 bg-green-600 text-white px-15 py-10"
  >
    <div
      class="flex flex-col-reverse items-center md:items-start order-last md:order-first gap-3"
    >
      <p class="font-light text-sm">copyright @ 2022 Green Cheddar Ltd.</p>
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
      <p class="font-semibold">Green Cheddar</p>
      <p class="font-semibold">Food Sustainability</p>
    </div>
    <div
      class="flex flex-col justify-between items-center md:items-start font-normal"
    >
      <header class="text-gray-200 mb-2">Teams</header>
      <p class="font-semibold">Privacy Policy</p>
      <p class="font-semibold">How it works</p>
    </div>
    <div
      class="flex flex-col justify-between items-center md:items-start font-normal"
    >
      <header class="text-gray-200 mb-2">Support</header>
      <p class="font-semibold">Help Center</p>
      <p class="font-semibold">FAQ</p>
    </div>
    <div class="flex flex-col items-center md:items-start font-normal">
      <header class="text-gray-200 mb-2">Follow Us</header>
      <div class="md:w-16 flex flex-wrap justify-between gap-3">
        <twitter-outline-icon class="w-5" />
        <instagram-outline-icon class="w-5" />
        <facebook-outline-icon class="w-5" />
        <tiktok-outline-icon class="w-5" />
      </div>
    </div>
  </footer>
</template>

<script>
import TwitterOutlineIcon from '@/components/icons/TwitterOutlineIcon.vue'
import InstagramOutlineIcon from '@/components/icons/InstagramOutlineIcon.vue'
import FacebookOutlineIcon from '@/components/icons/FacebookOutlineIcon.vue'
import TiktokOutlineIcon from '@/components/icons/TiktokOutlineIcon.vue'
export default {
  name: 'FooterSection',
  components: {
    TwitterOutlineIcon,
    InstagramOutlineIcon,
    FacebookOutlineIcon,
    TiktokOutlineIcon,
  },
}
</script>
