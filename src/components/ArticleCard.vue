<script setup lang="ts">
import { Article } from "../typings/Article";

interface Prop {
  data: Article;
}
const { data } = defineProps<Prop>();

const createLink = () => {
  return "/articles/" + data.slug;
};
</script>

<template>
  <article
    class="articles flex flex-col mx-auto overflow-hidden duration-200 hover:text-emerald-400"
    style="background-color: rgb(236 237 239)">
    <div class="images w-full h-full md:h-fit sm:h-fit aspect-video">
      <a :href="createLink()">
        <img alt="Placeholder" class="block object-cover w-full m-auto" :src="data.thumbnailUrl" />
      </a>
    </div>
    <header class="flex justify-between w-full p-2 leading-tight md:p-4">
      <h1 class="my-auto text-base md:text-2xl ms:my-0 sm:text-lg sm:my-0">
        <p class="px-3 font-questrial">{{ data.title }}</p>
      </h1>
    </header>

    <footer class="flex flex-grow items-end justify-between p-1 mx-2 leading-none md:p-3 sm:p-4">
      <p class="p-2 text-gray-1 font-questrial md:text-lg sm:text-sm">
        by {{ data.user.name }} -
        {{ new Date(data.createdAt).toLocaleDateString("ID-id") }}
      </p>
      <a class="p-2 text-center no-underline font-questrial text-hydrate lg:text-lg sm:text-sm" :href="createLink()">
        <span>Read More</span>
      </a>
    </footer>
  </article>
</template>

<style scoped>
.articles .images a img {
  filter: grayscale(1);
  transition: .5s;
}
.articles:hover .images a img {
  filter: grayscale(0);
  transition: .5s;
}
</style>