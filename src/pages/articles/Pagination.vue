<script lang="ts" setup>
import useGetArticlePagination from "../../composable/useGetArticlePagination";

// Import Components
import SliderV3 from "../../components/Slider/SliderV3.vue";
import HowToFind from "../../components/HowToFind.vue";
import ArticleCard from "../../components/ArticleCard.vue";

const { data: ArticlePagination } = useGetArticlePagination();
</script>

<template>
  <div>
<!--    <SliderV3 />-->
  </div>

  <div class="my-12 mx-auto p-2 md:p-4 justify-center flex">
    <div class="flex-1 justify-between p-2 md:p-6 font-din-next-lt-pro-light text-gray-1">
      <div class="flex flex-1 justify-center text-3xl">
        <a class="pr-5 hover:text-hydrate" href="/#">Latest</a>
        <p class="">|</p>
        <a class="pl-5 hover:text-hydrate" href="/#">Popular</a>
      </div>
      <div id="article" class="grid grid-cols-1 gap-20 p-1 md:grid-cols-3">
<!--        <ArticleCard-->
<!--          v-for="(page, index) in ArticlePagination"-->
<!--          :key="index"-->
<!--          :data="page"-->
<!--        />-->
      </div>
    </div>
  </div>

  <footer class="bg-hydrate w-full h-[150px]">
    <div class="flex flex-wrap justify-between gap-4 px-12">
      <span class="flex-1 my-auto border-[1.5px] bg-white border-white hidden md:block"></span>
      <div class="m-0">
        <button class="text-white w-8 h-8 pr-4 text-lg" data-v-4e44e668> &lt; </button>
        <button class="border-2 w-8 h-8 m-1 sm:m-2 text-white" href="#"> 1 </button>
        <button class="border-2 w-8 h-8 m-1 sm:m-2 text-white" href="#"> 2 </button>
        <button class="border-2 w-8 h-8 m-1 sm:m-2 text-white" href="#"> 3 </button>
        <button class="border-2 w-8 h-8 m-1 sm:m-2 text-white" href="#"> 4 </button>
        <button class="border-2 w-8 h-8 m-1 sm:m-2 text-white" href="#"> 5 </button>
        <button class="text-white w-8 h-8 pl-4 text-lg" data-v-4e44e668> &gt; </button>
      </div>
    </div>
  </footer>

  <div id="how-to-find" class="">
    <HowToFind />
  </div>
</template>
