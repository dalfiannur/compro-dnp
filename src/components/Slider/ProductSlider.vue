<script setup lang="ts">
import { ref } from "vue";
import { Product } from "../../typings/Product";

interface Prop {
  items: Product[];
}

const { items } = defineProps<Prop>();

const activeSlides = ref<number>(2);
const selectedSlide = ref<any>(items[2]);
const active = ref<number>(2)
const slideTo = ref<string>('next')

const next = (key: number) => {
  slideTo.value = 'next'
  const loop = () => {
    if (active.value < key) {
      active.value = active.value + 1
      setTimeout(() => {
        loop()
      }, 1000)
    }
  }
  loop();
};

const prev = (key: number) => {
  slideTo.value = 'prev'
  const loop = () => {
    if (active.value > key) {
      active.value = active.value - 1
      setTimeout(() => {
        loop()
      }, 1000)
    }
  }
  loop();
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
          <div class="text-3xl font-bold text-center text-white md:text-3xl lg:text-4xl">{{ selectedSlide.name }}</div>
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


    <div class="absolute top-0 bottom-0 left-0 w-1/3">
      <div class="h-[75%] flex items-end">
        <div class="w-full h-[50%] bg-white-smoke max-h-[400px] relative flex justify-center">
          <Transition :name="slideTo + '-side'" v-for="(item, index) in items" :key="item.id">
            <img v-show="index === active" src="/img/prevent-antioxidant-resveratrol-a.png"
              class="absolute bottom-0 h-[150%] cursor-pointer max-h-[550px]"
              @click="$router.push('/products/' + items[0].id)" />
          </Transition>
        </div>
      </div>
    </div>

    <div class="absolute top-0 bottom-0 right-0 w-1/3">
      <div class="h-[75%] flex items-end">
        <div class="w-full h-[50%] bg-white-smoke max-h-[400px] relative flex justify-center">
          <Transition :name="slideTo + '-side'" v-for="(item, index) in items" :key="item.id">
            <img v-show="index === active" src="/img/prevent-antioxidant-resveratrol-a.png"
              class="absolute bottom-0 h-[150%] cursor-pointer max-h-[550px]"
              @click="$router.push('/products/' + items[0].id)" />
          </Transition>
        </div>
      </div>
    </div>

    <div class="absolute w-1/3 bg-white left-1/3 top-0 bottom-0 slider-side z-[3]" />

    <img src="/img/nano.png" class="w-[68px] absolute bottom-5 right-14" />
  </div>
</template>

<style scoped>
.next-enter-active,
.prev-enter-active,
.next-leave-active,
.prev-leave-active {
  transition: all 1s ease-out;
}

.next-side-enter-active {
  transition: all .7s ease-out .3s;
}

.prev-side-enter-active {
  transition: all .7s ease-out .3s;
}

.next-side-leave-active {
  transition: all .7s ease-out;
}

.prev-side-leave-active {
  transition: all .7s ease-out;
}


.next-leave-to,
.prev-enter-from {
  transform: translateX(-150%);
}

.next-side-leave-to,
.prev-side-enter-from {
  transform: translateX(-100%);
}

.next-enter-from,
.prev-leave-to {
  transform: translateX(150%);
}

.next-side-enter-from,
.prev-side-leave-to {
  transform: translateX(100%);
}
</style>