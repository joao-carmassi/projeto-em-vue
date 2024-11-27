<template>
  <section class="w-full min-h-screen p-14 lg:p-20 bg-base-200">
    <!-- <ul
      v-if="dadosTenis.length"
      class="flex justify-center items-center gap-10 lg:gap-20 flex-wrap"
    >
      <li v-for="(item, index) in dadosTenis" :key="index">
        <CardTenis :dadosTenis="item" />
      </li>
    </ul>
    <p v-else class="text-lg">*Sem elementos na lista*</p> -->
  </section>
</template>

<script lang="ts">
import { IDadosTenis } from "@/app/interfaces/IDadosTenis";
import { baixaDadosTenis } from "@/app/services/BaixaDadosTenis";

export default {
  // components: { CardTenis },
  data() {
    return {
      dadosTenis: [] as IDadosTenis[],
    };
  },
  created() {
    this.dadosTenis = baixaDadosTenis();
  },
};
</script>
