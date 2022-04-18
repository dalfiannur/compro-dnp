<script lang="ts" setup>
// Import Components
import SliderV3 from "../../components/Slider/SliderV3.vue";
import HowToFind from "../../components/HowToFind.vue";
import ArticleCard from "../../components/ArticleCard.vue";
import useGetQueries from "../../composable/useGetQueries";
import { Article } from "../../typings/Article";


// Initial Composable
const { data: featured } = useGetQueries<Article>('articles');
const { data: TopArticles } = useGetQueries<Article>('articles');
const { data: LatestArticles } =useGetQueries<Article>('articles');

</script>

<template>
  <div>
    <SliderV3 :data="featured" />
  </div>

   <div class="flex justify-center p-2 mx-auto my-12 md:p-4">
    <div class="justify-between flex-1 p-2 md:p-6 font-din-next-lt-pro-light text-gray-1">
      <p class="text-3xl text-center md:text-left">Top Articles</p>
      <div id="article" class="grid grid-cols-1 gap-20 p-1 md:grid-cols-3">
        <ArticleCard
          v-for="(page, index) in TopArticles"
          :key="page.slug"
          :data="page"
        />
      </div>
      <div class="flex flex-wrap justify-between w-full gap-4 p-2 sm:p-0">
        <span class="flex-1 my-auto border border-hydrate"></span>
        <a class="text-hydrate" href="#"> See More </a>
      </div>
    </div>
  </div>

  <div class="flex justify-center p-2 mx-auto my-12 md:p-4">
    <div class="justify-between flex-1 p-2 md:p-6 font-din-next-lt-pro-light text-gray-1">
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