<template>
  <div class="overlay flex justify-center items-center">
    <div
      class="md:w-[30rem] md:h-fit flex flex-col items-center rounded-md bg-white p-5 pt-0"
    >
      <!-- Close button -->
      <div class="w-full flex justify-end -mr-5">
        <button @click="closeModal">
          <close-icon
            class="w-7 h-7 cursor-pointer rounded-full hover:bg-gray-200 m-2 p-1"
          />
        </button>
      </div>
      <!-- <p>Please enter your email</p> -->
      <form
        action="https://form2channel.com/?form=carbon_calculator_inquiry"
        method="POST"
        class="flex flex-col md:flex-row items-center gap-4 md:gap-2"
      >
        <!-- Form Recipients when the form is submitted -->
        <!-- ,abel@zeraftech.com,michael.testa@zeraftech.com -->
        <input
          type="hidden"
          name="formto_googlesheets"
          value="mihret@zeraftech.com,eyobasch.zeraf@gmail.com"
        />
        <input
          type="text"
          name="Email"
          :value="inquiry.email"
          placeholder="Email address"
          class="w-72 text-black bg-gray-200 rounded-md px-4 py-2 md:py-2"
        />
        <input type="text" name="Type" :value="response.type" class="hidden" />
        <input
          type="text"
          name="Message"
          :value="response.message"
          class="hidden"
        />
        <button
          type="submit"
          class="w-fit bg-white text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white font-semibold text-lg rounded-md px-4 py-2 md:py-1"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import CloseIcon from '~/components/icons/CloseIcon.vue'
export default {
  name: 'InquiryModal',
  components: {
    CloseIcon,
  },
  props: {
    response: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      inquiry: {
        email: '',
      },
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
  },
}
</script>

<style scoped>
.overlay {
  @apply fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-40;
}
</style>
