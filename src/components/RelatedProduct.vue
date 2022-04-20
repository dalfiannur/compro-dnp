<script setup lang="ts">
import { ref } from 'vue'

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
    {
        id: 4,
        name: 'Caffein Hydrate 1',
        category: {
            slug: 'hydrate'
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
        <div class="flex flex-wrap lg:mx-20 justify-center gap-6">
            <div class="w-72" v-for="(item, index) in items" :key="index">
                <div class="">
                    <div class="aspect-square w-full bg-white-smoke">
                        <img class="p-8" :src="item.images[0].imageSourceUrl" alt="">
                    </div>
                </div>
                <div class="my-8">
                    <p class="font-questrial text-center text-gray-1">{{item.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>