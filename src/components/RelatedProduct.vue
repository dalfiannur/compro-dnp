<script setup lang="ts">
import { ref } from 'vue'

const item = ref<any[]>([
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
        <div class="text-center">
            <h1>Related Product</h1>
        </div>
        <div class="flex-none">
            <div v-for="(product, index) in item" :key="index">
                <div>
                    <div>
                        <img :src="product[index].images.imageSourceUrl" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>