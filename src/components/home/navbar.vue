<template>
  <nav
    class="
      bg-white
      border-gray-200
      px-2
      sm:px-4
      py-2.5
      rounded
      dark:bg-gray-900
    "
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="https://flowbite.com/" class="flex items-center">
        <img
          src="@/assets/logo.svg"
          class="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span
          class="
            self-center
            text-xl
            font-semibold
            whitespace-nowrap
            dark:text-white
          "
          >Sistem Gudang</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="
          inline-flex
          items-center
          p-2
          ml-3
          text-sm text-gray-500
          rounded-lg
          md:hidden
          hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-gray-200
          dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
        "
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="click"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="
            flex flex-col
            p-4
            mt-4
            bg-gray-50
            rounded-lg
            border border-gray-100
            md:flex-row
            md:space-x-8
            md:mt-0
            md:text-sm
            md:font-medium
            md:border-0
            md:bg-white
            dark:bg-gray-800
            md:dark:bg-gray-900
            dark:border-gray-700
          "
        >
          <li>
            <router-link
              id="home"
              to="/"
              class="
                block
                py-2
                pr-4
                pl-3
                rounded
                md:bg-transparent md:p-0
                dark:text-white
              "
              :class="{
                'text-white bg-yellow-400 md:text-yellow-400':
                  routerHomeIsActive,
                'text-gray-700': routerTentangIsActive,
              }"
              aria-current="page"
              >Beranda</router-link
            >
          </li>
          <li>
            <router-link
              id="tentang"
              to="/tentang"
              class="
                block
                py-2
                pr-4
                pl-3
                rounded
                md:bg-transparent md:p-0
                dark:text-white
              "
              :class="{
                'text-white bg-yellow-400 md:text-yellow-400':
                  routerTentangIsActive,
                'text-gray-700': routerHomeIsActive,
              }"
              >Tentang</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarHome",
  data() {
    return {
      isOpen: false,
      routerHomeIsActive: false,
      routerTentangIsActive: false,
    };
  },
  methods: {
    click() {
      const navbar = document.getElementById("navbar-default");
      if (this.isOpen === false) {
        this.isOpen = true;
        navbar.classList.remove("hidden");
      } else {
        this.isOpen = false;
        navbar.classList.add("hidden");
      }
    },
  },
  mounted() {
    const path = this.$route.path;
    if (path === "/") {
      this.routerHomeIsActive = true;
      this.routerTentangIsActive = false;
    } else if (path === "/tentang") {
      this.routerHomeIsActive = false;
      this.routerTentangIsActive = true;
    }
  },
};
</script>
