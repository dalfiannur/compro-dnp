<script setup lang="ts">
import { ref } from "vue";

const Article = ref<any[]>([
  {
    img: "bg-1",
    title: "Pori-pori Wajahmu Membesar? Ikuti Cara ini untuk Mengecilkannya",
    author: "Dr. Devina",
    time: "22/02/2022",
    route: "#",
  },
  {
    img: "bg-2",
    title: "5 Kandungan Skincare untuk Kulit Sehat dan Glowing",
    author: "Dr. Eri",
    time: "19/02/2022",
    route: "#",
  },
  {
    img: "bg-3",
    title: "Bahaya Skincare Share in Jar, Hindari Memakai Produk ini",
    author: "Dr. David",
    time: "",
    route: "#",
  },
  {
    img: "bg-2",
    title: "Hindari Memakai Produk ini",
    author: "Dr. Rovy",
    time: "",
    route: "#",
  },
]);

const LoadImages = (path: String) => {
  return "/img/" + path + ".jpg";
};
</script>

<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- Column -->
      <div
        class="my-1 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
        v-for="(page, index) in Article"
        :key="index"
      >
        <!-- Article -->
        <article
          class="overflow-hidden hover:text-emerald-400"
          style="background-color: rgb(236 237 239)"
        >
          <a :href="page.route">
            <img
              alt="Placeholder"
              class="block h-64 m-auto"
              style="width: 450px"
              :src="LoadImages(page.img)"
            />
          </a>

          <header
            class="flex items-center justify-between leading-tight p-2 md:p-4 w-full h-24"
          >
            <h1 class="text-xl">
              <p class="">
                {{ page.title }}
              </p>
            </h1>
          </header>

          <footer
            class="flex items-center justify-between leading-none p-2 md:p-4"
          >
            <p class="ml-2 text-sm text-black hover:text-black">by {{ page.author }} - {{ page.time }}</p>
            <a
              class="no-underline text-emerald-400"
              :href="page.route"
            >
              <span class="">Read More</span>
            </a>
          </footer>
        </article>
        <!-- END Article -->
      </div>
      <!-- END Column -->
    </div>
  </div>
</template>