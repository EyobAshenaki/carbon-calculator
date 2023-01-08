<template>
  <section
    class="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0"
  >
    <!-- Main card section -->
    <div
      class="md:w-2/4 max-w-md h-fit rounded-md shadow-lg px-10 py-7 mt-3 mx-5 md:mt-0 md:mx-auto"
    >
      <!-- Card header  -->
      <header class="w-full flex justify-end">
        <div class="flex items-center gap-2">
          <span class="font-medium bg-gray-100 rounded-md mr-1 py-1 px-3"
            >Contract Name</span
          >
          <div v-if="!contractName" class="flex items-center space-x-2">
            <div class="w-14 h-4 bg-slate-200 rounded-full animate-pulse"></div>
            <div
              class="w-24 h-4 bg-slate-200 rounded-full animate-[pulse_3s_ease-in_infinite]"
            ></div>
          </div>
          <span v-else class="font-mono text-lg text-green-600">{{
            contractName
          }}</span>
        </div>
      </header>

      <!-- Card body -->
      <div class="flex flex-col items-center py-10">
        <header class="font-semibold text-lg">Total Emission</header>
        <div v-if="!totalEmission" class="flex items-center space-x-2 pt-3">
          <div class="w-14 h-3 bg-slate-200 rounded-full animate-pulse"></div>
          <div
            class="w-10 h-3 bg-slate-200 rounded-full animate-[pulse_3s_ease-in_infinite]"
          ></div>
        </div>
        <p v-else class="font-mono text-xl text-green-600">
          {{ totalEmission }}
          <span class="font-semibold italic text-sm">KgeCo2</span>
        </p>
      </div>

      <!-- Card action -->
      <div class="action-section">
        <button @click="handleNewContract">Add new Contract</button>
        <button @click="handleFinish">Finish</button>
      </div>
    </div>

    <!-- Tips section -->
    <div class="tips">
      <header>Tips</header>
      <p>
        If you'd like our in-house team to support you with designing this
        numbers onto your menu, please click on the Order Designer on the right
        hand.
      </p>
      <p>
        We can help you to publish these digital menus on Social Media to help
        you attract new climate conscious customers.
      </p>
      <p>
        If you'd like us to help you calculate your emissions, please click on
        the carbon accountant option on the side panel.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TotalEmissions',
  computed: {
    contractName() {
      return this.$store.getters['emission/getContractName']
    },

    totalEmission() {
      return this.$store.getters['emission/getTotalEmission']
    },
  },
  beforeMount() {
    this.$store.dispatch('emission/calculateTotalEmission')
  },
  methods: {
    handleFinish() {
      console.log('Finish Clicked')
      // Show the success message in a modal
    },

    handleNewContract() {
      this.$store.dispatch('emission/nextSection', {})
    },
  },
}
</script>

<style scoped>
.tips {
  @apply md:min-w-[15.5rem] md:w-1/4 h-fit flex flex-col items-center gap-4 font-medium text-white bg-green-600 rounded-md p-5 mb-5;
}

.tips header {
  @apply text-2xl font-bold underline;
}

.tips p {
  @apply text-sm text-center;
}

.action-section {
  @apply flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8;
}

.action-section button {
  @apply w-full md:w-fit font-medium bg-white border rounded-md hover:text-white  py-1 px-4;
}

.action-section button:first-child {
  @apply border-gray-500 hover:bg-gray-500;
}

.action-section button:last-child {
  @apply border-green-600 hover:bg-green-600;
}
</style>
