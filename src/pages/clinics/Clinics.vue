<script lang="ts" setup>
import { computed, ref } from "vue";
// @ts-ignore
import Maps from "./Components/Maps.vue";
// @ts-ignore
// import Search from './Components/Search.vue';

import ClinicItem from './Components/ClinicItem.vue';
import useGetQueries from "../../composable/useGetQueries";
import { Clinic } from "../../typings/Clinic";

const { data: clinics } = useGetQueries<Clinic>("clinics");

type Location = {
  longitude?: string
  latitude?: string
}
const location = ref<Location>({});

const searchQuery = ref("");
const searchedClinics = computed(() => {
  return clinics.value.filter((clinics) => {
    return clinics.name.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1;
  });
});

const showMap = (clinic: Clinic) => {
  const loc = {
    longitude: clinic.longitude.toString(),
    latitude: clinic.latitude.toString()
  }
  location.value = loc
}
</script>

<template>
  <div class="flex items-center w-full h-48 bg-gradient-hydrate sm:h-72">
    <h2 class="m-auto text-5xl text-white sm:text-6xl">Clinics Near You</h2>
  </div>
  <div class="flex flex-col lg:flex-row">
    <div class="flex-1 max-w-[800px]">
      <!-- Search -->
      <div class="flex justify-center">
        <div class="relative flex items-stretch w-full mb-5 ml-6 input-group sm:ml-16 mt-7">
          <img class="w-5" src="/img/search.svg" />
          <input type="search" v-model="searchQuery"
            class="form-control font-questrial block w-full px-3 py-1.5 bg-white bg-clip-padding transition ease-in-out m-0 focus:text-gray-500 focus:bg-white focus:border-gray-500 focus:outline-none"
            placeholder="Cari Klinik / Dermatologist" />
          <button
            class="btn inline-block font-questrial text-sm sm:text-base text-gray-600 mr-5 sm:mr-10 pt-0.5 w-28 sm:w-40 h-11 border border-gray-500"
            type="button">
            Telusuri
          </button>
        </div>
      </div>
      <div class="h-[1px] bg-hydrate"></div>
      <div class="h-[607px] overflow-y-auto">
        <ClinicItem v-for="(item, index) in clinics" :key="`clinic-${index}`" :data="item" :index="index"
          @show="showMap(item)" />
      </div>
    </div>
    <Maps :location="location" />
  </div>
</template>

<style scoped>
.bg-gradient-hydrate {
  background: linear-gradient(to right, rgb(99 196 180), rgba(255, 255, 255, 0));
}
</style>
