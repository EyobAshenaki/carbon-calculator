<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="w-full">
    <h1 class="text-2xl font-bold mb-10">Order designer</h1>
    <div class="flex flex-col lg:flex-row items-center gap-10">
      <a
        v-for="(item, idx) in designersItems"
        :key="idx"
        class="w-full sm:w-1/2 md:w-full lg:w-1/3 cursor-pointer"
        @click="openInquiryModal(item)"
      >
        <designers-card :item="item" />
      </a>
    </div>
    <inquiry-modal
      v-if="isInquiryModalOpen"
      :response="selectedResponse"
      @closeModal="closeInquiryModal"
    />
  </section>
</template>

<script>
import designersCard from '~/components/global/InfoCard.vue'
import InquiryModal from '~/components/global/InquiryModal.vue'
export default {
  components: { designersCard, InquiryModal },
  data() {
    return {
      designersItems: [
        {
          description: 'Small Modifications to Current Menu',
          image: 'designers/designers_image_1.svg',
          alt: 'designers image 1',
        },
        {
          description: 'Design New Menu',
          image: 'designers/designers_image_2.svg',
          alt: 'designers image 2',
        },
        {
          description:
            'Display Climate Responsibility & Attract Climate Conscious Customers through Social Media',
          image: 'designers/designers_image_3.svg',
          alt: 'designers image 3',
        },
      ],
      isInquiryModalOpen: false,
      selectedResponse: {
        message: '',
        type: '',
      },
    }
  },
  methods: {
    openInquiryModal(item) {
      this.selectedResponse.type = 'designers'
      this.selectedResponse.message = item.description
      if (!this.isInquiryModalOpen) this.isInquiryModalOpen = true
    },
    closeInquiryModal() {
      if (this.isInquiryModalOpen) this.isInquiryModalOpen = false
    },
  },
}
</script>
