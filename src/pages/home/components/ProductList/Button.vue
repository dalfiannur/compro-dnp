<script setup lang="ts">
import { computed, inject, ref, toRefs, watch } from "vue";

interface Prop {
  text: string;
  category: string;
  selected: string;
}

const props = defineProps<Prop>();
const hovered = ref<boolean>(false);

const { text, category } = toRefs(props);

const isHovered = inject("isHovered", ref<boolean>(false));
const hoverCategory = inject("hoverCategory", ref<string>("series"));
const selectedCategory = inject("selectedCategory", ref<string>("series"));

watch([selectedCategory, category], ([a, b]) => {
  console.log(a, b);
});
</script>
<template>
  <button
    class="flex-1 py-3 font-questrial tracking-[5px] uppercase border h-14 border-baseColor"
    :class="{
      [`border-${hoverCategory} text-${hoverCategory}`]:
        selectedCategory !== category &&
        (isHovered || hovered) &&
        hoverCategory === category,
      [`border-${selectedCategory} bg-${selectedCategory} text-white`]:
        selectedCategory === category,
    }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
  $categories: 'repair', 'prevent', 'glow', 'hydrate', 'preserve';
  @each $category in $categories {
    .border-#{$category} {
      --tw-bg-opacity: 1;
      border-color: theme('colors.' + $category);
    }
    .text-#{$category} {
      --tw-bg-opacity: 1;
      color: theme('colors.' + $category);
    }
    .bg-#{$category} {
      --tw-bg-opacity: 1;
      background-color: theme('colors.' + $category);
    }
  }
  .text-white {
    color: theme('colors.white');
  }
</style>
