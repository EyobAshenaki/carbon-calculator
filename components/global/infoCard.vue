<template>
  <div
    class="h-80 flex flex-col justify-center items-center gap-10 rounded-2xl shadow-xl border p-5"
  >
    <img
      v-if="item.image"
      class="w-28 h-28 mt-5"
      :src="getImgSrc(item.image)"
      :alt="item.alt"
    />
    <p
      class="text-custom-teal text-center"
      :class="{ 'font-semibold': !hasImage }"
    >
      {{ item.description }}
    </p>
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
