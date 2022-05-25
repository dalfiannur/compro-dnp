<script setup lang="ts">
import { inject, ref, toRefs } from "vue";
import { Product } from "../../../../typings/Product";

interface Prop {
  item?: Product;
}

const props = defineProps<Prop>();
const { item } = toRefs(props);
const innerHovered = ref<boolean>(false);
const isHovered = inject("isHovered", ref<boolean>(false));
const isSeries = inject("isSeries", ref<boolean>(true));
const hoverCategory = inject("hoverCategory", ref<string>(""));
const selectedCategory = inject("selectedCategory", ref<string>("series"));

const getIcon = (category: string) => {
  return `/img/${category.toLowerCase()}.svg`;
};
</script>

<template>
  <div
    class="relative flex items-start flex-none border border-white w-full"
    :class="{ 
      ['border-' + hoverCategory]: isHovered && isSeries && hoverCategory === item?.category.slug,
    }"
    @mouseenter="innerHovered = true"
    @mouseleave="innerHovered = false"
  >
    <div v-if="item" class="w-full">
      <div
        class="relative w-full flex justify-center items-center py-[50%] max-h-[300px]"
        :class="{ 'bg-white-smoke': isSeries, ['bg-' + selectedCategory]: !isSeries, }"
      >
        <img
          class="w-full max-h-[400px] object-contain aspect-square filter"
          :src="item.images[0].imageSourceUrl"
        />
        <div
          class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full cursor-pointer"
          :class="{
            ['bg-' + selectedCategory + '-hover']:innerHovered && !isSeries,
          }"
        >
          <img
            v-if="!isSeries"
            :src="getIcon(item.category.slug)"
            class="hidden w-14 h-14 border sm:border-2 lg:border-[3px] rounded-full border-white"
            :class="{ '!block': innerHovered }"
          />
          <h5
            class="hidden mt-2 text-2xl text-center text-white"
            :class="{
              '!block': innerHovered,
            }"
          >
            {{ item.usedAs }}
          </h5>
        </div>
      </div>
      <div
        class="mt-10 text-2xl text-center h-14 font-din-next-lt-pro-light"
        :class="{
          ['text-' + hoverCategory]: innerHovered && hoverCategory === item.category.slug,
        }"
      >
        {{ item.name }}
      </div>
    </div>
    <div v-else class="absolute top-0 bottom-0 w-full">
      <div
        class="w-full aspect-[4/5]"
        :class="{
          ['bg-' + selectedCategory]: !isSeries,
        }"
      />
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

</style>

<style scoped>
.shutter-out-vertical {
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background: #e1e1e1;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.shutter-out-vertical:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #2098D1;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.shutter-out-vertical:hover, .shutter-out-vertical:focus, .shutter-out-vertical:active {
  color: white;
}
.shutter-out-vertical:hover:before, .shutter-out-vertical:focus:before, .shutter-out-vertical:active:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}
</style>