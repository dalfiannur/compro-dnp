<script setup lang="ts">
import { ref, defineProps, toRefs, onBeforeUnmount, onMounted } from 'vue'
//@ts-ignore
import ProductButton from './ProductButton.vue';

</script>

<template>
    <div class="h-min w-full bg-hydrate p-8 md:p-16">
        <h2 class="text-5xl md:text-6xl text-white font-questrial mt-6">
            DPE Product
            <br />Line Up
        </h2>
        <div class="flex flex-col-reverse md:flex-row">
            <div class="w-full md:w-6/12 lg:w-5/12 mr-6">
                <div class="flex flex-col md:flex-row md:h-28 w-full mt-6 md:mt-20 justify-between">
                    <div class="flex flex-col w-full mr-8 justify-between">
                        <ProductButton name="Repair"></ProductButton>
                        <ProductButton name="Prevent"></ProductButton>
                    </div>
                    <div class="flex flex-col w-full justify-between">
                        <ProductButton name="Glow"></ProductButton>
                        <ProductButton name="Hydrate"></ProductButton>
                    </div>
                </div>
                <p
                    class="text-base text-white font-questrial mt-12 mb-4"
                >Caffeine is a powerful antioxidant and anti-aging. While combined with green tea and polyphenol, caffeince can also.</p>
            </div>
            <div class="relative w-full md:w-6/12 lg:w-7/12">
                <img
                    class="md:absolute right-0 top-1/4 md:-translate-y-1/2 max-h-[500px] max-w-full"
                    src="/img/product-line.png"
                    alt="product-line-up"
                />
            </div>
        </div>
    </div>
</template>

