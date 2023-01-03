<template>
  <section
    class="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0"
  >
    <div
      class="md:w-2/4 max-w-md h-fit rounded-md shadow-lg px-10 py-7 mt-3 mx-5 md:mt-0 md:mx-auto"
    >
      <header class="flex justify-end">
        <p>
          <span class="font-medium bg-gray-200 rounded-sm mr-1 py-1 px-3"
            >Contact Name</span
          >

          <span class="font-mono text-lg text-green-600">John Doe</span>
        </p>
      </header>
      <div class="flex flex-col items-center py-10">
        <header class="font-semibold text-lg">Total Emissions</header>
        <p class="font-mono text-xl text-green-600">
          2000 <span class="font-semibold italic text-sm">KgeCo2</span>
        </p>
      </div>
      <div class="action-section">
        <button>Add new Contact</button>
        <button>Finish</button>
      </div>
    </div>
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
export default {}
</script>

<style scoped>
.tips {
  @apply md:min-w-[15.5rem] md:w-1/4 h-fit flex flex-col items-center gap-4 text-white bg-green-600 p-5 mb-5;
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
