<script setup lang="ts">
import { ref, onMounted } from 'vue';
import useGetQueries from '../composable/useGetQueries';
import ProductCardVue from './ProductCard.vue';
import { Product } from "../typings/Product";
import ProductBanner from '../pages/product-detail/components/ProductBanner.vue';


const { data: product } = useGetQueries<Product>("product", {
  autoFetch: true,
  perPage: 3,
});

const items = ref<any[]>([
    {
        id: 1,
        name: 'Caffein Repair 1',
        category: {
            slug: 'repair'
        },
        images: [
            {
                imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
            }
        ]
    },
    {
        id: 2,
        name: 'Caffein Prevent 1',
        category: {
            slug: 'prevent'
        },
        images: [
            {
                imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
            }
        ]
    },
    {
        id: 3,
        name: 'Caffein Glow 1',
        category: {
            slug: 'glow'
        },
        images: [
            {
                imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
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
            <div class="w-72" v-for="(item, index) in product" :key="index">
                <div class="font-questrial">
                    <div class="aspect-square w-full bg-white-smoke">
                        <img class="p-8" :src="item.images[0].imageSourceUrl" alt="">
                    </div>
                    <div class="flex lg:hidden w-fuull h-20 items-center justify-center gap-5 bg-hydrate">
                        <img class="w-12" src="/img/hydrate.svg" />
                        <p class="description text-white">Dark spot reducer with triple action</p>
                    </div>
                </div>
                <div class="my-8">
                    <p class="font-questrial text-center text-2xl lg:text-xl text-gray-1">{{item.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>