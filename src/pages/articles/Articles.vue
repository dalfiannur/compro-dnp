<script lang="ts" setup>
// Import Composable
import useGetFeaturedProduct from "../../composable/useGetFeaturedProduct";
import useGetTopArticles from "../../composable/useGetTopArticles";
import useGetLatestArticles from "../../composable/useGetLatestArticles";

// Import Components
import SliderV3 from "../../components/Slider/SliderV3.vue";
import HowToFind from "../../components/HowToFind.vue";
import ArticleCard from "../../components/ArticleCard.vue";


// Initial Composable
const { data: featuredProducts } = useGetFeaturedProduct();
const { data: TopArticles } = useGetTopArticles();
const { data: LatestArticles } = useGetLatestArticles();

</script>

<template>
  <div>
    <SliderV3 />
  </div>

   <div class="my-12 mx-auto p-2 md:p-4 justify-center flex">
    <div class="flex-1 justify-between p-2 md:p-6 font-din-next-lt-pro-light text-gray-1">
      <p class="text-3xl text-center md:text-left">Top Articles</p>
      <div id="article" class="grid grid-cols-1 gap-20 p-1 md:grid-cols-3">
        <ArticleCard
          v-for="(page, index) in TopArticles"
          :key="index"
          :data="page"
        />
      </div>
      <div class="flex flex-wrap justify-between w-full gap-4 p-2 sm:p-0">
        <span class="flex-1 my-auto border border-hydrate"></span>
        <a class="text-hydrate" href="#"> See More </a>
      </div>
    </div>
  </div>

  <div class="my-12 mx-auto p-2 md:p-4 justify-center flex">
    <div class="flex-1 justify-between p-2 md:p-6 font-din-next-lt-pro-light text-gray-1">
      <p class="text-3xl text-center md:text-left">Latest Articles</p>
      <div id="article" class="grid grid-cols-1 gap-20 p-1 md:grid-cols-3">
        <ArticleCard
          v-for="(page, index) in LatestArticles"
          :key="index"
          :data="page"
        />
      </div>
      <div class="flex flex-wrap justify-between w-full gap-4 p-2 sm:p-0">
        <span class="flex-1 my-auto border border-hydrate"></span>
        <button class="text-hydrate" href="#"> See More </button>
      </div>
    </div>
  </div>

  <div id="how-to-find" class="mt-20 mb-20">
    <HowToFind />
  </div>
</template>