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
    class="flex-1 py-3 font-bold tracking-[5px] uppercase md:border-2 h-14 text-gray-500 border-gray-500"
    :class="{
      [`!border-${hoverCategory} !text-${hoverCategory}`]:
        selectedCategory !== category &&
        (isHovered || hovered) &&
        hoverCategory === category,
      [`!border-${selectedCategory} bg-${selectedCategory} !text-white`]:
        selectedCategory === category,
    }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    {{ text }}
  </button>
</template>
