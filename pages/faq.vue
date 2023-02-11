<template>
  <section class="w-full py-10 sm:py-16">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <header class="max-w-1xl mx-auto text-center">
        <h2
          class="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl"
        >
          Frequently Asked Questions
        </h2>
        <p
          class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"
        >
          Have any questions? Below are some of the frequently asked questions.
        </p>
      </header>

      <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16 md:mb-20">
        <div
          v-for="({ active, title, content }, index) in faqItems"
          :key="index"
          class="transition-all duration-300 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50"
          :class="{ 'shadow-lg': active }"
        >
          <button
            type="button"
            class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            @click="handleClick(index)"
          >
            <span class="flex text-lg font-semibold text-black">
              {{ title }}
            </span>

            <down-arrow-icon
              class="w-6 h-6 text-gray-400 transition-transform duration-300"
              :class="{ 'rotate-180': !active }"
            />
          </button>

          <div
            class="transition-all duration-300 px-4 pb-5 sm:px-6 sm:pb-6"
            :class="{ hidden: !active }"
          >
            <p>
              {{ content }}
            </p>
          </div>
        </div>
      </div>

      <lottie
        class="max-w-[8rem]"
        :options="lottieOptions"
        @animCreated="handleAnimation"
      />

      <p class="text-center text-gray-600 textbase mt-9">
        Didn’t find the answer you are looking for?
        <a
          href="mailto:michael.testa@zeraftech.com?cc=befikadu@zeraftech.com, &subject=Customer Support for Carbon Miner"
          class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
        >
          Contact our support
        </a>
      </p>
    </div>
  </section>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import DownArrowIcon from '~/components/icons/DownArrowIcon.vue'
import * as animationData from '~/assets/animations/faq_animation.json'
export default {
  name: 'Faq',
  components: {
    DownArrowIcon,
    Lottie,
  },
  data() {
    return {
      faqItems: [
        {
          active: false,
          title: 'How to create an account?',
          content:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
          active: false,
          title: 'How to create an account?',
          content:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
          active: false,
          title: 'How to create an account?',
          content:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
          active: false,
          title: 'How to create an account?',
          content:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
      ],
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
    }
  },
  methods: {
    handleClick(index) {
      this.faqItems[index].active = !this.faqItems[index].active
    },
    handleAnimation(anim) {
      this.anim = anim
    },
  },
}
</script>
