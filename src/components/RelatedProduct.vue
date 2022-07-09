<script setup lang="ts">
import { ref, onMounted } from 'vue';
import useGetQueries from '../composable/useGetQueries';
import { Product } from "../typings/Product";
import LineupProduct from '../pages/product-line-up/LineupProduct.vue';

const repairQuery = new URLSearchParams();
repairQuery.set("category", "repair");
const { data: repair } = useGetQueries<Product>("product", {
  autoFetch: true,
  query: repairQuery,
  perPage: 1,
});

const preventQuery = new URLSearchParams();
preventQuery.set("category", "prevent");
const { data: prevent } = useGetQueries<Product>("product", {
  autoFetch: true,
  query: preventQuery,
  perPage: 1,
});

const glowQuery = new URLSearchParams();
glowQuery.set("category", "glow");
const { data: glow } = useGetQueries<Product>("product", {
  autoFetch: true,
  query: glowQuery,
  perPage: 1,
});

const hydrateQuery = new URLSearchParams();
hydrateQuery.set("category", "hydrate");
const { data: hydrate } = useGetQueries<Product>("product", {
  autoFetch: true,
  query: hydrateQuery,
  perPage: 1,
});

</script>

<template>
    <div class="w-full justify-center">
        <div class="text-center my-14">
            <h1 class="font-questrial text-2xl text-gray-1">Related Product</h1>
        </div>
        <div class="flex flex-col sm:flex-row justify-center align-middle my-10 gap-[2rem] xl:gap-[10rem] xl:mr-[8rem]">
            <div class="w-48 xl:w-48 2xl:w-72 mx-auto sm:mx-0" v-for="(item, index) in prevent" :key="index">
                <LineupProduct 
                    :item="item" 
                    @click="$emit('click', item)" 
                    @mouseenter="$emit('hover', item.category.slug)"
                    @mouseleave="$emit('blur', item.category.slug)"
                />
            </div>
            <div class="w-48 xl:w-48 2xl:w-72 mx-auto sm:mx-0" v-for="(item, index) in hydrate" :key="index">
                <LineupProduct 
                    :item="item" 
                    @click="$emit('click', item)" 
                    @mouseenter="$emit('hover', item.category.slug)"
                    @mouseleave="$emit('blur', item.category.slug)"
                />
            </div>
            <div class="w-48 xl:w-48 2xl:w-72 mx-auto sm:mx-0" v-for="(item, index) in glow" :key="index">
                <LineupProduct 
                    :item="item" 
                    @click="$emit('click', item)" 
                    @mouseenter="$emit('hover', item.category.slug)"
                    @mouseleave="$emit('blur', item.category.slug)"
                />
            </div>
        </div>
    </div>
</template>