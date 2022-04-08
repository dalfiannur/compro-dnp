<script lang="ts" setup>
interface Prop {
    data: SliderV2;
    currentSlide: number;
    index: number;
    direction: string;
}
</script>

<template>
    <div class="flex justify-between items-center w-full h-24">
        <div class="ml-16">
            <p class="font-questrial text-gray-600">Klinik Dr. Andalia</p>
            <p class="font-questrial text-hydrate text-sm -mt-1">Jakarta Pusat - 2.2 km</p>
        </div>
        <button class="flex items-center justify-center w-40 h-12 mr-10 border border-gray-500">
            <img class="mr-3 w-6" src="/img/location.svg" />
            <p class="font-questrial text-gray-600 mt-1">Lihat Peta</p>
        </button>
    </div>
</template>