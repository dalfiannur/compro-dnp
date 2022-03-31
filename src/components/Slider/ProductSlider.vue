<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { Product } from "../../typings/Product";

interface Prop {
  items: Product[];
}

const { items } = defineProps<Prop>();

const activeSlides = ref<number>(2);
const selectedSlide = ref<any>(items[2]);

const resize = () => {
  const width = document.getElementById("center-wrapper")?.offsetWidth;
  gsap.set(".selected-slide", { xPercent: -(100 * 2), width });
  gsap.set(".side-image", { width, height: width });
  const height = document
    .getElementsByClassName("selected-slide")
    .item(0)?.clientHeight;
  gsap.set(".slider-side", { height });
};

onMounted(() => {
  gsap.set(".slider-item", { xPercent: -100 });
  resize();

  window.addEventListener("resize", () => {
    resize();
  });
});

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
  <div class="flex justify-center w-full">
    <div class="relative z-[2] flex items-center w-full md:w-[28%] bg-hydrate">
      <div class="absolute flex justify-center -top-8 left-1/4 right-1/4">
        <div
          class="w-full py-4 text-xl font-bold text-center uppercase bg-white border-2 text-primary border-hydrate font-questrial"
        >{{ selectedSlide.category.name }}</div>
      </div>
      <div class="relative w-full overflow-hidden" id="center-wrapper">
        <div class="flex">
          <div class="flex-none my-52 selected-slide" v-for="item in items" :key="item.name">
            <img
              class="object-cover w-full h-full cursor-pointer"
              :src="item.images[0].image_source_url"
              @click="$router.push('/products/' + item.id)"
            />
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 w-full h-[200px] flex items-center flex-col">
        <div class="py-5 text-3xl font-bold text-center text-white">{{ selectedSlide.name }}</div>
        <div class="flex items-center justify-between flex-1 w-[280px]">
          <div
            v-for="(item, index) in items"
            :key="item.id"
            class="flex items-center justify-center w-10 h-10 border-2 border-white cursor-pointer"
            @click="goTo(index)"
          >
            <div v-if="activeSlides === index" class="w-6 h-6 bg-white" />
          </div>
        </div>
      </div>
    </div>

    <div class="absolute hidden w-full md:block">
      <div class="absolute w-1/3 bg-white-smoke top-52 slider-side" />
      <div class="absolute right-0 w-1/3 bg-white-smoke top-52 slider-side" />
      <div class="flex overflow-hidden flex-nowrap">
        <div class="flex-none w-1/3 slider-item pt-52" v-for="item in items" :key="item.name">
          <div class="relative flex justify-center -mt-14 aspect-square side-image">
            <img class="object-cover w-full h-full" :src="item.images[1].image_source_url" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>