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
          <transition name="icon-fadein">
              <img
                v-if="!isSeries && innerHovered"
                :src="getIcon(item.category.slug)"
                class="hidden w-14 h-14 animate__fadeInUp"
                :class="{ '!block': innerHovered }"
              />
          </transition>
          <transition name="text-fadein">
            <h5 v-if="innerHovered"
              class="hidden mt-2 text-2xl text-center text-white"
              :class="{
                '!block': innerHovered,
              }"
            >
              {{ item.usedAs }}
            </h5>
          </transition>
            
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
.icon-fadein-enter-active {
  transition: all 0.35s ease-out;
}

.icon-fadein-leave-active {
  transition: all 0.35s cubic-bezier(1, 0.5, 0.8, 1);
}

.icon-fadein-enter-from,
.icon-fadein-leave-to {
  transform: translateY(60px);
  opacity: 0;
}

.text-fadein-enter-active {
  transition: all 0.35s ease-in-out;
  transition-delay: 0.2s;
}

.text-fadein-leave-active {
  transition: all 0.35s cubic-bezier(1, 0.5, 0.8, 1);
}

.text-fadein-enter-from,
.text-fadein-leave-to {
  transform: translateY(40px);
  opacity: 0;
}
</style>