<template>
  <div class="flex flex-col h-screen">
    <navbar-home />
    <div class="flex-grow">
      <h1>Tentang</h1>
    </div>
    <footer-home/>
  </div>
</template>

<script>
import NavbarHome from "../navbar.vue";
import FooterHome from "../footer.vue";
export default {
  name: "TentangHome",
  components: {
    NavbarHome,
    FooterHome
  },
};
</script>
