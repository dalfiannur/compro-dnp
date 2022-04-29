<script setup lang="ts">
  import {ProductRepair} from "../typings/ProductLineUp";

interface Prop {
  data: ProductRepair;
}
const { data } = defineProps<Prop>();
const loadImage = (path: String) => {
  return "/img/" + path + ".png";
};

</script>

<template>
  <div
    class="relative flex-none h-fit my-6 overflow-hidden duration-200 hover:text-repair grayscale hover:grayscale-0"
  >
    <div class="w-full aspect-square md:aspect-video bg-gray-200">
      <img class="block w-[360px] h-[435px] m-auto hover:bg-repair p-6"
        :src="loadImage(data.img)"
      />
    </div>
    <h1 class="text-base pt-6 font-questrial text-center md:text-lg">
      <p class>{{ data.product }}</p>
    </h1>
  </div>

</template>
