<script setup lang="ts">
import {ref, toRefs , watch, computed} from "vue"
import {Product} from "../../../typings/Product";

type Prop = {
  data: Product
}
const prop = defineProps<Prop>();

const { data } = toRefs(prop)

const input = ref<any>(null)

const productName = computed(() => {
  return Ellipsis(data.value.name)
})

const productUsedAs = computed(() => {
  return Ellipsis(data.value.usedAs)
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
          word[i-1] += "<br>"
          break
      }
  }
  console.log(" Word1 " + word)
  return word.join(' ')
}

console.log(data.value.category)

</script>

<template>
  <div
    v-if="data"
    class="relative py-5 flex items-center justify-center lg:justify-start h-80 lg:h-96 xl:h-[26rem] 2xl:h-[32rem] w-full flex-grow"
    :class="['bg-' + data.category.slug]"
  >

    <div class="absolute w-60 lg:w-72 2xl:w-96 -rotate-90 border-[0.13rem] border-white -left-[6.2rem] lg:-left-[7.7rem] 2xl:-left-[10.4rem]">
      <div class="my-2.5 uppercase font-questrial tracking-[0.5rem] text-white">
        <p class="text-center text-base xl:text-xl 2xl:text-2xl">
          {{ data.category.name }}
        </p>
      </div>
    </div>

    <div class="absolute flex right-4 sm:right-8 lg:left-32">
      <div class="sm:mx-2.5">
        <img
          :src="`/img/${data.category.slug}.svg`"
          class="w-10 sm:w-16"
        />
      </div>
    </div>

    <div class="items-center lg:flex text-center lg:text-left lg:ml-64">
      <h2 v-html="productName" class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.5rem] font-questrial font-normal text-white max-w-[450px] xl:max-w-[500px]" />

      <p v-html="productUsedAs" class="text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-questrial font-normal text-white mt-6 lg:ml-12 xl:ml-20 2xl:ml-48" />

    </div>
  </div>
</template>

<style lang="scss" scoped>
$categories: 'repair', 'prevent', 'glow', 'hydrate', 'preserve';

@each $category in $categories {
  .text-#{$category} {
    --tw-bg-opacity: 1;
    color: theme('colors.' + $category);
  }
  .border-#{$category} {
    --tw-bg-opacity: 1;
    border-color: theme('colors.' + $category);
  }
  .bg-#{$category} {
    --tw-bg-opacity: 1;
    background-color: theme('colors.' + $category);
  }
}
</style>
