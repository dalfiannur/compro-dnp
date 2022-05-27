<script setup lang="ts">
import { onMounted, ref } from 'vue'
// Import Components
// @ts-ignore
import SliderV2 from '../../components/Slider/SliderV2/SliderV2.vue'
// @ts-ignore
import HowToFind from '../../components/HowToFind.vue';
// @ts-ignore
import ProductBanner from './components/ProductBanner.vue';
// @ts-ignore
import ProductDescriptions from './components/ProductDescriptions.vue';
// @ts-ignore
import RelatedProductVue from '../../components/RelatedProduct.vue';
import useGetSliderV2 from '../../composable/useGetSliderV2'
import useGetQuery from "../../composable/useGetQuery";
import { Product } from "../../typings/Product";
import { useRoute } from 'vue-router';
import Loader from '../../components/Loader.vue';

const route = useRoute();
const { fetcher, data: product, isLoading } = useGetQuery<Product>('product/slug');
const { data: sliderv2 } = useGetSliderV2();

onMounted(() => {
  fetcher(route.params.slug as string)
})
</script>

<template>
  <Loader :visible="isLoading" />

  <div v-if="product">
    <ProductBanner :data="product" />
  </div>
  <div v-if="product">
    <ProductDescriptions class="text-baseColor" :data="product" />
  </div>
  <div id="banner">
    <SliderV2 :items="sliderv2" />
  </div>
  <div>
    <RelatedProductVue :item="product" />
  </div>
  <div>
    <HowToFind />
  </div>
</template>
