<template>
  <section class="w-full">
    <h1 class="text-2xl font-bold mb-10">Smart Energy</h1>
    <div class="flex flex-col lg:flex-row items-center gap-10">
      <a
        v-for="(item, idx) in smartEnergyItems"
        :key="idx"
        class="w-full sm:w-1/2 md:w-full lg:w-1/3 cursor-pointer"
        @click="openInquiryModal(item)"
      >
        <smart-energy-card :item="item" />
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
import smartEnergyCard from '~/components/global/infoCard.vue'
import InquiryModal from '@/components/global/InquiryModal.vue'
export default {
  components: { smartEnergyCard, InquiryModal },
  data() {
    return {
      smartEnergyItems: [
        {
          description: 'Regulatory Energy Consumption and Emissions Reporting',
        },
        {
          description:
            'Attract Clients through providing discounts to people who have shown sustainable behavioural change',
        },
        {
          description:
            'Promote your new Green Initiative on Sustainability Platform',
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
      this.selectedResponse.type = 'smart_energy'
      this.selectedResponse.message = item.description
      if (!this.isInquiryModalOpen) this.isInquiryModalOpen = true
    },
    closeInquiryModal() {
      if (this.isInquiryModalOpen) this.isInquiryModalOpen = false
    },
  },
}
</script>
