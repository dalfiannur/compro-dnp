<script lang="ts" setup>
import { ref } from "vue";

// Import Composable
import useGetFeaturedProduct from "../../composable/useGetFeaturedProduct";
import useGetArticlePagination from "../../composable/useGetArticlePagination";

// Import Components
import SliderV3 from "../../components/Slider/SliderV3.vue";
import HowToFind from "../../components/HowToFind.vue";
import ArticleCard from "../../components/ArticleCard.vue";
import useGetQueries from "../../composable/useGetQueries";
import { Article } from "../../typings/Article";

// Initial Composable
const { data: featuredProducts } = useGetFeaturedProduct();
const { data: ArticlePagination } = useGetArticlePagination();

const sortBy = ref<string>("latest");

const query = new URLSearchParams();
const { data: articles } = useGetQueries<Article>("articles", {
  perPage: 3,
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
</script>

<template>
  <div>
    <SliderV3 />
  </div>

  <div class="my-12 mx-auto p-2 md:p-4 justify-center flex">
    <div class="flex-1 justify-between p-2 md:p-6 text-gray-1">
      <div class="flex flex-wrap justify-center text-2xl font-questrial">
        <a
          class="pr-3 hover:text-hydrate"
          href="#"
          @click.prevent="sortLatest"
          :class="{ 'text-hydrate': sortBy === 'latest' }"
        >
          Latest
        </a>
        <p class="px-8 text-2xl">|</p>
        <a
          class="pl-3 hover:text-hydrate"
          href="#"
          @click.prevent="sortPopular"
          :class="{ 'text-hydrate': sortBy === 'popular' }"
          >Popular</a
        >
      </div>

      <div id="article" class="grid grid-cols-1 gap-20 p-1 md:grid-cols-3">
        <ArticleCard
          v-for="(page, index) in ArticlePagination"
          :key="index"
          :data="page"
        />
      </div>
    </div>
  </div>

  <div class="bg-hydrate w-full h-[150px] items-center">
    <div class="flex flex-wrap justify-between h-full items-center gap-4 px-12">
      <span
        class="
          flex-1
          my-auto
          border-[1.5px]
          bg-white
          border-white
          hidden
          md:block
        "
      ></span>
      <div class="m-0">
        <button class="text-white w-8 h-8 pr-4 text-lg" data-v-4e44e668>
          &lt;
        </button>
        <button class="border-2 w-8 h-8 m-1 sm:m-2 text-white" href="#">
          1
        </button>
        <button class="border-2 w-8 h-8 m-1 sm:m-2 text-white" href="#">
          2
        </button>
        <button class="border-2 w-8 h-8 m-1 sm:m-2 text-white" href="#">
          3
        </button>
        <button class="border-2 w-8 h-8 m-1 sm:m-2 text-white" href="#">
          4
        </button>
        <button class="border-2 w-8 h-8 m-1 sm:m-2 text-white" href="#">
          5
        </button>
        <button class="text-white w-8 h-8 pl-4 text-lg" data-v-4e44e668>
          &gt;
        </button>
      </div>
    </div>
  </div>

  <div class="py-4">
    <div class="w-full h-[70px] items-center">
      <div class="flex flex-wrap justify-between h-full items-center gap-4 px-12">
        <p class="text-xl text-repair">R E P A I R</p>
        <p class="text-repair w-8 h-8 pl-2 text-2xl md:text-3xl" data-v-4e44e668>
          &#709;
        </p>
        <span class=" flex-1 my-auto border-[1px] bg-repair border-repair"></span>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-10 overflow-hidden p-1 md:grid-cols-4 justify-between items-center">
      
      <div class="w-full grayscale hover:grayscale-0">
        <img class="block p-4 m-auto aspect-square md:aspect-video" src="../../../public/img/bottle_box.png">
        <p class="text-repair text-center">Refined Night Serum</p>
      </div>

      <div class="w-full grayscale hover:grayscale-0">
        <img class="block p-4 m-auto aspect-square md:aspect-video" src="../../../public/img/bottle_box.png">
        <p class="text-repair text-center">Skin Tranquility</p>
      </div>

    </div>

  </div>

  <div class="py-4">
    <div class="w-full h-[70px] items-center">
      <div class="flex flex-wrap justify-between h-full items-center gap-4 px-12">
        <p class="text-xl text-prevent">P R E V E N T</p>
        <p class="text-prevent w-8 h-8 pl-2 text-2xl md:text-3xl" data-v-4e44e668>
          &#709;
        </p>
        <span class=" flex-1 my-auto border-[1px] bg-prevent border-prevent"></span>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-10 overflow-hidden p-1 md:grid-cols-4 justify-between items-center">
      
      <div class="w-full grayscale hover:grayscale-0">
        <img class="block p-4 m-auto aspect-square md:aspect-video" src="../../../public/img/bottle_box.png">
        <p class="text-prevent text-center">Refined Night Serum</p>
      </div>
      
      <div class="w-full grayscale hover:grayscale-0">
        <img class="block p-4 m-auto aspect-square md:aspect-video" src="../../../public/img/bottle_box.png">
        <p class="text-prevent text-center">Skin Tranquility</p>
      </div>

    </div>

  </div>

  <div class="py-4">
    <div class="w-full h-[70px] items-center">
      <div class="flex flex-wrap justify-between h-full items-center gap-4 px-12">
        <p class="text-xl text-glow">G L O W</p>
        <p class="text-glow w-8 h-8 pl-2 text-2xl md:text-3xl" data-v-4e44e668>
          &#709;
        </p>
        <span class=" flex-1 my-auto border-[1px] bg-glow border-glow"></span>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-10 overflow-hidden p-1 md:grid-cols-4 justify-between items-center">
      
      <div class="w-full grayscale hover:grayscale-0">
        <img class="block p-4 m-auto aspect-square md:aspect-video" src="../../../public/img/bottle_box.png">
        <p class="text-glow text-center">Refined Night Serum</p>
      </div>
      
      <div class="w-full grayscale hover:grayscale-0">
        <img class="block p-4 m-auto aspect-square md:aspect-video" src="../../../public/img/bottle_box.png">
        <p class="text-glow text-center">Skin Tranquility</p>
      </div>

    </div>

  </div>

    <div class="py-4">
    <div class="w-full h-[70px] items-center">
      <div class="flex flex-wrap justify-between h-full items-center gap-4 px-12">
        <p class="text-xl text-hydrate">H Y D R A T E</p>
        <p class="text-hydrate w-8 h-8 pl-2 text-2xl md:text-3xl" data-v-4e44e668>
          &#709;
        </p>
        <span class=" flex-1 my-auto border-[1px] bg-hydrate border-hydrate"></span>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-10  overflow-hidden p-1 md:grid-cols-4 justify-between items-center">
      
      <div class="w-full grayscale hover:grayscale-0">
        <img class="block p-4 m-auto aspect-square md:aspect-video" src="../../../public/img/bottle_box.png">
        <p class="text-hydrate text-center">Refined Night Serum</p>
      </div>
      
      <div class="w-full grayscale hover:grayscale-0">
        <img class="block p-4 m-auto aspect-square md:aspect-video" src="../../../public/img/bottle_box.png">
        <p class="text-hydrate text-center">Skin Tranquility</p>
      </div>

    </div>

  </div>


  <div id="how-to-find" class="">
    <HowToFind />
  </div>

</template>