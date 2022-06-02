<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
    items: any[]
}

const props = defineProps<Props>()
const { items } = toRefs(props);
</script>

<template>
    <div v-for="item in items" :key="item.id" class="w-full mt-6 md:mt-12">
        <div class="flex flex-col sm:flex-row w-full">
            <div class="h-52 w-full sm:w-[30%] lg:w-[25%] flex-none" :class="[`bg-${item.category.slug}`]">
                <img class="h-full w-full p-4 object-contain" :src="`/img/${item.category.slug}-series.png`" />
            </div>
            <div
                class="flex-1 h-40 sm:h-52 w-full flex flex-col justify-center bg-white-smoke font-questrial p-8 lg:p-14 text-center sm:text-left">
                <h2 class="text-2xl sm:text-4xl" :class="`text-${item.category.slug}`">{{ item.name }}</h2>
                <div class="text-sm sm:text-base text-baseColor mt-4 max-w-sm mx-auto sm:mx-0 product-description"
                    v-html="item.description" />
            </div>
        </div>
        <div class="flex flex-col sm:flex-row align-middle justify-start gap-1 sm:gap-6 mt-0 md:mt-6 font-questrial"
            :class="[`text-${item.category.slug}`]">
            <div class="w-full sm:w-[30%] lg:w-[25%] uppercase text-center tracking-[0.5em] font-inter border-[1px] py-2 pl-2"
                :class="`text-${item.category.slug} border-${item.category.slug}`">
                {{ item.category.name }}</div>
            <div class="flex flex-row justify-center gap-4 my-1 sm:my-auto">
                <!-- <img class="w-6 md:w-10 h-6 md:h-10" src="/img/icon1.png"> -->
                <img class="w-6 md:w-10 h-6 md:h-10" :src="`/img/${item.category.slug}.svg`">
            </div>
            <div class="text-center my-auto">{{ item.usedAs }}</div>
        </div>
    </div>
</template>

<style>
.product-description p {
    display: none;
}

.product-description p:first-child {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
}

.product-description ul {
    display: none;
}
</style>