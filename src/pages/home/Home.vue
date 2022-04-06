<script setup lang="ts">
import { ref } from 'vue'
// Import Components
import BannerSlider from '../../components/Slider/SliderV1/SliderV1.vue'
import ProductSlider from '../../components/Slider/ProductSlider.vue'
import ProductList from './components/ProductList.vue'
import HowToFind from '../../components/HowToFind.vue'
import ArticleCard from '../../components/ArticleCard.vue'

// Import Composable
import useGetFeaturedProduct from '../../composable/useGetFeaturedProduct'
import useGetMainBanners from '../../composable/useGetMainBanners'
import useGetArticles from '../../composable/useGetArticles'


// Initial Composable
const { data: featuredProducts } = useGetFeaturedProduct()
const { data: mainBanners } = useGetMainBanners()
const { data: articles } = useGetArticles()
</script>

<template>
    <div id="banner">
        <BannerSlider :items="mainBanners" />
    </div>

    <div id="product-slider">
        <ProductSlider :items="featuredProducts" />
    </div>
    <div id="product-list" class="mt-20">
        <ProductList />
    </div>
    <div id="how-to-find" class="mt-20 mb-20">
        <HowToFind />
    </div>

<div class="my-12 mx-auto px-8 md:px-12">
    <div class="flex flex-wrap justify-between py-1 md:py-3 text-slate-600">
      <p class="text-3xl">Articles</p>
      <div class="flex flex-wrap justify-between items-center text-xl">
        <a class="pr-3 hover:text-hydrate" href="#">Latest</a>
        <p class="text-2xl">|</p>
        <a class="pl-3 hover:text-hydrate" href="#">Popular</a>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-3 mx-4 lg:-mx-4">
        <ArticleCard v-for="(page, index) in articles"
        :key="index" :data="page"/>
    </div>
  </div>
</template>