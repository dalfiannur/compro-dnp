<script lang="ts" setup>
import { ref, watch } from "vue";

// Import Composable
// import useGetFeaturedProduct from "../../composable/useGetFeaturedProduct";
import useGetArticlePagination from "../../composable/useGetArticlePagination";
import { Article } from "../../typings/Article";

// Import Components
import SliderV3 from "../../components/Slider/SliderV3.vue";
import HowToFind from "../../components/HowToFind.vue";
import ArticleCard from "../../components/ArticleCard.vue";
import useGetQueries from "../../composable/useGetQueries";
import { usePaginator } from '../../hooks/use-paginator';

const { data: ArticlePagination } = useGetArticlePagination();

const sortBy = ref<string>("latest");

const query = new URLSearchParams();
const { pages, data: articles, fetcher, setPage: setPageQuery } = useGetQueries<Article>("articles", {
  autoFetch: true,
  perPage: 9,
  query,
});
const { data: featured } = useGetQueries<Article>('articles', {
  autoFetch: true,
  perPage: 3
});
const { data: TopArticles } = useGetQueries<Article>('articles', {
  autoFetch: true,
  perPage: 9,
  query,
});
const { data: LatestArticles } = useGetQueries<Article>('articles', {
  autoFetch: true,
  perPage: 9,
  query,
});

const sortPopular = () => {
  sortBy.value = "popular";
  query.set("sortBy", "createdAt");
  query.set("asc", "true");
};

const sortLatest = () => {
  sortBy.value = "latest";
  query.set("sortBy", "createdAt");
  query.set("asc", "false");
};

const { range, currentPage, setPage, onNext, onPrev, setTotal } = usePaginator({})

watch(pages, (total) => {
  setTotal(total);
})

watch(currentPage, (page) => {
  setPageQuery(page);
  fetcher()
})

</script>

<template>
  <div>
    <SliderV3 :data="articles" />
  </div>

  <div class="my-12 mx-auto p-2 md:p-4 justify-center flex">
    <div class="flex-1 justify-between p-2 md:p-6 text-gray-1">
      <div class="flex flex-wrap justify-center text-2xl font-questrial">
        <a class="pr-3 hover:text-hydrate" href="#" @click.prevent="sortLatest"
          :class="{ 'text-hydrate': sortBy === 'latest' }">
          Latest
        </a>
        <p class="px-8 text-2xl">|</p>
        <a class="pl-3 hover:text-hydrate" href="#" @click.prevent="sortPopular"
          :class="{ 'text-hydrate': sortBy === 'popular' }">Popular</a>
      </div>

      <div id="article" class="grid grid-cols-1 gap-20 p-1 md:grid-cols-3 mt-5">
        <ArticleCard v-for="article in articles" :key="article.slug" :data="article" />
      </div>
      
    </div>
  </div>

  <!-- Pagination -->
  <div class="bg-hydrate w-full h-[150px] items-center">
    <div class="flex flex-wrap justify-between h-full items-center gap-4 px-12">
      <span class="
          flex-1
          my-auto
          border-[1.5px]
          bg-white
          border-white
          hidden
          md:block
        "></span>
      <div class="m-0">
        <button class="text-white w-8 h-8 text-lg text-center" @click="onPrev">
          &#60;
        </button>

        <button v-for="page in range" :key="page" class="text-white w-8 h-8 text-lg text-center" :disabled="currentPage === page"
          :class="{ 'underline text-xl font-bold': page === currentPage }" @click="setPage(page)">
          {{ page === 'dots' ? '...' : page }}
        </button>

        <button class="text-white w-8 h-8 text-lg text-center" @click="onNext">
          &gt;
        </button>
      </div>
    </div>
  </div>

  <div id="how-to-find" class="">
    <HowToFind />
  </div>
</template>
