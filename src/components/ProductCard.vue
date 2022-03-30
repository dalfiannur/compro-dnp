<script setup lang="ts">
import { ref } from 'vue'

interface Prop {
    item: any;
    category: string;
}

const { item, category } = defineProps<Prop>()
const hovered = ref<boolean>(false)
</script>

<template>
    <div class="flex-none slider-item">
        <div class="relative p-10 bg-white-smoke">
            <img
                class="object-cover w-full aspect-ratio filter"
                :src="item.images[0].image_source_url"
            />
            <div
                class="absolute top-0 left-0 flex items-center justify-center w-full h-full cursor-pointer"
                :class="{
                    'hover:bg-repair hover:bg-opacity-70': category === 'repair',
                    'hover:bg-prevent hover:bg-opacity-70': category === 'prevent',
                    'hover:bg-glow hover:bg-opacity-70': category === 'glow',
                    'hover:bg-hydrate hover:bg-opacity-70': category === 'hydrate'
                }"
                @mouseenter="hovered = true"
                @mouseleave="hovered = false"
            >
                <h5
                    class="hidden text-3xl text-center text-white"
                    :class="{
                        '!block': hovered
                    }"
                >{{ item.name }}</h5>
            </div>
        </div>
        <div
            class="mt-10 text-2xl text-center text-gray-500 h-14 font-din-next-lt-pro-light item-text"
        >{{ item.name }}</div>
    </div>
</template>