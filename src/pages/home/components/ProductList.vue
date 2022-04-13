<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { gsap } from 'gsap'
import { useRouter } from 'vue-router'

// Import Components
import ProductCard from '../../../components/ProductCard.vue'

// Import Composable
import useGetProducts from '../../../composable/useGetProducts'
import useGetProductSeries from '../../../composable/useGetProductSeries';

const emit = defineEmits(['categoryChange'])

// Initialization Composable
const router = useRouter()
const { data: series } = useGetProductSeries()
const { data: repair } = useGetProducts({ category: 'repair' })
const { data: prevent } = useGetProducts({ category: 'prevent' })
const { data: glow } = useGetProducts({ category: 'glow' })
const { data: hydrate } = useGetProducts({ category: 'hydrate' })

const categories = ref<string[]>(['repair', 'prevent', 'glow', 'hydrate'])
const selectedCategory = ref<string>('series')
const data = computed<any>(() => {
    return {
        series: series.value,
        repair: repair.value,
        prevent: prevent.value,
        glow: glow.value,
        hydrate: hydrate.value,
    }[selectedCategory.value]
})

const isSeries = computed<boolean>(() => selectedCategory.value === 'series')

const onProductClick = (index: number) => {
    if (isSeries.value) {
        selectedCategory.value = categories.value[index]
    } else {
        router.push('/products/' + index)
    }
}

watch(data, () => {
    gsap.fromTo('.product-list-wrapper', {
        y: -50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1
    })
})
</script>

<template>
    <div class="sm:px-0 md:px-20 grid grid-cols-4 justify-between sm:gap-0 md:gap-[40px]">
        <button
            v-for="(item, index) in categories"
            :key="item"
            class="flex-1 py-3 font-bold hover:tracking-[5px] text-gray-500 uppercase md:border-2 border-gray-500 h-14"
            :class="{
                'hover:border-repair active:bg-repair hover:text-repair active:text-white border': 0 === index,
                'hover:border-prevent active:bg-prevent hover:text-prevent active:text-white border-y border-r': 1 === index,
                'hover:border-glow active:bg-glow hover:text-glow active:text-white border-y': 2 === index,
                'hover:border-hydrate active:bg-hydrate hover:text-hydrate active:text-white border': 3 === index,
            
                'border-repair bg-repair !text-white tracking-[5px]': selectedCategory === 'repair' && index === 0,
                'border-prevent bg-prevent !text-white tracking-[5px]': selectedCategory === 'prevent' && index === 1,
                'border-glow bg-glow !text-white tracking-[5px]': selectedCategory === 'glow' && index === 2,
                'border-hydrate bg-hydrate !text-white tracking-[5px]': selectedCategory === 'hydrate' && index === 3
            }"
            @click="selectedCategory = item"
        >{{ item }}</button>
    </div>
    <div class="relative flex justify-center px-10 mt-16 md:px-20 product-list-wrapper">
        <div
            class="grid items-center gap-10 overflow-hidden md:grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 flex-nowrap"
        >
            <ProductCard
                v-for="(item, index) in data"
                :item="item"
                :key="index"
                @click="() => onProductClick(index)"
            />
        </div>
    </div>
    <div class="flex items-center gap-10 px-20 mt-10">
        <div class="flex-1">
            <hr />
        </div>
        <div>
            <a
                href="/products"
                @click.prevent
                @click="$router.push('/products')"
                class="text-xl text-hydrate"
            >See More</a>
        </div>
    </div>
</template>