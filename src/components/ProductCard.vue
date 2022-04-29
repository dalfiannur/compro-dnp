<script setup lang="ts">
import { inject, ref, toRefs } from "vue";
import { Product } from "../typings/Product";

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
    class="relative flex items-start flex-none h-full border border-white"
    :class="{ ['!border-' + hoverCategory]: isHovered && isSeries && hoverCategory === item?.category.slug, }"
    @mouseenter="innerHovered = true"
    @mouseleave="innerHovered = false"
  >
    <div v-if="item">
      <div
        class="relative p-10 aspect-[4/5]"
        :class="{ 'bg-white-smoke': isSeries, ['bg-' + selectedCategory]: !isSeries, }"
      >
        <img
          class="object-cover w-full h-full filter"
          :src="item.images[0].imageSourceUrl"
        />
        <div
          class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full cursor-pointer"
          :class="{
            ['bg-' + selectedCategory]:
              innerHovered && !isSeries && hoverCategory === item?.category.slug,
            'bg-opacity-70': !isSeries && isHovered,
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
