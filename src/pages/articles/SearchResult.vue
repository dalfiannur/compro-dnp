<script lang="ts" setup>
import { toRefs, ref } from 'vue'
import useGetQueries from "../../composable/useGetQueries";
import { Article } from "../../typings/Article";
import { Product } from "../../typings/Product";

type Prop = {
  hovered: number | null
}
const props = defineProps<Prop>();
const { hovered } = toRefs(props);

const { setSearch: setSearchArticle, data: articles } = useGetQueries<Article>('articles', {
  perPage: 1,
  autoFetch: false
});
const { setSearch: setSearchProduct, data: products } = useGetQueries<Product>('product', {
  perPage: 1,
  autoFetch: false
});

const search = ref<string | null>(null);

let timeout: any;
const handleSearch = (e: KeyboardEvent) => {
  if (timeout) {
    clearTimeout(timeout)
  }

  if (e.code === 'Enter') {
    if (search) {
      setSearchArticle(search.value as string);
      setSearchProduct(search.value as string);
    }
  }
  timeout = setTimeout(() => {
    if (search) {
      setSearchArticle(search.value as string);
      setSearchProduct(search.value as string);
    }
  }, 1500)
}
</script>

<template>
  <!-- Header -->
  <div
    class="flex items-center bg-banner px-8 lg:px-24 h-60 w-full justify-center md:justify-between flex-col md:flex-row gap-8">
    <h2 class="text-4xl md:text-6xl text-center md:text-left font-inter text-white w-full md:w-1/3">Search Result</h2>
    <div class="flex w-full md:w-2/3">
      <div class="relative w-full">
        <input v-model="search" type="search" placeholder="Search..."
          class="w-full bg-white h-14 focus:outline-none px-5" @keyup="handleSearch" />
        <transition name="fade">
          <div v-if="search && search.length > 3" class="absolute w-full p-5 bg-gray-300">
            <a v-if="articles[0]" :href="'/articles/' + articles[0].slug"
              @click.prevent="$router.push('/articles/' + articles[0].slug)"
              class="flex items-center justify-between pb-2 border-b-2 border-gray-400">
              <h3 class="text-gray-600">{{ articles[0].title }}</h3>
              <span class="text-sm text-hydrate">Article</span>
            </a>
            <div v-if="products[0]" class="flex items-center justify-between pt-2">
              <h3 class="text-gray-600">{{ products[0].name }}</h3>
              <a class="text-sm text-hydrate">Product</a>
            </div>
          </div>
        </transition>
      </div>
      <button :href="'/search'" @click.prevent="$router.push('/search')"
        class="flex items-center justify-center text-white w-14 h-14 bg-hydrate">
        <img src="/img/search.svg" class="w-6 h-6 ml-[0.35rem] mt-[0.15rem]" />
      </button>
    </div>
  </div>
  <!-- Content -->
  <div class="flex">
    <!-- Side -->
    <div class="h-full w-1/5 flex-nono font-questrial bg-white-smoke text-gray-500 px-16 py-16">
      <div>
        <h3 class="font-inter text-xl">
          Sort by
        </h3>
        <ul class="flex flex-col gap-2 mt-6">
          <li><a href="">Newest</a></li>
          <li><a href="">Oldest</a></li>
          <li><a href="">Most Popular</a></li>
          <li><a href="">Least Popular</a></li>
        </ul>
      </div>
      <div class="mt-12">
        <h3 class="font-inter text-xl">
          Category
        </h3>
        <ul class="flex flex-col gap-2 mt-6">
          <li><a href="">Newest</a></li>
          <li><a href="">Oldest</a></li>
          <li><a href="">Most Popular</a></li>
          <li><a href="">Least Popular</a></li>
        </ul>
      </div>
    </div>
    <!-- Search Result -->
    <div class="h-full bg-white flex-1">
      <h2>Product</h2>
    </div>

  </div>

</template>

<style scoped>
.bg-banner {
  background-image: linear-gradient(90deg,
      rgb(99 196 180) 40%,
      rgba(255, 255, 255, 0) 100%)
}
</style>