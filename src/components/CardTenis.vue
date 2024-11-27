<template>
  <div class="card bg-base-100 w-72 lg:w-96 md:w-80 shadow-xl">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ dadosTenis.nome }}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions">
        <button class="btn btn-primary w-full animate-none">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { IDadosTenis } from "@/app/interfaces/IDadosTenis";
import { PropType } from "vue";

export default {
  props: {
    dadosTenis: { type: Object as PropType<IDadosTenis>, required: true },
  },
};
</script>
