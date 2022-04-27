<script setup lang="ts">
  import {onMounted, ref} from 'vue'
  // Import Components
  // @ts-ignore
  import SliderV2 from '../../components/Slider/SliderV2/SliderV2.vue'
  // @ts-ignore
  import HowToFind from '../../components/HowToFind.vue';
  // @ts-ignore
  import ProductBanner from './components/ProductBanner.vue';
  import ProductDescriptions from './components/ProductDescriptions.vue';
  import useGetSliderV2 from '../../composable/useGetSliderV2'
  import useGetQuery from "../../composable/useGetQuery";
  import {Product} from "../../typings/Product";
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const {fetcher, data: product} = useGetQuery<Product>('product');
  const {data: sliderv2} = useGetSliderV2();

  onMounted(() => {
    fetcher(route.params.slug as string)
  })
</script>

<template>
  <div>
    <ProductBanner :data="product"/>
  </div>
  <div>
    <ProductDescriptions :data="product"/>
  </div>
  <div id="banner">
    <SliderV2 :items="sliderv2"/>
  </div>
  <div>
    <HowToFind/>
  </div>
</template>
