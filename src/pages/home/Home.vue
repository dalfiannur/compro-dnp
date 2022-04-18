<script setup lang="ts">
// Import Components
import BannerSlider from "../../components/Slider/SliderV1/SliderV1.vue";
import ProductSlider from "../../components/Slider/ProductSlider.vue";
import ProductList from "./components/ProductList";
import HowToFind from "../../components/HowToFind.vue";
import ArticleCard from "../../components/ArticleCard.vue";

// Import Composable
import useGetFeaturedProduct from "../../composable/useGetFeaturedProduct";
import useGetTopArticles from "../../composable/useGetTopArticles";
import useGetLatestArticles from "../../composable/useGetLatestArticles";

import useGetQueries from "../../composable/useGetQueries";
import { MainBanner } from "../../typings/MainBanner";
import ArticleSection from "./components/ArticleSection.vue";

// Initial Composable
const { data: featuredProducts } = useGetFeaturedProduct();
const { data: TopArticles } = useGetTopArticles();
const { data: LatestArticles } = useGetLatestArticles();

// Initial Composable
const { data: mainBanners } = useGetQueries<MainBanner>('main-banners');
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

  <ArticleSection />
</template>