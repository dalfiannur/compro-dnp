<script lang="ts" setup>
import { defineProps, onMounted, ref, toRefs } from "vue";
import * as geolib from "geolib";

import { Clinic } from "../../../typings/Clinic";

interface Prop {
  data: Clinic;
  index: number;
}

defineEmits(["show"]);
const { data, index } = defineProps<Prop>();
const location = ref<GeolocationPosition>();

onMounted(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    location.value = position;
  });
});

const countDistance = (latitude: number, longitude: number) => {
  if (location.value) {
    const meters = geolib.getDistance(
      {
        latitude: location.value?.coords.latitude,
        longitude: location.value?.coords.longitude,
      },
      {
        latitude,
        longitude,
      }
    );

    return Math.floor(meters / 1000);
  }
  return "";
};
</script>

<template>
  <div
    class="flex items-center justify-between w-full h-24"
    :class="{ 'bg-gray-100': index % 2 === 1 }"
  >
    <div class="ml-6 sm:ml-16">
      <p class="text-lg text-gray-600 font-questrial">{{ data.name }}</p>
      <p class="-mt-1 text-sm font-questrial text-hydrate">
        {{ data.address }} - {{ countDistance(data.latitude, data.longitude) }} Km
      </p>
    </div>
    <button
      class="flex items-center justify-center mr-5 text-sm border border-gray-500 sm:text-base w-28 sm:w-40 h-11 sm:mr-10"
      @click="$emit('show')"
    >
      <img class="w-3 mr-2 sm:mr-3 sm:w-4" src="/img/location.svg" />
      <span class="mt-1 text-gray-600 font-questrial">Lihat Peta</span>
    </button>
  </div>
</template>
