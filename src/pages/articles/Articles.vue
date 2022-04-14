<script lang="ts" setup>
import SliderV3 from "../../components/Slider/SliderV3.vue";
import HowToFind from "../../components/HowToFind.vue";
import ArticleCard from "../../components/ArticleCard.vue";
import { articles } from '../../data/articles';
</script>

<template>
  <div>
    <SliderV3 />
  </div>
  
   <div class="flex justify-center p-2 mx-auto my-12 md:p-4">
    <div class="justify-between flex-1 p-2 md:p-6 text-slate-600">
      <p class="text-3xl text-center md:text-left">Top Articles</p>
      <!-- <div class="flex flex-wrap items-center justify-between pr-0 text-xl md:pr-12 sm:pr-12">
  <div class="px-8 mx-auto my-12 md:px-12">
    <div class="flex flex-wrap justify-between py-1 md:py-3 text-slate-600">
      <p class="text-3xl">Articles</p>
      <div class="flex flex-wrap items-center justify-between text-xl">
        <a class="pr-3 hover:text-hydrate" href="#">Latest</a>
        <p class="text-2xl">|</p>
        <a class="pl-3 hover:text-hydrate" href="#">Popular</a>
      </div> -->
      <div id="article" class="grid grid-cols-1 gap-20 p-1 md:grid-cols-3">
        <ArticleCard
          v-for="(page, index) in articles"
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

  <div class="flex justify-center p-2 mx-auto my-12 md:p-4">
    <div class="justify-between flex-1 p-2 md:p-6 text-slate-600">
      <p class="text-3xl text-center md:text-left">Latest Articles</p>
      <div id="article" class="grid grid-cols-1 gap-20 p-1 md:grid-cols-3">
        <ArticleCard
          v-for="(page, index) in articles"
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

  <div id="how-to-find" class="mt-20 mb-20">
    <HowToFind />
  </div>
</template>