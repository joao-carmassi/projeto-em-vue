<template>
  <NavbarHome />
  <HeroHome />
  <ContainerCards />
</template>

<script lang="ts">
import NavbarHome from "./components/NavbarHome.vue";
import ContainerCards from "./components/ContainerCards.vue";
import HeroHome from "./components/HeroHome.vue";

export default {
  components: { NavbarHome, HeroHome, ContainerCards },
};
</script>
