<script lang="ts" setup>
import { toRefs, ref } from 'vue'
import useGetQueries from "../../composable/useGetQueries";
import { Article } from "../../typings/Article";
import { Product } from "../../typings/Product";
import ArticleSection from "../home/components/ArticleSection.vue";
import SearchResultArticle from "../../components/SearchResultArticle.vue";
import SearchResultProduct from "../../components/SearchResultProduct.vue"

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
    class="flex items-center bg-banner px-10 lg:px-20 h-60 w-full justify-center md:justify-between flex-col md:flex-row gap-8">
    <h2 class="text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-inter text-white w-full md:w-[40%]">Search Results
    </h2>
    <div class="flex w-full md:w-[60%]">
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
  <div class="h-full flex flex-col md:flex-row bg-white-smoke">
    <!-- Sidebar -->
    <div class="h-full w-full md:w-[25%] lg:w-[30%] flex flex-row md:flex-col justify-center gap-12 font-questrial text-gray-1 p-8 md:p-10 lg:p-20">
      <div>
        <h3 class="font-inter text-2xl">
          Sort by
        </h3>
        <ul class="flex flex-col text-center md:text-left gap-2 mt-6">
          <li><a href="">Newest</a></li>
          <li><a href="">Oldest</a></li>
          <li><a href="">Most Popular</a></li>
          <li><a href="">Least Popular</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-inter text-2xl">
          Category
        </h3>
        <ul class="flex flex-col text-center md:text-left gap-2 mt-6">
          <li><a href="">Newest</a></li>
          <li><a href="">Oldest</a></li>
          <li><a href="">Most Popular</a></li>
          <li><a href="">Least Popular</a></li>
        </ul>
      </div>
    </div>
    <!-- Search Result -->
    <div class="h-full flex-1 ">
      <div class="bg-white p-8 md:p-10 lg:p-20">
        <h2 class="text-2xl text-hydrate font-inter">Product</h2>
        <SearchResultProduct />
        <SearchResultProduct />
      </div>
      <div class="bg-gray-50 p-8 md:p-16 lg:p-20">
        <h2 class="text-2xl text-hydrate font-inter">Articles</h2>
        <SearchResultArticle />
      </div>
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