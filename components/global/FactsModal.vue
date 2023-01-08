<template>
  <div class="overlay flex justify-center items-center">
    <div
      class="md:w-[30rem] md:h-fit flex flex-col items-center rounded-md bg-white p-10 pt-3"
    >
      <!-- Close button -->
      <div class="w-full flex justify-end -mr-5">
        <button @click="closeModal">
          <close-icon
            class="w-7 h-7 cursor-pointer rounded-full hover:bg-gray-200 m-2 p-1"
          />
        </button>
      </div>
      <div>
        <header class="text-xl font-semibold pb-3">Did you know?</header>
        <p>{{ randomFact }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from '~/components/icons/CloseIcon.vue'
export default {
  name: 'FactsModal',
  components: {
    CloseIcon,
  },
  data() {
    return {
      facts: [
        'Within the next 2 decades, global temperatures are likely to rise 1.5 degrees Celsius',

        'The last 7 years have been the warmest on record',

        'More than 1 million species are at risk of extinction by climate change',

        'Human activity, especially greenhouse gas emissions, is considered the dominant cause of temperature increases',

        'The last decade was the hottest in 125,000 years',

        'The greenhouse effect refers to the way the Earth’s atmosphere traps and absorbs solar energy',

        `By 2060, the cost of inaction on climate change is predicted to reach a staggering $44 trillion, with the highest anticipated GDP losses in the Middle-East, Northern, and Sub-Saharan Africa, and South and Southeast Asia`,

        'We are losing 1.2 trillion tons of ice each year',

        'We lost 302.4 billion work hours to excessive heat in 2019',

        'Hurricanes, droughts and coral deaths are a few of the natural disasters caused due to climate change',

        'More than 1 million species are at risk of extinction by climate change',

        'Due to the greenhouse effect, the average temperature of the earth is 15 degrees rather than -18 degrees without the greenhouse effect',

        'Carbon dioxide constitutes only 3.6 % of total greenhouse gases, out of which 0.12% is attributed to human activities',

        'Carbon dioxide is not the only contributing gas to climate change. Other gases like methane and nitrous oxide are far more dangerous than carbon dioxide alone.',

        'According to the World Food Program (WPF.org), by 2015, the number of people affected by climate change disasters could reach 375 million per year',

        'Nature is an untapped solution for climate change. Restore nature.',

        `According to a recent report by Oxfam, climate change could push food prices by 50-60 percent more by 2030.`,

        `Since 1969, the oceans have absorbed much of this increased heat, with the top 700 meters (about 2,300 feet) of ocean showing warming of more than 0.4 degrees Fahrenheit`,

        `Global sea level rose about 8 inches in the last century. However, the rate in the last two decades is nearly double that of the last century.`,

        'The average number of people exposed to heatwaves has increased by approximately 125 million since the beginning of the century.',

        'Community-led nonprofits working to fight climate change are underfunded.',

        `While instances of wildfires have decreased over the years, according to the WMO, the burn area and intensity of fires have increased.`,

        `Australia recently battled its largest bushfire on record, while parts of the Arctic, the Amazon and central Asia have also experienced unusually severe blazes`,

        `Over the next 20 years, global warming is expected to increase by 0.2 degrees per decade.`,

        `The concentration of carbon dioxide (CO2) in our atmosphere, as of May 2020, is 416 parts per million, the highest it has been in human history.`,

        `Depending upon the carbon emissions, a rise in temperature from 1.1 degrees up to 6.4 degrees is expected by the end of this century.`,

        `Promoting green transportation and carpooling can help to reduce carbon emissions and improve public health`,

        `The IPCC SR15 report found that limiting warming to 1.5°C above pre-industrial implies reaching net zero CO2 emissions globally around 2050.`,

        `Steps to reduce greenhouse gases can help save the negative health impacts. `,

        `Promoting safe public transportation and active activities like walking or use public transport can help reduce carbon emissions`,

        `Climate change is rapidly causing coastal flooding and displacement of people. Floods further cause major damages by injuring and killing people.`,

        `In 2003, around 70,000 deaths occurred in Europe alone due to diseases caused by rising temperatures.`,
      ],
    }
  },
  computed: {
    randomFact() {
      return this.facts[Math.floor(Math.random() * this.facts.length)]
    },
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
  @apply fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50;
}
</style>
