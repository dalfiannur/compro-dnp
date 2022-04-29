<script setup lang="ts">
import { computed, toRefs } from 'vue';
import ProductCard from './ProductCard.vue';

interface Prop {
  items: any[]
}
const props = defineProps<Prop>();
const { items } = toRefs(props);
const category = computed(() => items.value.length > 0 ? items.value[0].category.slug : 'series')

</script>

<template>
  <div class="px-20 mt-10">
    <!-- 1 -->
    <div v-if="items.length === 1" class="flex gap-10">
      <div 
        class="w-1/4 h-[450px]"
        :class="['bg-' + category]"
      />
      <div class="w-2/4">
        <ProductCard :item="items[0]" />
      </div>
      <div 
        class="w-1/4 h-[450px]"
        :class="['bg-' + category]"
      />
    </div>

    <!-- 2 -->
    <div v-else-if="items.length === 2" class="flex gap-10">
      <div 
        class="w-1/4 h-[450px]"
        :class="['bg-' + category]"
      />
      <div class="w-1/4" v-for="item in items" :key="item.slug">
        <ProductCard :item="item" />
      </div>
      <div 
        class="w-1/4 h-[450px]"
        :class="['bg-' + category]"
      />
    </div>

    <!-- 3 -->
    <div v-else-if="items.length === 3" class="flex gap-10">
      <div 
        class="w-1/6 h-[450px]" 
        :class="['bg-' + category]"
      />
      <div class="w-1/4" v-for="item in items" :key="item.slug">
        <ProductCard :item="item" />
      </div>
      <div 
        class="w-1/6 h-[450px]" 
        :class="['bg-' + category]"
      />
    </div>

    <!-- 4 -->
    <div v-else-if="items.length === 4" class="flex gap-10">
      <div class="w-1/4" v-for="item in items" :key="item.slug">
        <ProductCard :item="item" />
      </div>
    </div>

    <!-- 5 -->
    <div v-else-if="items.length === 5" class="flex gap-10">
      <div class="w-1/5" v-for="item in items" :key="item.slug">
        <ProductCard :item="item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$categories: 'repair', 'prevent', 'glow', 'hydrate', 'preserve';

@each $category in $categories {
  .text-#{$category} {
    color: theme('colors.' + $category);
  }
  .border-#{$category} {
    border-color: theme('colors.' + $category);
  }
  .bg-#{$category} {
    background-color: theme('colors.' + $category);
  }
}
</style>