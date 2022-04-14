<script setup lang="ts">
interface Prop {
  data: TopArticle;
}
const { data } = defineProps<Prop>();

const LoadImages = (path: String) => {
  return "/img/" + path + ".jpg";
};
</script>

<template>
  <article
    class="
      flex flex-col
      mx-auto
      my-8
      overflow-hidden
      font-din-next-lt-pro-light 
      hover:text-emerald-400
      bg-white-smoke
      grayscale
      hover:grayscale-0
      duration-200
    "
  >
    <div class="w-full h-1/2 md:h-fit sm:h-fit aspect-square md:aspect-video">
      <a :href="data.route">
        <img
          alt="Placeholder"
          class="block m-auto w-full"
          :src="LoadImages(data.img)"
        />
      </a>
    </div>
    <header class="flex flex-1 justify-between w-full p-2 leading-tight md:p-4">
      <h1 class="text-base md:text-xl sm:text-xl my-auto ms:my-0 sm:my-0">
        <p class>{{ data.title }}</p>
      </h1>
    </header>

    <footer class="flex items-end justify-between leading-none p-1 md:p-3 sm:p-4">
      <p class="text-black p-2 text-sm md:text-base sm:text-base">
        by {{ data.author }} - {{ data.time }}
      </p>
      <a class="no-underline text-emerald-400 text-center p-2" :href="data.route">
        <span class>Read More</span>
      </a>
    </footer>
  </article>
</template>