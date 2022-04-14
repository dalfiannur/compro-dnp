<script lang="ts" setup>
import { computed, ref } from 'vue'
// @ts-ignore
import Maps from './Components/Maps.vue';
// @ts-ignore
// import Search from './Components/Search.vue';
// @ts-ignore
import ClinicList from './Components/ClinicList.vue';
import useGetClinics from '../../composable/useGetClinics'

const { data: clinics } = useGetClinics()

const searchQuery = ref("")
const searchedClinics = computed(() => {
    return clinics.value.filter((clinics) => {
        return (
            clinics.name
                .toLowerCase()
                .indexOf(searchQuery.value.toLowerCase()) != -1
        );
    });
});

</script>

<template>
    <div class="flex w-full items-center bg-gradient-hydrate h-48 sm:h-72">
        <h2 class="text-5xl sm:text-6xl m-auto text-white">Clinics Near You</h2>
    </div>
    <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-4/5">
            <!-- Search -->
            <div class="flex justify-center">
                <div class="input-group relative flex items-stretch w-full ml-6 sm:ml-16 mt-7 mb-5">
                    <img class="w-5" src="/img/search.svg" />
                    <input
                        type="search"
                        v-model="searchQuery"
                        class="form-control font-questrial block w-full px-3 py-1.5 bg-white bg-clip-padding transition ease-in-out m-0 focus:text-gray-500 focus:bg-white focus:border-gray-500 focus:outline-none"
                        placeholder="Cari Klinik / Dermatologist"
                    />
                    <button
                        class="btn inline-block font-questrial text-sm sm:text-base text-gray-600 mr-5 sm:mr-10 pt-0.5 w-28 sm:w-40 h-11 border border-gray-500"
                        type="button"
                    >Terdekat</button>
                </div>
            </div>
            <div class="h-[1px] bg-hydrate"></div>
            <div class="h-[607px] overflow-y-auto">
                <ClinicList :items="searchedClinics"></ClinicList>
            </div>
        </div>
        <Maps></Maps>
    </div>
</template>

<style scoped>
.bg-gradient-hydrate {
    background: linear-gradient(
        to right,
        rgb(99 196 180),
        rgba(255, 255, 255, 0)
    );
}
</style>