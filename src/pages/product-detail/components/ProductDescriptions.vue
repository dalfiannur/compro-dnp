<script setup lang="ts">
import { ref, toRefs, watch } from "vue";
// @ts-ignore
import ProductImage from "../../../components/Slider/ProductImage.vue";
import {Product} from "../../../typings/Product";

type Prop = {
  data: Product
}

const prop = defineProps<Prop>();

const { data } = toRefs(prop)

const input = ref<any>(null)

function load() {
  if (input.value) {
    input.value.innerHTML
    console.log(input.value.innerHTML)
  }
}

watch(data, () => {
  load()
})

</script>

<template>
  <div v-if="data">
    <div class="flex flex-col-reverse lg:flex-row mt-8 lg:mt-20 mx-0 xl:mx-10 2xl:mx-36 font-questrial">
      <div class="flex-1">
        <div class="flex mx-0 lg:mr-10 mb-10">
          <div class="mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 lg:ml-10" :class="['fill-' + data.category.slug]" viewBox="0 0 90.39 17.58">
              <polygon class="cls-1" points="90.39 17.58 0 17.58 0 16.58 87.86 16.58 70.96 0.73 71.64 0 90.39 17.58"/>
            </svg>
          </div>
          <div class="text-2xl mx-4 lg:mx-6 " :class="`${'text-' + data.category.slug}`">Description</div>
          <span class="lg:hidden flex-grow border-t border-gray-400 mt-4"></span>
        </div>
        <div class="mx-16 lg:ml-28 lg:mr-10 text-justify">
          <div id="description" v-html="data.description"/>
          <div class="my-12">
            <div class="flex items-center ml-0 lg:ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10" viewBox="0 0 74.99 56.99">
                <path class="cls-1 fill-gray-1" d="M57,57H0V0H57ZM1,56H56V1H1Z"/>
                <polygon class="cls-2" :class="['fill-' + data.category.slug]" points="29.16 43.16 13.43 24.8 15.71 22.84 29.61 39.08 73.2 6.54 74.99 8.94 29.16 43.16"/>
              </svg>
              <p class="ml-4" :class="['text-' + data.category.slug]">Skin Concern</p></div>
            <ul class="grid grid-cols-1 lg:grid-cols-2 gap-x-10 list-disc ml-24 mt-2">
              <li v-for="item in data.skinConcerns" :key="item.id">
                {{item.name}}
              </li>
            </ul>
          </div>
          <div>
            <div class="flex items-center ml-0 lg:ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10" viewBox="0 0 74.99 56.99">
                <path class="cls-1 fill-gray-1" d="M57,57H0V0H57ZM1,56H56V1H1Z"/>
                <polygon class="cls-2" :class="['fill-' + data.category.slug]" points="29.16 43.16 13.43 24.8 15.71 22.84 29.61 39.08 73.2 6.54 74.99 8.94 29.16 43.16"/>
              </svg>
              <p class="ml-4" :class="['text-' + data.category.slug]">Skin Type</p></div>
            <ul class="grid grid-cols-1 lg:grid-cols-2 gap-x-10 list-disc ml-24 mt-2">
              <li v-for="item in data.skinTypes" :key="item.id">
                {{item.name}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ProductImage :data="data" class="lg:block mb-10 lg:mb-0 lg:mr-20 xl:mr-36"/>
    </div>

    <div class="mt-20 font-questrial mx-0 xl:mx-10 2xl:mx-36">
      <div class="flex mx-0 mb-10">
        <div class="mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 lg:ml-10" :class="['fill-' + data.category.slug]" viewBox="0 0 90.39 17.58">
            <polygon class="cls-1" points="90.39 17.58 0 17.58 0 16.58 87.86 16.58 70.96 0.73 71.64 0 90.39 17.58"/>
          </svg>
        </div>
        <h1 class="text-2xl mx-4 lg:mx-6" :class="['text-' + data.category.slug]">Details</h1>
        <span class="flex-grow border-t border-gray-400 mt-4"></span>
      </div>
      <div class="flex flex-wrap mx-16 lg:mx-28 gap-12 items-center">
        <div class="">
          <p :class="['text-' + data.category.slug]">Category</p>
          <p>{{data.category.name}}</p>
        </div>
        <div class="">
          <p :class="['text-' + data.category.slug]">SKU</p>
          <p>{{data.sku}}</p>
        </div>
        <div class="">
          <p :class="['text-' + data.category.slug]">Key Ingredients</p>
          <p>{{data.keyingredient}}</p>
        </div>
      </div>
    </div>

    <div class="my-20 font-questrial mx-0 xl:mx-10 2xl:mx-36">
      <div class="flex mx-0 mb-10">
        <div class="mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 lg:ml-10" :class="['fill-' + data.category.slug]" viewBox="0 0 90.39 17.58">
            <polygon class="cls-1" points="90.39 17.58 0 17.58 0 16.58 87.86 16.58 70.96 0.73 71.64 0 90.39 17.58"/>
          </svg>
        </div>
        <h1 class="text-2xl mx-4 lg:mx-6" :class="['text-' + data.category.slug]">How To Use</h1>
        <span class="flex-grow border-t border-gray-400 mt-4"></span>
      </div>
      <div id="how-to-use" class="mx-16 lg:mx-28" v-html="data.howToUse" />
    </div>
  </div>
</template>

<style lang="scss">
  #how-to-use ul, #description ul {
    list-style: disc!important;;
    text-align: justify;
    margin-left: 1rem;
  }
  #description p, #description li {
    margin-bottom: 1rem;
  }

  .repair {
    color: #5c84c3;
    fill: #5c84c3;
  }
  .hydrate {
    color: #63c4b4;
    fill: #63c4b4;
  }
  .glow {
    color: #f7bf6f;
    fill: #f7bf6f;
  }
  .prevent{
    color: #71469b;
    fill: #71469b;
  }
</style>
<style lang="scss">
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
    .fill-#{$category} {
      --tw-bg-opacity: 1;
      fill: theme('colors.' + $category);
    }
  }
</style>
