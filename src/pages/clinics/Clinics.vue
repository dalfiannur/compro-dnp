<script lang="ts" setup>
import Maps from './Components/Maps.vue';
import ClinicList from './Components/ClinicList.vue';

</script>


<template>
    <div class="flex w-full items-center bg-gradient-hydrate h-96">
        <h2 class="text-6xl m-auto text-white">Clinics Near You</h2>
    </div>
    <div class="flex">
        <ClinicList></ClinicList>
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