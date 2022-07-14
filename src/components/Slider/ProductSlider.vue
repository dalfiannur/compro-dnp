<script setup lang="ts">
import { clear } from "console";
import { keys } from "lodash";
import { ref, onMounted, watch } from "vue";
import { Product } from "../../typings/Product";

interface Prop {
  items: Product[];
}

const { items } = defineProps<Prop>();

const activeSlides = ref<number>(2);
const active = ref<number>(2);
const slideTo = ref<string>("next");
let timeout: NodeJS.Timer

const next = (key: number, duration: number = 700) => {
  slideTo.value = "next";
  const loop = () => {
    if (active.value < key) {
      active.value = active.value + 1;
      timeout = setTimeout(() => {
        loop();
      }, duration);
    }
  };
  loop();
};

const prev = (key: number, duration: number = 700) => {
  slideTo.value = "prev";
  const loop = () => {
    if (active.value > key) {
      active.value = active.value - 1;
      timeout = setTimeout(() => {
        loop();
      }, duration);
    }
  };
  loop();
};

let startTimeout:NodeJS.Timer 

function pause() {
  clearTimeout(timeout)
  clearTimeout(startTimeout)
  clearTimeout(watchTimeout)
}

function start() {
  clearTimeout(timeout)
  clearTimeout(startTimeout)
  if (slideTo.value === "next") {
    startTimeout=setTimeout(() => {
      if (active.value < 4){
        next(4, 4200);
      } else {
        prev(0, 4200);
      }
      
    }, 4200); 
    // next(value + 1);
  }
  if (slideTo.value === "prev") {
    startTimeout=setTimeout(() => {
      if (active.value > 0){
        prev(0, 4200);
      } else {
        next(4, 4200);
      }
    }, 4200);
  }
  console.log(active.value)
}

onMounted(() => {
  setTimeout(() => {
    if (active.value < 4) {
      next(4, 4200);
    }
  }, 4200);
})

let watchTimeout:NodeJS.Timer

watch (active, (value) => {
  if (value === 0) {
    watchTimeout=setTimeout(() => {
      next(4, 4200);
    }, 4200); 
    // next(value + 1);
  }
  if (value === 4) {
    watchTimeout=setTimeout(() => {
      prev(0, 4200);
    }, 4200);
  }
  console.log(value)
})

let running = false;

function conditionalFunc(key: number) {
  if (key >= activeSlides.value) {
    next(key);
  } else {
    prev(key);
  }
} 

const goTo = (key: number) => {
  clearTimeout(timeout)
  if (running) {
    return
  } else {
    running = true
  }

  conditionalFunc(key)

  running = false

  activeSlides.value = key;
};
</script>

<template>
  <div class="relative flex justify-center w-full pt-[150%] md:pt-[75vh]">
    <div class="absolute top-0 bottom-0 left-0 right-0 z-[4] flex justify-center">
      <div class="w-full md:w-[32%] md:min-w-[350px] md:max-w-[500px] h-full px-0 md:px-5">
        <div class="flex flex-col justify-between h-full bg-hydrate">
          <div class="absolute flex justify-center -top-6 left-0 right-0">
            <div
              class="w-full py-3 sm:text-xs md:text-sm xl:text-sm font-light text-center uppercase bg-white border text-primary tracking-[0.5em] border-hydrate font-questrial md:max-w-[150px] lg:max-w-[175px] xl:max-w-[210px]">
              {{ items[active]?.category?.name }}
            </div>
          </div>
          <div class="relative w-full flex items-end overflow-hidden h-[75%]">
            <div class="relative flex justify-center w-full h-full max-h-[400px] overflow-hidden">
              <Transition :name="slideTo" v-for="(item, index) in items" :key="item.name">
                <div v-show="active === index" class="absolute top-0 flex flex-col justify-end h-full selected-slide">
                  <img class="h-[40vh] cursor-pointer max-h-[400px]" :src="item.images[1].imageSourceUrl"
                    @click="$router.push('/products/' + item.slug)"
                    @mouseenter="pause"
                    @mouseleave="start" />
                </div>
              </Transition>
            </div>
          </div>
          <div class="flex-1 flex flex-col justify-center items-center w-full px-5 my-[7%]">
            <div class="text-3xl font-normal font-questrial text-center text-white md:text-3xl">
              {{ items[active]?.name }}
            </div>
            <div class="flex items-center justify-between flex-1 w-full max-w-[200px] mt-5">
              <div v-for="(item, index) in items" :key="item.id"
                class="flex items-center justify-center w-6 h-6 border border-white cursor-pointer"
                @click="goTo(index)">
                <div v-if="active === index" class="w-3 h-3 bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute top-0 bottom-0 left-0 hidden w-[30%] md:block">
      <div class="h-[55vh] flex items-end overflow-hidden">
        <div class="w-[100%] h-[60%] bg-white-smoke max-h-[500px] relative flex justify-end">
          <Transition :name="slideTo + '-left-side'" v-for="(item, index) in items" :key="item.id">
            <img v-show="index+1 === active" :src="item.images[0].imageSourceUrl"
              class="absolute h-[40vh] object-contain cursor-pointer max-h-[550px] slide-left -mb-24 z-10"
              @click="goTo(index)"
              @mouseenter="pause"
              @mouseleave="start" />
          </Transition>
        </div>
      </div>
    </div>

    <div class="absolute top-0 bottom-0 right-0 hidden w-[30%] md:block">
      <div class="h-[55vh] flex items-end overflow-hidden">
        <div class="w-full h-[60%] bg-white-smoke max-h-[500px] relative flex justify-start">
          <Transition :name="slideTo + '-right-side'" v-for="(item, index) in items" :key="item.id">
            <img v-show="index-1 === active" :src="item.images[0].imageSourceUrl"
              class="absolute h-[40vh] object-contain cursor-pointer max-h-[550px] slide-right -mb-24 z-10"
              @click="goTo(index)"
              @mouseenter="pause"
              @mouseleave="start" />
          </Transition>
        </div>
      </div>
    </div>

    <div class="absolute w-1/3 bg-white left-1/3 top-0 bottom-0 slider-side z-[3]" />

    <img src="/img/nano.png" class="w-[68px] absolute bottom-5 right-14 hidden md:block" />
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
  transition: all 0.7s ease-out;
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
  transition: all 0.7s ease-out;
}

.prev-right-side-enter-active {
  transition: all 0.7s ease-out;
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
  transition: all 0.7s ease-out;
}

.prev-left-side-enter-active {
  transition: all 0.7s ease-out;
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
  transform: translateX(150%);
  bottom: 0rem;
}
</style>
