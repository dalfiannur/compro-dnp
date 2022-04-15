<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { Product } from '../typings/Product';

interface Prop {
    item?: Product;
    isSeries?: boolean;
    category?: string;
}

const props = defineProps<Prop>()
const { item, isSeries } = toRefs(props)
const hovered = ref<boolean>(false)
const itemNameRef = ref<HTMLDivElement>()

const getIcon = (category: string) => {
    return `/img/${category.toLowerCase()}.svg`
}

const onMouseEnter = () => {
    hovered.value = true
    itemNameRef.value?.classList.add('text-' + item?.value?.category.slug)
}

const onMouseLeave = () => {
    hovered.value = false
    itemNameRef.value?.classList.remove('text-' + item?.value?.category.slug)
}
</script>

<template>
    <div class="relative flex items-start flex-none h-full border border-white" :class="{
        'hover:border-repair': isSeries && item.category.slug === 'repair',
        'hover:border-prevent': isSeries && item.category.slug === 'prevent',
        'hover:border-glow': isSeries && item.category.slug === 'glow',
        'hover:border-hydrate': isSeries && item.category.slug === 'hydrate',
    }">
        <div v-if="item">
            <div class="relative p-10 bg-white-smoke aspect-[4/5]" :class="{
                'bg-repair': !isSeries && item.category.slug === 'repair',
                'bg-prevent': !isSeries && item.category.slug === 'prevent',
                'bg-glow': !isSeries && item.category.slug === 'glow',
                'bg-hydrate': !isSeries && item.category.slug === 'hydrate',
                
            }">
                <img class="object-cover w-full h-full filter" :src="item.images[0].imageSourceUrl" />
                <div class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full cursor-pointer"
                    :class="{
                        'hover:bg-repair hover:bg-opacity-70': !isSeries && item.category.slug === 'repair',
                        'hover:bg-prevent hover:bg-opacity-70': !isSeries && item.category.slug === 'prevent',
                        'hover:bg-glow hover:bg-opacity-70': !isSeries && item.category.slug === 'glow',
                        'hover:bg-hydrate hover:bg-opacity-70': !isSeries && item.category.slug === 'hydrate'
                    }" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
                    <img v-if="!isSeries" :src="getIcon(item.category.slug)" class="hidden w-14 h-14" :class="{ '!block': hovered }" />
                    <h5 class="hidden mt-2 text-2xl text-center text-white" :class="{
                        '!block': hovered
                    }">{{ item.usedAs }}</h5>
                </div>
            </div>
            <div ref="itemNameRef"
                class="mt-10 text-2xl text-center text-gray-500 h-14 font-din-next-lt-pro-light item-text">{{
                    item.name
                }}</div>
        </div>
        <div v-else class="absolute top-0 bottom-0 w-full">
            <div class="w-full aspect-[4/5] bg-white-smoke" :class="{
                'bg-repair': !isSeries && category === 'repair',
                'bg-prevent': !isSeries && category === 'prevent',
                'bg-glow': !isSeries && category === 'glow',
                'bg-hydrate': !isSeries && category === 'hydrate',
            }" />
        </div>
    </div>
</template>