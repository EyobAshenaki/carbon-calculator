<template>
  <div class="overlay flex justify-center items-center">
    <div
      class="md:w-[30rem] relative md:h-fit flex flex-col items-center rounded-md bg-white p-12"
    >
      <!-- Close button -->
      <button class="absolute top-1 right-1" @click="closeModal">
        <close-icon
          class="w-7 h-7 cursor-pointer rounded-full hover:bg-gray-200 m-2 p-1"
        />
      </button>
      <!-- <p>Please enter your email</p> -->
      <form
        action="https://form2channel.com/?form=carbon_calculator_inquiry"
        method="POST"
        class="flex flex-col md:flex-row items-center gap-4 md:gap-2"
      >
        <!-- Form Recipients when the form is submitted -->
        <f-f
          el="input"
          type="hidden"
          name="formto_googlesheets"
          value="eyobasch.zeraf@gmail.com, abel@zeraftech.com"
        >
        </f-f>
        <f-f
          el="input"
          type="email"
          name="Email"
          :value="inquiry.email"
          placeholder="Email address"
          class="w-72 text-black bg-gray-200 rounded-md px-4 py-2 md:py-2"
        >
        </f-f>
        <f-f
          el="input"
          type="text"
          name="Type"
          :value="response.type"
          class="hidden"
        >
        </f-f>
        <f-f
          el="input"
          type="text"
          name="Type"
          :value="response.name"
          class="hidden"
        >
        </f-f>
        <f-f
          v-if="response.title"
          el="input"
          type="text"
          name="Type"
          :value="response.title"
          class="hidden"
        >
        </f-f>
        <f-f
          v-if="response.price"
          el="input"
          type="text"
          name="Type"
          :value="response.price"
          class="hidden"
        >
        </f-f>
        <f-f
          el="input"
          type="text"
          name="Message"
          :value="response.message"
          class="hidden"
        >
        </f-f>
        <f-f
          el="button"
          type="submit"
          class="w-fit bg-white text-custom-teal border-2 border-custom-teal hover:bg-custom-teal hover:text-white font-semibold text-lg rounded-md px-4 py-2 md:py-1"
        >
          Submit
        </f-f>
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
  mounted() {
    // get an array of f-f elements to convert
    const els = document.getElementsByTagName('f-f')
    // loop through the array of elements
    for (let i = els.length - 1; i >= 0; i--) {
      // create an object of the attributes
      const attrs = els[i].getAttributeNames().reduce((acc, name) => {
        return { ...acc, [name]: els[i].getAttribute(name) }
      }, {})
      // create a new element using the el attribute
      const el = document.createElement(attrs.el)
      // loop through the array of attributes
      for (const key in attrs) {
        // filter out the el attribute
        // eslint-disable-next-line no-prototype-builtins
        if (attrs.hasOwnProperty(key) && key !== 'el') {
          // add all other attributes to the new element
          el.setAttribute(`${key}`, `${attrs[key]}`)
        }
      }
      // loop though the child nodes of the f-f
      while (els[i].childNodes.length > 0) {
        // append child nodes to the new element
        el.appendChild(els[i].childNodes[0])
      }
      // insert the new element into the DOM
      els[i].parentNode.insertBefore(el, els[i])
      // remove the f-f element from the DOM
      els[i].remove()
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
