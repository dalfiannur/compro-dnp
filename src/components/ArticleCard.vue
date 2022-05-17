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
    class="flex flex-col mx-auto overflow-hidden duration-200 text-gray-500 hover:text-emerald-400 grayscale hover:grayscale-0"
    style="background-color: rgb(236 237 239)">
    <div class="w-full h-1/2 md:h-fit sm:h-fit aspect-square md:aspect-video">
      <a :href="createLink()">
        <img alt="Placeholder" class="block w-full m-auto" :src="data.thumbnailUrl" />
      </a>
    </div>
    <header class="flex justify-between flex-1 w-full p-2 leading-tight md:p-4">
      <h1 class="my-auto text-base md:text-2xl ms:my-0 sm:text-lg sm:my-0">
        <p class="px-3">{{ data.title }}</p>
      </h1>
    </header>

    <footer class="flex items-end justify-between p-1 leading-none md:p-3 sm:p-4">
      <p class="p-2 px-3 text-xs md:text-sm sm:text-sm">
        by {{ data.user.name }} -
        {{ new Date(data.createdAt).toLocaleDateString("ID-id") }}
      </p>
      <a class="p-2 px-3 text-center no-underline text-emerald-400" :href="createLink()">
        <span class>Read More</span>
      </a>
    </footer>
  </article>
</template>
