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
    <!-- 1 -->
    <div v-if="items.length === 1" class="grid grid-cols-2 md:grid-cols-4 gap-10">
      <div class="hidden md:flex flex-col justify-end">
        <div class="flex-1 min-h-[400px] min-w-[400px]" :class="['bg-white-smoke']" />
        <div class="h-14 mt-10 w-full" />
      </div>
      <div class="col-span-2">
        <SingleCard :item="items[0]" @click="$emit('click', items[0])" />
      </div>
      <div class="hidden md:flex flex-col justify-end">
        <div class="flex-1 min-h-[400px] min-w-[400px]" :class="['bg-white-smoke']" />
        <div class="h-14 mt-10 w-full" />
      </div>
    </div>

    <!-- 2 -->
    <div v-else-if="items.length === 2" class="grid grid-cols-2 md:grid-cols-4 gap-10">
      <div class="flex flex-col justify-end">
        <div class="flex-1" :class="['bg-white-smoke']" />
        <div class="h-14 mt-10 w-full" />
      </div>
      <div class="w-full" v-for="item in items" :key="item.slug">
        <ProductCard :item="item" @click="$emit('click', item)" />
      </div>
      <div class="flex flex-col justify-end">
        <div class="flex-1" :class="['bg-white-smoke']" />
        <div class="h-14 mt-10 w-full" />
      </div>
    </div>

    <!-- 3 -->
    <div v-else-if="items.length === 3" class="grid grid-cols-2 md:grid-cols-5 gap-10">
      <div class="hidden md:flex flex-col justify-end">
        <div class="flex-1" :class="['bg-white-smoke']" />
        <div class="h-14 mt-10 w-full" />
      </div>
      <div class="" v-for="item in items" :key="item.slug">
        <ProductCard 
          :item="item" 
          @click="$emit('click', item)"
          @mouseenter="$emit('hover', item.category.slug)"
          @mouseleave="$emit('blur', item.category.slug)" 
        />
      </div>
      <div class="hidden md:flex flex-col justify-end">
        <div class="flex-1" :class="['bg-white-smoke']" />
        <div class="h-14 mt-10 w-full" />
      </div>
    </div>

    <!-- 4 -->
    <div v-else-if="items.length === 4" class="grid grid-flow-col grid-cols-4 gap-10 scroll-mx-[25px] overflow-auto">
      <div class="" v-for="item in items" :key="item.slug">
        <ProductCard :item="item" @click="$emit('click', item)" />
      </div>
    </div>

    <!-- 5 -->
    <div v-else-if="items.length === 5" class="grid grid-cols-5 md:grid-cols-5 gap-5 lg:gap-10">
      <div class="w-full mb-0 md:mb-5" v-for="item in items" :key="item.slug">
        <ProductCard 
          :item="item" 
          @click="$emit('click', item)"
          @mouseenter="$emit('hover', item.category.slug)"
          @mouseleave="$emit('blur', item.category.slug)"
        />
      </div>
    </div>

    <!-- 6 -->
    <div v-else-if="items.length === 6" class="grid grid-flow-col grid-cols-6 gap-[27.5rem] scroll-mx-[25px] overflow-auto">
      <div class="" v-for="item in items" :key="item.slug">
        <ProductCard :item="item" @click="$emit('click', item)" />
      </div>
    </div>

    <!-- 7 -->
    <div v-else-if="items.length === 7" class="grid grid-flow-col grid-cols-7 gap-[27.5rem] scroll-mx-[25px] overflow-auto">
      <div class="hidden md:flex flex-col justify-end">
        <div class="flex-1 min-h-[400px] min-w-[400px]" :class="['bg-white-smoke']" />
        <div class="h-14 mt-10 w-full" />
      </div>
      <div class="" v-for="item in items" :key="item.slug">
        <ProductCard :item="item" @click="$emit('click', item)" />
      </div>
      <div class="hidden md:flex flex-col justify-end">
        <div class="flex-1 min-h-[400px] min-w-[400px]" :class="['bg-white-smoke']" />
        <div class="h-14 mt-10 w-full" />
      </div>
    </div>

    <!-- 8 -->
    <div v-else-if="items.length === 8" class="grid grid-flow-col grid-cols-8 gap-[27.5rem] scroll-mx-[25px] overflow-auto">
      <div class="" v-for="item in items" :key="item.slug">
        <ProductCard :item="item" @click="$emit('click', item)" />
      </div>
    </div>

    <!-- 9 -->
    <div v-else-if="items.length === 9" class="grid grid-flow-col grid-cols-9 gap-[27.5rem] scroll-mx-[25px] overflow-auto">
      <div class="hidden md:flex flex-col justify-end">
        <div class="flex-1 min-h-[400px] min-w-[400px]" :class="['bg-white-smoke']" />
        <div class="h-14 mt-10 w-full" />
      </div>
      <div class="" v-for="item in items" :key="item.slug">
        <ProductCard :item="item" @click="$emit('click', item)" />
      </div>
      <div class="hidden md:flex flex-col justify-end">
        <div class="flex-1 min-h-[400px] min-w-[400px]" :class="['bg-white-smoke']" />
        <div class="h-14 mt-10 w-full" />
      </div>
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