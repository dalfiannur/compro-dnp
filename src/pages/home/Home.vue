<script setup lang="ts">
// Import Components

// Import Composable
import useGetFeaturedProduct from "../../composable/useGetFeaturedProduct";
import useGetMainBanners from "../../composable/useGetMainBanners";
import useGetTopArticles from "../../composable/useGetTopArticles";
import useGetLatestArticles from "../../composable/useGetLatestArticles";

// Initial Composable
const { data: featuredProducts } = useGetFeaturedProduct();
const { data: mainBanners } = useGetMainBanners();
const { data: TopArticles } = useGetTopArticles();
const { data: LatestArticles } = useGetLatestArticles();

// Initial Composable

//const { data: mainBanners } = useGetQueries<MainBanner>('main-banners');

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

  <div class="my-12 mx-auto p-2 md:p-4 justify-center flex">
    <div class="flex-1 justify-between p-2 md:p-6 text-slate-600">
      <p class="text-3xl text-center md:text-left">Top Articles</p>
      <!-- <div class="flex flex-wrap justify-between items-center text-xl pr-0 md:pr-12 sm:pr-12">
  <div class="px-8 mx-auto my-12 md:px-12">
    <div class="flex flex-wrap justify-between py-1 md:py-3 text-slate-600">
      <p class="text-3xl">Articles</p>
      <div class="flex flex-wrap items-center justify-between text-xl">
        <a class="pr-3 hover:text-hydrate" href="#">Latest</a>
        <p class="text-2xl">|</p>
        <a class="pl-3 hover:text-hydrate" href="#">Popular</a>
      </div> -->
      <div id="article" class="grid grid-cols-1 gap-20 md:grid-cols-3 p-1">
        <ArticleCard
          v-for="(page, index) in TopArticles"
          :key="index"
          :data="page"
        />
      </div>
      <div class="flex flex-wrap gap-4 justify-between w-full p-2 sm:p-0">
        <span class="border flex-1 border-hydrate my-auto"></span>
        <a class="text-hydrate" href="#"> See More </a>
      </div>
    </div>
  </div>

  <div class="my-12 mx-auto p-2 md:p-4 justify-center flex">
    <div class="flex-1 justify-between p-2 md:p-6 text-slate-600">
      <p class="text-3xl text-center md:text-left">Latest Articles</p>
      <div id="article" class="grid grid-cols-1 gap-20 md:grid-cols-3 p-1">
        <ArticleCard
          v-for="(page, index) in LatestArticles"
          :key="index"
          :data="page"
        />
      </div>
      <div class="flex flex-wrap gap-4 justify-between w-full p-2 sm:p-0">
        <span class="border flex-1 border-hydrate my-auto"></span>
        <a class="text-hydrate" href="#"> See More </a>
      </div>
    </div>
  </div>
</template>