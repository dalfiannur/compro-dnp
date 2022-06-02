<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, watch } from "vue";
import { Article } from "../../typings/Article";

interface Prop {
  data: Article[];
}

const { data } = defineProps<Prop>();

const loadImage = (path: String) => {
  return "/img/" + path + ".jpg";
};

const currentSlide = ref(0);
const getSlideCount = ref<number | undefined>(data.length);
const slideInterval = ref<any>(0);
const direction = ref<string>("right");

function setCurrentSlide(index: number) {
  currentSlide.value = index;
}

const nextSlide = () => {
  const dataSlide = getSlideCount.value || 0;
  const index = currentSlide.value < dataSlide - 1 ? currentSlide.value + 1 : 0;
  setCurrentSlide(index);
  direction.value = "right";
  startSlideTimer();
};

const prevSlide = () => {
  const index =
    currentSlide.value > 0 ? currentSlide.value - 1 : data.length - 1;
  setCurrentSlide(index);
  direction.value = "left";
  startSlideTimer();
};

function startSlideTimer() {
  stopSliderTimer();
  slideInterval.value = setInterval(() => {
    nextSlide();
  }, 5000);
}
function stopSliderTimer() {
  clearInterval(slideInterval.value);
}

onMounted(() => {
  console.log(getSlideCount.value)
})

onMounted(function () {
  startSlideTimer();
});
onBeforeUnmount(function () {
  stopSliderTimer();
});

const swiper = computed(() => {
  return direction.value === "right" ? "slide-out" : "slide-in";
});

const createLink = (slug: string) => {
  return `/articles/${slug}`;
};
</script>

<template>
  <div class="flex justify-center w-full">
    <div class="relative w-full h-[780px] sm:h-[730px] lg:h-[500px] overflow-hidden">
      <Transition :name="swiper" v-for="(slide, index) in data" :key="index" v-show="currentSlide === index">
        <div
          class="absolute top-0 left-0 grid w-full h-full grid-cols-1 overflow-hidden bg-gray-100 lg:grid-cols-2 place-items-center">
          <div class="h-72 lg:h-[500px] box-content flex items-center md:px-12 lg:px-6 xl:px-16">
            <img class="object-cover h-full" :src="slide.thumbnailUrl" alt="image" />
          </div>

          <div class="flex flex-col justify-between h-full px-20 py-3 align-middle sm:px-40 lg:pl-0">
            <div class="flex mt-4 mb-6 lg:mt-10 font-questrial">
              <p class="text-[#77c6bc]"># B E A U T Y</p>
              <p class="ml-2 text-gray-600">- by {{ slide.user.name }}</p>
            </div>
            <a :href="createLink(slide.slug)" @click.prevent="$router.push('/articles/' + slide.slug)"
              class="text-4xl font-questrial lg:text-4xl xl:text-5xl text-[#77c6bc]">
              {{ slide.title }}
            </a>
            <div
              class="article-detail w-full mt-8 mb-12 text-sm text-justify text-gray-600 font-questrial clamp lg:text-base"
              v-html="slide.content" />

            <div class="flex justify-between mb-6">
              <p class="text-base text-gray-600 font-questrial">
                {{ new Date(slide.createdAt).toLocaleDateString("ID-id") }}
              </p>
              <a :href="createLink(slide.slug)" @click.prevent="$router.push('/articles/' + slide.slug)"
                class="text-base font-normal text-[#77c6bc]">
                Read More
              </a>
            </div>
          </div>
        </div>
      </Transition>

      <div class="justify-space-beetwen item-center">
        <button @click="prevSlide"
          class="top-[17.5%] sm:top-1/2 pb-1 absolute left-6 h-10 w-10 text-[#77c6bc] border border-[#77c6bc]">
          &lt;
        </button>
        <button @click="nextSlide"
          class="top-[17.5%] sm:top-1/2 pb-1 absolute right-6 h-10 w-10 border text-[#77c6bc] border-[#77c6bc]">
          &gt;
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}

.slide-in-enter-from {
  transform: translateX(-100%);
}

.slide-in-leave-to {
  transform: translateX(100%);
}

.slide-out-enter-from {
  transform: translateX(100%);
}

.slide-out-leave-to {
  transform: translateX(-100%);
}
</style>

<style>
.article-detail p {
  display: none;
}

.article-detail p:first-child {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>