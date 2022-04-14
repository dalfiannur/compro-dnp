<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue";
import { gsap } from "gsap";
import { Product } from "../../typings/Product";

interface Prop {
  items: Product[];
}

const { items } = defineProps<Prop>();

const activeSlides = ref<number>(2);
const selectedSlide = ref<any>(items[2]);
const sliderWrapperRef = ref<any>()

const next = (key: number) => {
  gsap.to(".slider-item", {
    xPercent: -((key - 1) * 100),
    duration: key - activeSlides.value,
  });
  gsap.to(".selected-slide", {
    xPercent: -(key * 100),
    duration: key - activeSlides.value,
  });
};

const prev = (key: number) => {
  gsap.to(".slider-item", {
    xPercent: -((key - 1) * 100),
    duration: activeSlides.value - key,
  });
  gsap.to(".selected-slide", {
    xPercent: -(100 * key),
    duration: activeSlides.value - key,
  });
};

const goTo = (key: number) => {
  if (key >= activeSlides.value) {
    next(key);
  } else {
    prev(key);
  }

  activeSlides.value = key;
};
</script>

<template>
  <div class="relative flex justify-center w-full pt-[50%] max-h-[500px]">
    <div class="absolute top-0 bottom-0 z-[4] w-[36%] px-[4%]">
      <div class="flex flex-col justify-between h-full bg-hydrate">
        <div class="absolute flex justify-center -top-8 left-1/4 right-1/4">
          <div
            class="w-full py-4 text-xl font-bold text-center uppercase bg-white border-2 text-primary border-hydrate font-questrial">
            {{ selectedSlide.category.name }}</div>
        </div>
        <div class="relative w-full flex items-end overflow-hidden h-[75%]">
          <div class="relative flex justify-center w-full h-full max-h-[400px] overflow-hidden">
            <div class="absolute top-0 flex flex-col justify-end h-full selected-slide" v-for="item in items"
              :key="item.name">
              <img class="w-full cursor-pointer max-h-[400px]" :src="item.images[0].image_source_url"
                @click="$router.push('/products/' + item.id)" />
            </div>

          </div>

        </div>
        <div class="flex-1 flex flex-col justify-center items-center w-full px-5 mt-[7%]">
          <div class="text-3xl font-bold text-center text-white">{{ selectedSlide.name }}</div>
          <div class="flex items-center justify-between flex-1 w-full max-w-[280px] mt-5">
            <div v-for="(item, index) in items" :key="item.id"
              class="flex items-center justify-center w-10 h-10 border-2 border-white cursor-pointer"
              @click="goTo(index)">
              <div v-if="activeSlides === index" class="w-6 h-6 bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="absolute top-0 bottom-0 hidden w-full md:block">
      <div class="static z-[3] flex items-end overflow-hidden flex-nowrap h-[75%]">
        <div class="flex-none w-1/3 slider-item" v-for="item in items" :key="item.name">
          <div class="relative flex justify-center px-5 side-image">
            <img class="relative z-[3] h-full max-h-[400px]" src="/img/prevent-antioxidant-resveratrol-a.png" />
          </div>
        </div>
        <div class="absolute z-[2] left-0 h-[50%] max-h-[320px] bottom-[25%] right-0 bg-white-smoke" />
      </div>
    </div>
    <div class="absolute w-1/3 bg-white left-1/3 top-0 bottom-0 slider-side z-[3]" />

    <img src="/img/nano.png" class="w-[68px] absolute bottom-5 right-14" />
  </div>
</template>