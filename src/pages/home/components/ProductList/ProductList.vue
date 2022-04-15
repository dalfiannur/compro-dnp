<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { gsap } from 'gsap'
import { useRouter } from 'vue-router'

// Import Components
import ProductCard from '../../../../components/ProductCard.vue'
import Button from './Button.vue'

// Import Composable
import useGetProductSeries from '../../../../composable/useGetProductSeries';
import useGetQueries from '../../../../composable/useGetQueries'
import { Product } from '../../../../typings/Product'

const emit = defineEmits(['categoryChange'])

// Initialization Composable
const router = useRouter()
const { data: series } = useGetProductSeries()

const repairQuery = new URLSearchParams()
repairQuery.set('category', 'repair')
const { data: repair } = useGetQueries<Product>('product', {
    query: repairQuery,
    perPage: 4
})

const preventQuery = new URLSearchParams()
preventQuery.set('category', 'prevent')
const { data: prevent } = useGetQueries<Product>('product', {
    query: preventQuery,
    perPage: 4
})

const glowQuery = new URLSearchParams()
glowQuery.set('category', 'glow')
const { data: glow } = useGetQueries<Product>('product', {
    query: glowQuery,
    perPage: 4
})

const hydrateQuery = new URLSearchParams()
hydrateQuery.set('category', 'hydrate')
const { data: hydrate } = useGetQueries<Product>('product', {
    query: hydrateQuery,
    perPage: 4,
})

const categories = ref<string[]>(['repair', 'prevent', 'glow', 'hydrate'])
const selectedCategory = ref<string>('series')
const hovered = ref<string>('')

type ButtonRef = HTMLButtonElement & { onHover: () => void, onBlur: () => void }
const repairButtonRef = ref<ButtonRef>()
const preventButtonRef = ref<ButtonRef>()
const glowButtonRef = ref<ButtonRef>()
const hydrateButtonRef = ref<ButtonRef>()

const data = computed<Product[]>(() => {
    return {
        series: series.value,
        repair: repair.value,
        prevent: prevent.value,
        glow: glow.value,
        hydrate: hydrate.value,
    }[selectedCategory.value] as Product[]
})

const isSeries = computed<boolean>(() => selectedCategory.value === 'series')

const onProductClick = (val: Product) => {

    if (isSeries.value) {
        selectedCategory.value = val.category.slug
    } else {
        router.push('/products/' + val.slug)
    }
}

const buttonRefs: { [key: string]: any } = {
    repair: repairButtonRef,
    prevent: preventButtonRef,
    glow: glowButtonRef,
    hydrate: hydrateButtonRef,
}
const onMouseEnter = (val: Product) => {
    const slug = val.category.slug
    hovered.value = slug
    buttonRefs[slug].value.onHover()
}
const onMouseLeave = (val: Product) => {
    const slug = val.category.slug
    hovered.value = slug
    buttonRefs[slug].value.onBlur()
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
        <Button 
            ref="repairButtonRef" 
            text="Repair" 
            category="repair" 
            :selected="selectedCategory"
            @click="selectedCategory = 'repair'"
        />
        <Button 
            ref="preventButtonRef" 
            text="Prevent" 
            category="prevent" 
            :selected="selectedCategory"
            @click="selectedCategory = 'prevent'"
        />
        <Button 
            ref="glowButtonRef" 
            text="Glow" 
            category="glow" 
            :selected="selectedCategory"
            @click="selectedCategory = 'glow'"
        />
        <Button 
            ref="hydrateButtonRef" 
            text="Hydrate" 
            category="hydrate" 
            :selected="selectedCategory"
            @click="selectedCategory = 'hydrate'"
        />
    </div>
    <div class="relative flex justify-center px-10 mt-16 md:px-20 product-list-wrapper">
        <div class="grid items-center gap-10 overflow-hidden md:grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 flex-nowrap">
            <ProductCard 
                v-for="(index) in [0, 1, 2, 3]" 
                :item="data[index]" 
                :key="index" 
                :is-series="isSeries"
                :category="selectedCategory" 
                @click="onProductClick(data[index])"
                @mouseenter="onMouseEnter(data[index])"
                @mouseleave="onMouseLeave(data[index])"
            />
        </div>
    </div>
    <div class="flex items-center gap-10 px-20 mt-10">
        <div class="flex-1">
            <hr />
        </div>
        <div>
            <a href="/products" @click.prevent @click="$router.push('/products')" class="text-xl text-hydrate">See
                More</a>
        </div>
    </div>
</template>