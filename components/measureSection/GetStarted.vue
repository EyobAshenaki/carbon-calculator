<template>
  <section>
    <h1>Getting Started - Start Creating Your Contract</h1>
    <p>
      We've developed this calculator to help you calculate the emissions for
      each of your contracts. Please fill out this form to discover the
      emissions of each of your contracts.
    </p>
    <p>
      You can also hire one of our Carbon Accountants to do this for you, with
      more rigour.
    </p>
    <p>
      A lot of your customers might want to see their environmental impact on
      their contracts. You can also hire one of our Designers to design this
      emissions into your contracts.
    </p>
    <!-- <h1>Start</h1> -->
    <form @submit.prevent="submitForm">
      <input v-model="contractName" type="text" placeholder="Contract Name" />
      <button type="submit">Next</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'GetStarted',
  data() {
    return {
      contractName: this.$store.getters['emission/getContractName'],
    }
  },
  methods: {
    submitForm() {
      this.$store.dispatch('emission/nextSection', {
        contractName: this.contractName,
      })
    },
  },
}
</script>

<style scoped>
h1 {
  @apply font-medium text-xl text-[#266e73] text-center sm:text-start pb-4;
}

p {
  @apply text-base pl-4 pb-4;
}

form {
  @apply flex flex-col sm:flex-row items-center gap-4 mt-5;
}

input[type='text'] {
  @apply w-64 text-black bg-gray-100 border border-slate-300 rounded-md placeholder:italic placeholder:focus:text-[#266e73] focus:outline-none focus:ring-1 focus:border-[#266e73] focus:ring-[#266e73] ml-4 px-4 py-1.5;
}

button[type='submit'] {
  @apply w-fit font-medium text-[#266e73] bg-white border-2 border-[#266e73] rounded-md hover:text-white hover:bg-[#266e73] px-8 py-1.5;
}
</style>
