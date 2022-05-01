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

</script>

<template>
  <div
    v-if="data"
    class="relative py-5 bg-hydrate flex items-center justify-center lg:justify-start h-80 lg:h-96 w-full flex-grow"
    :class="['bg-' + data.category.slug]"
  >

    <div class="absolute w-60 lg:w-72 -rotate-90 border-[0.13rem] border-white -left-[6.2rem] lg:-left-[7.7rem]">
      <div class="my-2.5 uppercase font-questrial tracking-[0.5rem] text-white">
        <p class="text-center text-base">
          {{ data.category.name }}
        </p>
      </div>
    </div>

    <div class="absolute flex right-4 sm:right-8 lg:left-36">
      <div class="sm:mx-2.5">
        <img
          :src="`/img/${data.category.slug}.svg`"
          class="w-8 sm:w-14"
        />
      </div>
    </div>

    <div class="items-center lg:flex text-center lg:text-left lg:ml-64">
      <h2 v-html="productName" class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-questrial font-normal text-white max-w-[420px]" />

      <p v-html="productUsedAs" class="text-lg lg:text-xl xl:text-3xl font-questrial font-normal text-white mt-6 lg:ml-12" />

    </div>
  </div>
</template>

<style>

</style>
