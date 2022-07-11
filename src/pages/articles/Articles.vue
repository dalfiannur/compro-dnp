<script lang="ts" setup>
// Import Components
import SliderV3 from "../../components/Slider/SliderV3.vue";
import HowToFind from "../../components/HowToFind.vue";
import ArticleCard from "../../components/ArticleCard.vue";
import useGetQueries from "../../composable/useGetQueries";
import { Article } from "../../typings/Article";


// Initial Composable
const { data: featured } = useGetQueries<Article>('articles', {
  autoFetch: true,
  perPage: 3
});
const { data: TopArticles } = useGetQueries<Article>('articles', {
  autoFetch: true,
  perPage: 3
});
const { data: LatestArticles } = useGetQueries<Article>('articles', {
  autoFetch: true,
  perPage: 3
});

</script>

<template>
  <div>
    <SliderV3 :data="featured" />
  </div>

   <div class="flex justify-center p-2 mx-auto my-12 md:p-4">
    <div class="justify-between flex-1 p-2 md:p-6 font-din-next-lt-pro-light text-gray-1">
      <p class="text-3xl text-center md:text-left mb-6">Top Articles</p>
      <div class="grid grid-cols-1 gap-20 p-1 md:grid-cols-3">
        <ArticleCard
          v-for="page in TopArticles"
          :key="page.slug"
          :data="page"
        />
      </div>
      <div class="flex flex-wrap justify-between w-full mt-6 p-2 sm:p-0">
        <span class="flex-1 my-auto border border-hydrate"></span>
        <a class="text-hydrate text-lg border-0 p-1 shadow-md px-5 hover:border-4 hover:shadow-none hover:border-hydrate active:bg-hydrate active:text-white" href="/article-pagination"> See More </a>
      </div>
    </div>
  </div>

  <div class="flex justify-center p-2 mx-auto my-12 md:p-4">
    <div class="justify-between flex-1 p-2 md:p-6 font-din-next-lt-pro-light text-gray-1">
      <p class="text-3xl text-center md:text-left mb-6">Latest Articles</p>
      <div class="grid grid-cols-1 gap-20 p-1 md:grid-cols-3">
        <ArticleCard
          v-for="page in LatestArticles"
          :key="page.createdAt"
          :data="page"
        />
      </div>
      <div class="flex flex-wrap justify-between w-full mt-6 p-2 sm:p-0">
        <span class="flex-1 my-auto border border-hydrate"></span>
        <a class="text-hydrate text-lg border-0 p-1 shadow-md px-5 hover:border-4 hover:shadow-none hover:border-hydrate active:bg-hydrate active:text-white" href="/article-pagination"> See More </a>
      </div>
    </div>
  </div>

  <div id="how-to-find" class="mb-20">
    <HowToFind />
  </div>
</template>
