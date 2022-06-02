<script setup lang="ts">
import { inject, ref, toRefs } from "vue";
import { Product } from "../../typings/Product";

interface Prop {
  item?: Product;
}

const props = defineProps<Prop>();
const { item } = toRefs(props);
const hovered = inject("hovered", ref<boolean>(false));


const getBG = (category: string) => {
  return `/img/BG_${category.charAt(0).toUpperCase() + category.slice(1)}.png`;
};
</script>

<template>
  <div class="relative flex items-start flex-none border border-white w-full" @mouseover="hovered = true" @mouseleave="hovered = false">
    <div v-if="item" class="w-full">
      <a :href="'/products/' + item.slug">
        <div
          class="relative w-full flex justify-center items-center py-[50%] max-h-[300px]"
          :class="[ 'bg-white-smoke' ]"
        >

        <transition name="fade">
          <img v-if="hovered"
            class="absolute w-full h-full max-h-[400px] aspect-square"
            :src="getBG(item.category.slug)"
          />
        </transition>
          
          <img
            class="absolute w-full max-h-[400px] object-contain aspect-square filter"
            :src="item.images[0].imageSourceUrl"  
          />
        </div>
        <div
          class="mt-10 text-2xl text-center h-14 font-questrial text-gray-500"
          :class="{[ 'text-' + item.category.slug ]: !hovered === false}"
        >
          {{ item.name }}
        </div>
      </a>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
$categories: 'repair', 'prevent', 'glow', 'hydrate', 'preserve';
$preserve: '#ae1857';

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
  .bg-#{$category}-hover {
    --color-repair: rgba(92, 132, 195, .7);
    --color-prevent: rgb(113, 70, 155, .7);
    --color-glow: rgba(247, 191, 111, .7);
    --color-hydrate: rgba(99, 196, 180, .7);
    --color-preserve: rgba(174, 24, 87, .7);
    background-color: var(--color-#{$category});
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
