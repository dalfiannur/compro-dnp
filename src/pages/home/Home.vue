<script setup lang="ts">
// Import Components
import BannerSlider from "../../components/Slider/SliderV1/SliderV1.vue";
import ProductSlider from "../../components/Slider/ProductSlider.vue";
import ProductList from "./components/ProductList.vue";
import HowToFind from "../../components/HowToFind.vue";
import ArticleCard from "../../components/ArticleCard.vue";

// Import Composable
import useGetFeaturedProduct from "../../composable/useGetFeaturedProduct";
import useGetMainBanners from "../../composable/useGetMainBanners";
import useGetArticles from "../../composable/useGetArticles";
import useGetQueries from "../../composable/useGetQueries";
import { MainBanner } from "../../typings/MainBanner";

// Initial Composable
const { data: featuredProducts } = useGetFeaturedProduct();
// const { data: mainBanners } = useGetMainBanners();
const { data: mainBanners } = useGetQueries<MainBanner>('main-banners');
const { data: articles } = useGetArticles();
</script>

<template>
  <div id="banner" class="hidden md:block">
    <BannerSlider :items="mainBanners" />
  </div>

  <div id="product-slider" class="pt-10 md:pt-0">
    <ProductSlider :items="featuredProducts" />
  </div>
  <div id="product-list" class="mt-20">
    <ProductList />
  </div>
  <div id="how-to-find" class="mt-20 mb-20">
    <HowToFind />
  </div>

  <div class="px-8 mx-auto my-12 md:px-12">
    <div class="flex flex-wrap justify-between py-1 md:py-3 text-slate-600">
      <p class="text-3xl">Articles</p>
      <div class="flex flex-wrap items-center justify-between text-xl">
        <a class="pr-3 hover:text-hydrate" href="#">Latest</a>
        <p class="text-2xl">|</p>
        <a class="pl-3 hover:text-hydrate" href="#">Popular</a>
      </div>
      <div id="article" class="grid grid-cols-1 gap-10 px-5 md:px-20 md:grid-cols-3">
        <ArticleCard v-for="(page, index) in articles" :key="index" :data="page"/>
      </div>
    </div>
  </div>
</template>