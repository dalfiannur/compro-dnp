<script setup lang="ts">
import { ref, onMounted } from 'vue';
import useGetQueries from '../composable/useGetQueries';
import { Product } from "../typings/Product";
import LineupProduct from '../pages/product-line-up/LineupProduct.vue';


// const { data: product } = useGetQueries<Product>("product", {
//     autoFetch: true,
//     perPage: 3,
// });
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

const items = ref<any[]>([
    {
        id: 1,
        name: 'Dummy',
        category: {
            slug: 'repair'
        },
        images: [
            {
                imageSourceUrl: '/img/Dummy1.png'
            }
        ]
    },
    {
        id: 2,
        name: 'Dummy Cream',
        category: {
            slug: 'prevent'
        },
        images: [
            {
                imageSourceUrl: '/img/Dummy2.png'
            }
        ]
    },
    {
        id: 3,
        name: 'Dummy Spray',
        category: {
            slug: 'glow'
        },
        images: [
            {
                imageSourceUrl: '/img/Dummy3.png'
            }
        ]
    },
])

</script>

<template>
    <div class="w-full justify-center">
        <div class="text-center my-14">
            <h1 class="font-questrial text-2xl text-gray-1">Related Product</h1>
        </div>
        <div class="flex flex-wrap lg:mx-20 my-10 justify-center gap-6">
            <div class="w-72" v-for="(item, index) in hydrate" :key="index">
                <LineupProduct 
                    :item="item" 
                    @click="$emit('click', item)" 
                    @mouseenter="$emit('hover', item.category.slug)"
                    @mouseleave="$emit('blur', item.category.slug)"
                />
            </div>
            <div class="w-72" v-for="(item, index) in prevent" :key="index">
                <LineupProduct 
                    :item="item" 
                    @click="$emit('click', item)" 
                    @mouseenter="$emit('hover', item.category.slug)"
                    @mouseleave="$emit('blur', item.category.slug)"
                />
            </div>
            <div class="w-72" v-for="(item, index) in glow" :key="index">
                <LineupProduct 
                    :item="item" 
                    @click="$emit('click', item)" 
                    @mouseenter="$emit('hover', item.category.slug)"
                    @mouseleave="$emit('blur', item.category.slug)"
                />
            </div>
        </div>
        <!-- <div class="flex flex-wrap lg:mx-20 my-10 justify-center gap-6">
            <div class="w-72" v-for="(item, index) in items" :key="index">
                <div class="font-questrial">
                    <div class="flex aspect-square w-full bg-white-smoke justify-center">
                        <img class="object-cover p-8 h-full" :src="item.images[0].imageSourceUrl" alt="">
                    </div>
                    <div class="flex lg:hidden w-fuull h-20 items-center justify-center gap-5 bg-hydrate">
                        <img class="w-12" src="/img/hydrate.svg" />
                        <p class="description text-white">Dark spot reducer with triple action</p>
                    </div>
                </div>
                <div class="my-8">
                    <p class="font-questrial text-center text-2xl lg:text-xl text-gray-1">{{ item.name }}</p>
                </div>
            </div>
        </div> -->
    </div>
</template>