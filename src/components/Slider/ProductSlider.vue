<script setup lang="ts">
import { ref } from "vue";
import { Product } from "../../typings/Product";

interface Prop {
  items: Product[];
}

const { items } = defineProps<Prop>();

const activeSlides = ref<number>(2);
const selectedSlide = ref<any>(items[2]);
const active = ref<number>(2);
const slideTo = ref<string>("next");

const next = (key: number) => {
  slideTo.value = "next";
  const loop = () => {
    if (active.value < key) {
      active.value = active.value + 1;
      setTimeout(() => {
        loop();
      }, 1000);
    }
  };
  loop();
};

const prev = (key: number) => {
  slideTo.value = "prev";
  const loop = () => {
    if (active.value > key) {
      active.value = active.value - 1;
      setTimeout(() => {
        loop();
      }, 1000);
    }
  };
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
  <div class="relative flex justify-center w-full pt-[150%] md:pt-[50%] max-h-[500px]">
    <div class="absolute top-0 bottom-0 left-0 right-0 z-[4] flex justify-center">
      <div class="w-full md:w-[32%] h-full px-0 md:px-5">
        <div class="flex flex-col justify-between h-full bg-hydrate">
          <div class="absolute flex justify-center -top-8 left-1/4 right-1/4">
            <div
              class="w-full py-4 text-xl font-bold text-center uppercase bg-white border-2 text-primary border-hydrate font-questrial"
            >
              {{ selectedSlide.category.name }}
            </div>
          </div>
          <div class="relative w-full flex items-end overflow-hidden h-[75%]">
            <div
              class="relative flex justify-center w-full h-full max-h-[400px] overflow-hidden"
            >
              <Transition :name="slideTo" v-for="(item, index) in items" :key="item.name">
                <div
                  v-show="active === index"
                  class="absolute top-0 flex flex-col justify-end h-full selected-slide"
                >
                  <img
                    class="w-full cursor-pointer max-h-[400px]"
                    :src="item.images[1].imageSourceUrl"
                    @click="$router.push('/products/' + item.id)"
                  />
                </div>
              </Transition>
            </div>
          </div>
          <div
            class="flex-1 flex flex-col justify-center items-center w-full px-5 mt-[7%]"
          >
            <div
              class="text-3xl font-bold text-center text-white md:text-3xl lg:text-4xl"
            >
              {{ selectedSlide.name }}
            </div>
            <div
              class="flex items-center justify-between flex-1 w-full max-w-[280px] mt-5"
            >
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
      </div>
    </div>

    <div class="absolute top-0 bottom-0 left-0 hidden w-1/3 md:block">
      <div class="h-[75%] flex items-end overflow-hidden">
        <div
          class="w-full h-[65%] bg-white-smoke max-h-[500px] relative flex justify-center"
        >
          <Transition
            :name="slideTo + '-left-side'"
            v-for="(item, index) in items"
            :key="item.id"
          >
            <img
              v-show="index === active"
              :src="item.images[0].imageSourceUrl"
              class="absolute h-[90%] cursor-pointer max-h-[550px] slide-left"
              @click="$router.push('/products/' + items[0].id)"
            />
          </Transition>
        </div>
      </div>
    </div>

    <div class="absolute top-0 bottom-0 right-0 hidden w-1/3 md:block">
      <div class="h-[75%] flex items-end overflow-hidden">
        <div
          class="w-full h-[65%] bg-white-smoke max-h-[500px] relative flex justify-center"
        >
          <Transition
            :name="slideTo + '-right-side'"
            v-for="(item, index) in items"
            :key="item.id"
          >
            <img
              v-show="index === active"
              :src="item.images[0].imageSourceUrl"
              class="absolute h-[90%] cursor-pointer max-h-[550px] slide-right"
              @click="$router.push('/products/' + items[0].id)"
            />
          </Transition>
        </div>
      </div>
    </div>

    <div class="absolute w-1/3 bg-white left-1/3 top-0 bottom-0 slider-side z-[3]" />

    <img
      src="/img/nano.png"
      class="w-[68px] absolute bottom-5 right-14 hidden md:block"
    />
  </div>
</template>

<style scoped>
.slide-left {
  transform: rotate(30deg);
  bottom: 8rem;
}

.slide-right {
  transform: rotate(-30deg);
  bottom: 8rem;
}

.next-enter-active,
.prev-enter-active,
.next-leave-active,
.prev-leave-active {
  transition: all 0.9s ease-out;
}

.next-leave-to,
.prev-enter-from {
  transform: translateX(-120%);
}
.next-enter-from,
.prev-leave-to {
  transform: translateX(120%);
}

/**
Right Side
*/
.next-right-side-enter-active {
  transition: all 0.7s ease-out 0.3s;
}
.prev-right-side-enter-active {
  transition: all 1s ease-out;
}
.next-right-side-leave-active {
  transition: all 0.7s ease-out;
}
.prev-right-side-leave-active {
  transition: all 0.7s ease-out;
}
.next-right-side-leave-to,
.prev-right-side-enter-from {
  transform: translateX(-150%);
  bottom: 0;
}
.next-right-side-enter-from,
.prev-right-side-leave-to {
  transform: translateX(150%) rotate(-45deg);
  bottom: 20rem;
}

/**
Left Side
*/
.next-left-side-enter-active {
  transition: all 0.7s ease-out 0.3s;
}
.prev-left-side-enter-active {
  transition: all 1s ease-out;
}
.next-left-side-leave-active {
  transition: all 0.7s ease-out;
}
.prev-left-side-leave-active {
  transition: all 0.7s ease-out;
}
.next-left-side-leave-to,
.prev-left-side-enter-from {
  transform: translateX(-150%) rotate(45deg);
  bottom: 20rem;
}
.next-left-side-enter-from,
.prev-left-side-leave-to {
  transform: translateX(150%) rotate(0deg);
  bottom: 0rem;
}
</style>
