<script setup lang="ts">
import { ref } from 'vue'
// Import Components
// @ts-ignore
import SliderV2 from '../../components/Slider/SliderV2/SliderV2.vue'
// @ts-ignore
import ProductBanner from './components/ProductBanner.vue';
import useGetSliderV2 from '../../composable/useGetSliderV2'

const { data: sliderv2 } = useGetSliderV2()
</script>

<template>
    <div>
        <ProductBanner />
    </div>
    <div>
        <h1>Product Detail</h1>
    </div>
    <div id="banner">
        <SliderV2 :items="sliderv2" />
    </div>
</template>