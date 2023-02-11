<template>
  <nav
    class="min-w-[17rem] lg:visible absolute top-20 right-0 lg:static bg-custom-teal z-40"
    :class="{ invisible: isMenuClosed }"
  >
    <section v-for="(menuItem, idx) in menuItems" :key="idx">
      <header>{{ menuItem.header }}</header>
      <ul>
        <li
          v-for="(item, ItemIdx) in menuItem.items"
          :key="ItemIdx"
          :class="{
            active: selectedMenuItem === item.value && $route.name === 'index',
          }"
          @click="handleSideNavButtonClick(item.value)"
        >
          <img :src="getIconUrl(item.icon)" :alt="item.alt" />
          <a>{{ item.name }}</a>
        </li>
      </ul>
    </section>

    <!-- Sign out -->
    <!-- <div class="flex gap-2 justify-center pt-3">
      <img
        class="w-7"
        src="~/assets/images/side_bar_icons/account_icon.svg"
        alt="sign out icon"
      />
      <a>Sign Out</a>
    </div> -->
  </nav>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      menuItems: [
        {
          header: 'Measure',
          items: [
            {
              name: 'Get Started',
              value: 'getStarted',
              icon: 'get_started_icon.svg',
              alt: 'get started icon',
            },
            {
              name: 'Gaseous Fuels',
              value: 'gaseousFuels',
              icon: 'gaseous_fuels_icon.svg',
              alt: 'gaseous fuels icon',
            },
            {
              name: 'Liquid Fuels',
              value: 'liquidFuels',
              icon: 'liquid_fuels_icon.svg',
              alt: 'liquid fuels icon',
            },
            {
              name: 'Solid Fuels',
              value: 'solidFuels',
              icon: 'solid_fuels_icon.svg',
              alt: 'solid fuels icon',
            },
            {
              name: 'Agriculture',
              value: 'agriculture',
              icon: 'agriculture_icon.svg',
              alt: 'agriculture icon',
            },
            {
              name: 'Metals',
              value: 'metals',
              icon: 'metals_icon.svg',
              alt: 'metals icon',
            },
            // {
            //   name: 'Minerals',
            //   value: 'minerals',
            //   icon: 'minerals_icon.svg',
            //   alt: 'minerals icon',
            // },
            {
              name: 'Total Emission',
              value: 'totalEmission',
              icon: 'total_emissions_icon.svg',
              alt: 'total emission icon',
            },
          ],
        },
        {
          header: 'Menu',
          items: [
            {
              name: 'Designers',
              value: 'designers',
              icon: 'designers_icon.svg',
              alt: 'designers icon',
            },
            {
              name: 'Carbon Accountants',
              value: 'carbonAccountants',
              icon: 'carbon_accountants_icon.svg',
              alt: 'carbon accountants icon',
            },
          ],
        },
        {
          header: 'Other',
          items: [
            {
              name: 'Smart Energy',
              value: 'smartEnergy',
              icon: 'smart_energy_icon.svg',
              alt: 'smart energy icon',
            },
          ],
        },
      ],
    }
  },
  computed: {
    selectedMenuItem: {
      get() {
        return this.$store.getters.getSelectedMenuItem
      },
      set(value) {
        this.$store.dispatch('setSelectedMenuItem', value)
      },
    },
    isMenuClosed() {
      return this.$store.getters.getMenuState
    },
  },
  methods: {
    getIconUrl(iconName) {
      return require(`~/assets/images/side_bar_icons/${iconName}`)
    },
    handleSideNavButtonClick(menuItem) {
      this.selectedMenuItem = menuItem
      this.$router.push({ name: 'index' })
      this.$store.dispatch('toggleMenu')
    },
  },
}
</script>

<style scoped>
.active {
  @apply bg-teal-900 text-base;
}

nav {
  @apply flex flex-col text-white py-5 px-3;
}

nav section {
  @apply ml-5;
}

nav section ul {
  @apply flex flex-col  gap-2 list-none py-3 ml-3;
}

ul li {
  @apply min-w-fit max-w-[11.5rem] min-h-fit h-10 flex items-center gap-2 text-sm font-semibold rounded-md cursor-pointer py-2 px-4;
}

ul li img {
  @apply w-5;
}
</style>
