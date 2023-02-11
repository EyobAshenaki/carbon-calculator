<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="w-full">
    <h1 class="text-2xl font-bold mb-10">Consulting</h1>
    <div class="flex flex-col lg:flex-row items-center gap-10">
      <designers-card
        v-for="(item, idx) in consultingItems"
        :key="idx"
        :item="item"
        class="w-[90%] sm:w-[70%] lg:w-1/3"
        @openModal="openInquiryModal($event)"
      />
    </div>
    <h1 class="text-2xl font-bold mb-10 mt-16">Order Designers</h1>
    <div class="flex flex-col lg:flex-row items-center gap-10">
      <designers-card
        v-for="(item, idx) in designersItems"
        :key="idx"
        :item="item"
        class="w-[90%] sm:w-[70%] lg:w-1/3"
        @openModal="openInquiryModal($event)"
      />
    </div>
    <inquiry-modal
      v-if="isInquiryModalOpen"
      :response="selectedResponse"
      @closeModal="closeInquiryModal"
    />
  </section>
</template>

<script>
import designersCard from '~/components/global/infoCard.vue'
import InquiryModal from '~/components/global/InquiryModal.vue'
export default {
  components: { designersCard, InquiryModal },
  data() {
    return {
      consultingItems: [
        {
          type: 'consultant',
          name: 'Michael Testa',
          title: 'CEO - GreenCheddar',
          price: 80,
          description:
            'Do you want to hear my thought on your product or strategy?',
          image: 'designers/consulting_image_1.svg',
          alt: 'consulting image 1',
        },
        {
          type: 'consultant',
          name: 'Stefano C. Testa',
          title: 'Sales - GreenCheddar',
          price: 30,
          description:
            'Do you want to hear my thought on your product or strategy?',
          image: 'designers/consulting_image_2.svg',
          alt: 'consulting image 2',
        },
        {
          type: 'consultant',
          name: 'Someone',
          title: 'Something - GreenCheddar',
          price: 50,
          description: 'Do you want to hear my thought on something?',
          image: 'designers/consulting_image_3.svg',
          alt: 'consulting image 3',
        },
      ],
      designersItems: [
        {
          type: 'designer',
          name: 'Modify menu',
          description: 'Small modifications to current menu',
          image: 'designers/designers_image_1.svg',
          alt: 'other designers image 1',
        },
        {
          type: 'designer',
          name: 'New menu',
          description: 'Design new menus for your business',
          image: 'designers/designers_image_2.svg',
          alt: 'other designers image 2',
        },
      ],
      isInquiryModalOpen: false,
      selectedResponse: {
        type: '',
        name: '',
        title: '',
        price: '',
        message: '',
      },
    }
  },
  methods: {
    openInquiryModal(item) {
      this.selectedResponse.type = item.type
      this.selectedResponse.name = item.name
      this.selectedResponse.title = item?.title
      this.selectedResponse.price = item?.price
      this.selectedResponse.message = item.description
      if (!this.isInquiryModalOpen) this.isInquiryModalOpen = true
    },
    closeInquiryModal() {
      if (this.isInquiryModalOpen) this.isInquiryModalOpen = false
    },
  },
}
</script>
