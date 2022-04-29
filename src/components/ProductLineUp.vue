<script setup lang="ts">
import { inject, ref } from 'vue'
import { ProductLineUp } from "../typings/ProductLineUp";

interface Prop {
  data: ProductRepair;
}
const { data } = defineProps<Prop>();
const loadImage = (path: String) => {
  return "/img/" + path + ".png";
};

const hover = inject("hover", ref<boolean>(false));


</script>

<template>
  <div @mouseover="hover = true" @mouseleave="hover = false" class="w-[320px] h-[435px] relative left-[-50px] my-6 overflow-hidden duration-200 hover:text-repair grayscale hover:grayscale-0">
    <div class="w-full h-[385px]  aspect-square md:aspect-video bg-gray-200">

      <div class="absolute" v-if="hover === true">
        <img class="w-[320px] h-[385px]"
        :src="loadImage(data.hover)"
        />
      </div>

      <div class="absolute">
        <img class="w-[320px] h-[385px] m-auto p-8"
        :src="loadImage(data.img)"
        />
      </div>

    </div>
    <h1 class="text-base pt-6 font-questrial text-center">
      <p class>{{ data.product }}</p>
    </h1>
  </div>

</template>
