<script setup lang="ts">
import { ref } from "vue";
import ProductImage from "../../../components/Slider/ProductImage.vue";
import {Product} from "../../../typings/Product";

type Prop = {
  data?: Product;
}

const { data } = defineProps<Prop>()
</script>

<template>
  <div v-if="data">
    <div>
      <ProductImage class="mt-12 lg:hidden"/>
    </div>
    <div class="flex mt-20 font-questrial text-gray-1">
      <div class="">
        <div class="flex mx-0 lg:mr-10 mb-10">
          <div class="">
            <img src="/img/halfarrow.svg" class="w-12 lg:w-20" />
          </div>
          <h1 class="text-2xl mx-4 lg:mx-8 text-repair">Description</h1>
          <hr/>
        </div>
        <div class="mx-16 lg:ml-28 lg:mr-10 text-justify">
          <div id="description" v-html="data.description"/>
          <div class="my-12">
            <div class="flex items-center ml-0 sm:ml-5"><img src="/img/checkbox.svg" class="w-10">
              <p class="text-repair ml-4">Skin Concern</p></div>
            <ul class="grid grid-cols-1 lg:grid-cols-2 gap-x-10 list-disc ml-24 mt-2">
              <li v-for="item in data.skinConcerns" :key="item.id">
                {{item.name}}
              </li>
            </ul>
          </div>
          <div>
            <div class="flex items-center ml-0 sm:ml-5"><img src="/img/checkbox.svg" class="w-10">
              <p class="text-repair ml-4">Skin Type</p></div>
            <ul class="grid grid-cols-1 lg:grid-cols-2 gap-x-10 list-disc ml-24 mt-2">
              <li v-for="item in data.skinTypes" :key="item.id">
                {{item.name}}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <ProductImage class="hidden lg:block lg:mr-28"/>
      </div>
    </div>

    <div class="mt-20 font-questrial text-gray-1">
      <div class="flex mx-0 lg:mr-10 mb-10">
        <div class="">
          <img src="/img/halfarrow.svg" class="w-16 sm:w-20" />
        </div>
        <h1 class="text-2xl mx-8 text-repair">Details</h1>
      </div>
      <div class="flex flex-wrap mx-24 sm:mx-28 gap-12 items-center">
        <div class="">
          <p class="text-repair">Category</p>
          <p>{{data.category.name}}</p>
        </div>
        <div class="">
          <p class="text-repair">SKU</p>
          <p>{{data.sku}}</p>
        </div>
        <div class="">
          <p class="text-repair">Key Ingredients</p>
          <p>{{data.keyingredient}}</p>
        </div>
        <div class="flex items-center"><img src="/img/star.svg" class="w-6 mr-4"> Product Value</div>
      </div>
    </div>

    <div class="my-20 font-questrial text-gray-1">
      <div class="flex mx-0 lg:mr-10 mb-10">
        <div class="">
          <img src="/img/halfarrow.svg" class="w-16 sm:w-20" />
        </div>
        <h1 class="text-2xl mx-8 text-repair">How To Use</h1>
      </div>
      <div id="how-to-use" class="mx-28" v-html="data.howToUse" />
    </div>
  </div>
</template>

<style>
  #how-to-use ul, #description ul {
    list-style: disc;
    text-align: justify;
    margin-left: 1rem;
  }
  #description p, #description li {
    margin-bottom: 1rem;
  }
</style>
