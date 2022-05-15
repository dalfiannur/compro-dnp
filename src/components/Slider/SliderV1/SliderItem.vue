<script setup lang="ts">
import { ref, defineProps, computed, toRefs, watch } from 'vue'
import { MainBanner } from '../../../typings/MainBanner'

interface Prop {
    data: MainBanner;
    currentSlide: number;
    index: number;
    direction: string;
}

const props = defineProps<Prop>();

const { direction, data } = toRefs(props);

const input = ref<any>(null)

const dataTitle = computed(() => {
  return Ellipsis(data.value.title)
})

function load() {
  if (input.value) {
    input.value.innerHTML
    console.log(input.value.innerHTML)
  }
}

watch(data, () => {
  load()
})

function Ellipsis(str: string) {
  
  const lenStr = str.length
  const word = str.split(' ')

  let count = 0;
  for (let i = 0; i < word.length; i++)   {
      count += word[i].length
      if ( count > lenStr / 2) {
          word[i] += "<br>"
          break
      }
  }
  console.log(" Word1 " + word)
  return word.join(' ')
}

const transitionEffect = computed(() => {
    return direction.value === 'right' ? 'slide-out' : 'slide-in'
})
</script>


<template>
    <transition :name="transitionEffect">
        <div
            class="absolute top-0 bottom-0 left-0 right-0 gradient"
            :href="data.link"
            v-show="currentSlide === index"
        >
            <div class="absolute left-0 flex flex-col justify-center h-full max-w-[60%] pl-[15%]">
                <h2 class="text-6xl text-white font-din-next-lt-pro-light" v-html="dataTitle" ></h2>
                <h2 class="mt-5 text-3xl text-white font-din-next-lt-pro-light">{{ data.subTitle }}</h2>
            </div>
            <div class="relative flex items-end justify-end h-full">
                <img
                    :src="data.imageSourceUrl"
                    :alt="`slide-${index}`"
                    class="block h-full"
                />
            </div>
        </div>
    </transition>
</template>

<style scoped>
.gradient {
    background: linear-gradient(
        100deg,
        rgba(99, 196, 180, 1) 20%,
        rgba(99, 196, 180, 0) 90%,
        rgba(255, 255, 255, 0) 100%
    );
}
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
