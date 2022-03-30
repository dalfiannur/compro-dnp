<script setup lang="ts">
interface Prop {
  data: Article
}
const { data } = defineProps<Prop>()

const LoadImages = (path: String) => {
  return "/img/" + path + ".jpg";
};
</script>

<template>
  <article
    class="overflow-hidden hover:text-emerald-400"
    style="background-color: rgb(236 237 239)"
  >
    <a :href="data.route">
      <img
        alt="Placeholder"
        class="block h-64 m-auto"
        style="width: 450px"
        :src="LoadImages(data.img)"
      />
    </a>

    <header class="flex items-center justify-between w-full h-24 p-2 leading-tight md:p-4">
      <h1 class="text-xl">
        <p class>{{ data.title }}</p>
      </h1>
    </header>

    <footer class="flex items-center justify-between p-2 leading-none md:p-4">
      <p class="ml-2 text-sm text-black hover:text-black">by {{ data.author }} - {{ data.time }}</p>
      <a class="no-underline text-emerald-400" :href="data.route">
        <span class>Read More</span>
      </a>
    </footer>
  </article>
</template>