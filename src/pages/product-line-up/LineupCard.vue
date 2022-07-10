<script setup lang="ts">
import { computed, toRefs } from 'vue';
import ProductCard from "./LineupProduct.vue";
import SingleCard from "../home/components/ProductList/SingleCard.vue";

interface Prop {
  items: any[]
}

const props = defineProps<Prop>();
const emit = defineEmits(['hover', 'blur', 'click']);

const { items } = toRefs(props);

const category = computed(() => items.value.length > 0 ? items.value[0].category.slug : 'series')

</script>

<template>
  <div class="px-5 lg:px-20 mt-10">
    <!-- 0 -->
    <div v-if="items.length === 0" class="grid grid-cols-4 gap-10">
      <div v-for="index in 4" :key="index" class="relative flex items-start flex-none border border-white w-full">
          <div class="w-full">
            <div class="relative w-full flex justify-center items-center py-[50%] max-h-[300px] ">
              <img class="w-full max-h-[400px] object-contain aspect-square filter z-[0]" src="/img/coming_soon.png"/>
              <div class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full z-[-1] bg-gray-2" >
              </div>
            </div>
            <div class="mt-10 text-2xl text-center h-14 font-questrial bg-gray-2">
            </div>
          </div>
      </div>
    </div>
    
    <!-- 1 -->
    <div v-if="items.length === 1" class="grid grid-cols-5 gap-10">
      <div class="col-span-2">
        <SingleCard :item="items[0]" @click="$emit('click', items[0])" />
      </div>
      <div v-for="index in 4" :key="index" class="relative flex items-start flex-none border border-white w-full">
          <div class="w-full">
            <div class="relative w-full flex justify-center items-center py-[50%] max-h-[300px] ">
              <img class="w-full max-h-[400px] object-contain aspect-square filter z-[0]" src="/img/coming_soon.png"/>
              <div class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full z-[-1] bg-gray-2" >
              </div>
            </div>
            <div class="mt-10 text-2xl text-center h-14 font-questrial bg-gray-2">
            </div>
          </div>
      </div>
    </div>

    <!-- 2 -->
    <div v-else-if="items.length === 2" class="grid grid-cols-4 gap-10">
      <div class="w-full" v-for="item in items" :key="item.slug">
        <ProductCard :item="item" @click="$emit('click', item)" />
      </div>
      <div v-for="index in 2" :key="index" class="relative flex items-start flex-none border border-white w-full">
        <div class="w-full">
            <div class="relative w-full flex justify-center items-center py-[50%] max-h-[300px] bg-gray-2">
              <div class="absolute w-full h-full aspect-square"/>
              <img class="absolute w-full object-contain aspect-square filter" src="/img/coming_soon.png"/>
            </div>
            <div class="mt-10 text-2xl text-center h-14 font-din-next-lt-pro-light bg-gray-2">
            </div>
        </div>
      </div>

    </div>

    <!-- 3 -->
    <div v-else-if="items.length === 3" class="grid grid-cols-4 gap-10">
      <div class="" v-for="item in items" :key="item.slug">
        <ProductCard 
          :item="item" 
          @click="$emit('click', item)"
          @mouseenter="$emit('hover', item.category.slug)"
          @mouseleave="$emit('blur', item.category.slug)" 
        />
      </div>
      <div class="relative flex items-start flex-none border border-white w-full">
        <div class="w-full">
            <div class="relative w-full flex justify-center items-center py-[50%] max-h-[300px] bg-gray-2">
              <div class="absolute w-full h-full aspect-square"/>
              <img class="absolute w-full object-contain aspect-square filter" src="/img/coming_soon.png"/>
            </div>
            <div class="mt-10 text-2xl text-center h-14 font-din-next-lt-pro-light bg-gray-2">
            </div>
        </div>
      </div>

    </div>

    <!-- 4 -->
    <div v-else-if="items.length === 4" class="grid grid-cols-4 gap-10 overflow-x-auto overflow-y-hidden">
      <div class="" v-for="item in items" :key="item.slug">
        <ProductCard :item="item" @click="$emit('click', item)" />
      </div>
    </div>

    <!-- 5 -->
    <div v-else-if="items.length === 5" class="grid grid-cols-5 gap-10">
      <div class="w-full mb-0 md:mb-5" v-for="item in items" :key="item.slug">
        <ProductCard 
          :item="item" 
          @click="$emit('click', item)"
          @mouseenter="$emit('hover', item.category.slug)"
          @mouseleave="$emit('blur', item.category.slug)"
        />
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
/* width */
::-webkit-scrollbar {
  width: 100px;
  top: 100px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cfcfce;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(182, 175, 175);
}
</style>