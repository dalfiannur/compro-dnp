<script setup lang="ts">
import { computed, onMounted } from 'vue';
import HowToFind from '../../components/HowToFind.vue'
import useGetQuery from "../../composable/useGetQuery";
import { Article } from "../../typings/Article";
import { useRoute } from 'vue-router'

const route = useRoute();
const { fetcher, data } = useGetQuery<Article>('articles');
const tags = computed(() => data.value ? data.value.tags.map((item) => '#' + item.name).join(' - ') : '');

onMounted(() => {
  const slug = location.pathname.split('articles/')[1] || '';
  fetcher(slug)
});

const generateDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  };
  return Intl.DateTimeFormat('ID-id', options).format(date);
}
</script>

<template>
  <div v-if="data" class="flex justify-center">
    <div class="flex-1 max-w-screen-xl">
      <div class="pt-10 text-center font-questrial">
        <h1>Published {{ generateDate(data.createdAt) }} - by {{ data.user.name }}</h1>
      </div>
      <div class="pt-5 font-questrial text-hydrate text-xl md:text-6xl text-center">
        <h2>{{ data.title }}</h2>
      </div>
      <div class="pt-10 font-questrial tracking-[10px] text-center text-hydrate">
        <p class="uppercase">{{ tags }}</p>
      </div>

      <div class="mt-[50px]">
        <img :src="data.thumbnailUrl" class="w-full aspect-[16/9] object-cover" />
      </div>
      <div class="pt-10 flex justify-center">
        <div class="flex-1 max-w-screen-lg">
          <div class="pt-5 text-justify" v-html="data.content" />
        </div>
      </div>
      <div class="pt-10 flex gap-5 justify-center items-center">
        <h6 class="flex justify-center md:justify-start font-questrial">Share this article</h6>
        <div class="flex gap-2">
          <a href="#!" type="button"
            class="leading-normal text-black uppercase transition duration-150 ease-in-out border-2 border-black rounded-full hover:border-gray-300 hover:bg-opacity-5 focus:outline-none focus:ring-0 w-9 h-9">
            <img src="/img/facebook.svg" />
          </a>

          <a href="#!" type="button"
            class="leading-normal uppercase transition duration-150 ease-in-out border-2 border-black rounded-full hover:border-gray-300 hover:bg-opacity-5 focus:outline-none focus:ring-0 w-9 h-9">
            <img src="/img/instagram.svg" />
          </a>

          <a href="#!" type="button"
            class="leading-normal uppercase transition duration-150 ease-in-out border-2 border-black rounded-full hover:border-gray-300 hover:bg-opacity-5 focus:outline-none focus:ring-0 w-9 h-9">
            <img src="/img/twitter.svg" />
          </a>

          <a href="#!" type="button"
            class="leading-normal uppercase transition duration-150 ease-in-out border-2 border-black rounded-full hover:border-gray-300 hover:bg-opacity-5 focus:outline-none focus:ring-0 w-9 h-9">
            <img src="/img/youtube.svg" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div id="how-to-find" class="mt-20 mb-20">
    <HowToFind />
  </div>
</template>
