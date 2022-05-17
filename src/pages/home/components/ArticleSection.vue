<script lang="ts" setup>
import { ref } from "vue";
import ArticleCard from "../../../components/ArticleCard.vue";
import useGetQueries from "../../../composable/useGetQueries";
import { Article } from "../../../typings/Article";

const sortBy = ref<string>("latest");

const query = new URLSearchParams();
const { data: articles } = useGetQueries<Article>("articles", {
  perPage: 6,
  query,
  autoFetch: true
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
</script>

<template>
  <div class="flex justify-center p-2 mx-auto mb-12 md:p-4">
    <div class="justify-between flex-1 p-2 md:p-6 text-slate-600">
      <div class="md:flex md:flex-wrap justify-center md:justify-between py-1 md:py-3 text-slate-600">
        <p class="text-3xl font-inter pb-4 md:pb-0 text-center">Articles</p>
        <div class="flex flex-wrap items-center justify-center md:justify-between text-xl font-questrial">
          <a
            class="pr-0 md:pr-3 hover:text-hydrate"
            href="#"
            @click.prevent="sortLatest"
            :class="{ 'text-hydrate': sortBy === 'latest' }"
          >
            Latest
          </a>
          <p class="px-4 text-2xl">|</p>
          <a
            class="pl-0 md:pl-3 hover:text-hydrate"
            href="#"
            @click.prevent="sortPopular"
            :class="{ 'text-hydrate': sortBy === 'popular' }"
            >Popular</a
          >
        </div>
      </div>

      <div class="grid grid-cols-1 gap-20 p-1 py-8 md:grid-cols-3">
        <ArticleCard v-for="(page, index) in articles" :key="index" :data="page" />
      </div>
      <div class="flex flex-wrap justify-between w-full gap-4 p-2 sm:p-0">
        <span class="flex-1 my-auto border border-hydrate"></span>
        <a
          href="/articles"
          @click.prevent="$router.push('/articles')"
          class="text-hydrate"
        >
          See More
        </a>
      </div>
    </div>
  </div>
</template>
