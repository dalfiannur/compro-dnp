<script setup lang="ts">
import { ProductLineUp } from "../typings/productLineUp";

interface Prop {
  data: ProductLineUp;
}
const { data } = defineProps<Prop>();
const loadImage = (path: String) => {
  return "/img/" + path + ".jpg";
};
</script>

<template>

    <div class="w-full h-1/2 md:h-fit sm:h-fit aspect-square md:aspect-video">
      <img alt="Placeholder" class="block w-full m-auto" :src="loadImage(data.img)" />
    </div>

    <header class="flex justify-center flex-1 w-full p-2 leading-tight md:p-4">
      <h1 class="my-auto text-base md:text-lg ms:my-0 sm:text-lg sm:my-0">
        <p class>{{ data.product }}</p>
      </h1>
    </header>

</template>