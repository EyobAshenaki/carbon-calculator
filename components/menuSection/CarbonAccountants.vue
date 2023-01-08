<template>
  <section class="w-full">
    <h1 class="text-2xl font-bold mb-10">Carbon Accountants</h1>
    <div class="flex flex-col lg:flex-row items-center gap-10">
      <a
        v-for="(item, idx) in carbonAccountantsItems"
        :key="idx"
        class="w-full sm:w-1/2 md:w-full lg:w-1/3 cursor-pointer"
        @click="openInquiryModal(item)"
      >
        <carbon-accountants-card :item="item" />
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
import carbonAccountantsCard from '~/components/global/infoCard.vue'
import InquiryModal from '@/components/global/InquiryModal.vue'
export default {
  components: { carbonAccountantsCard, InquiryModal },
  data() {
    return {
      carbonAccountantsItems: [
        {
          description: 'Get Help Using Carbon Calculator',
          image: 'carbon_accountants/carbon_accountants_image_1.svg',
          alt: 'carbon_accountants image 1',
        },
        {
          description: 'Deep Dive into Emissions Reporting',
          image: 'carbon_accountants/carbon_accountants_image_2.svg',
          alt: 'carbon_accountants image 2',
        },
        {
          description: 'Supply Chain and Decarbonisation Advocacy',
          image: 'carbon_accountants/carbon_accountants_image_3.svg',
          alt: 'carbon_accountants image 3',
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
      this.selectedResponse.type = 'carbon_accountants'
      this.selectedResponse.message = item.description
      if (!this.isInquiryModalOpen) this.isInquiryModalOpen = true
    },
    closeInquiryModal() {
      if (this.isInquiryModalOpen) this.isInquiryModalOpen = false
    },
  },
}
</script>
