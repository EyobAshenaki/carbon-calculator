<template>
  <div
    class="min-h-[20rem] flex flex-col justify-evenly items-center gap-3 rounded-2xl shadow-xl border p-6"
  >
    <img
      v-if="item.image"
      class="w-20 h-20"
      :src="getImgSrc(item.image)"
      :alt="item.alt"
    />
    <h3 class="text-lg font-bold">{{ item.name }}</h3>
    <p v-if="item.title" class="font-normal text-sm -mt-2">{{ item.title }}</p>

    <p
      class="text-center"
      :class="{ 'font-semibold text-custom-teal': !hasImage }"
    >
      {{ item.description }}
    </p>

    <div
      class="w-[90%] sm:w-full xl:w-[90%] flex flex-row lg:flex-col-reverse 2xl:flex-row items-center mt-2"
      :class="[item.price ? 'justify-between' : 'justify-center']"
    >
      <span v-if="item.price" class="text-custom-teal font-bold text-lg"
        >${{ item.price }} / hour</span
      >
      <button
        class="bg-custom-teal text-white rounded-full px-5 py-2 mb-2"
        @click="$emit('openModal', item)"
      >
        {{ item.price ? 'Book a call' : 'Open' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasImage() {
      return this.item.image
    },
  },
  methods: {
    getImgSrc(imagePath) {
      return require(`@/assets/images/${imagePath}`)
    },
  },
}
</script>
