<script setup lang="ts">
import { ref } from 'vue'
// Import Components
// @ts-ignore
import SliderV2 from '../../components/Slider/SliderV2/SliderV2.vue'
// @ts-ignore
import HowToFind from '../../components/HowToFind.vue';
// @ts-ignore
import ProductBanner from './components/ProductBanner.vue';
import ProductDescriptions from './components/ProductDescriptions.vue';
import useGetSliderV2 from '../../composable/useGetSliderV2'
import useGetFeaturedProduct from '../../composable/useGetFeaturedProduct';

const { data: sliderv2 } = useGetSliderV2()
const { data: featuredProducts } = useGetFeaturedProduct();

</script>

<template>
    <div>
        <ProductBanner :item="featuredProducts" />
    </div>
    <div>
        <ProductDescriptions />
    </div>
    <div id="banner">
        <SliderV2 :items="sliderv2" />
    </div>
    <div>
        <HowToFind />
    </div>
</template>