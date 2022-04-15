<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';

interface Prop {
  text: string;
  category: string;
  selected: string;
}

const props = defineProps<Prop>()
const hovered = ref<boolean>(false)

const { text, category } = toRefs(props)

const hoverStyle = {
  undefined: 'text-gray-500 border-gray-500',
  repair: 'border-repair text-repair',
  prevent: 'border-prevent text-prevent',
  glow: 'border-glow text-glow',
  hydrate: 'border-hydrate text-hydrate',
}

const activeStyle = {
  undefined: '',
  repair: 'bg-repair text-white',
  prevent: 'bg-prevent text-white',
  glow: 'bg-glow text-white',
  hydrate: 'bg-hydrate text-white',
}

defineExpose({
  onHover() {
    hovered.value = true
  },
  onBlur() {
    hovered.value = false
  }
})
</script>
<template>
  <button class="flex-1 py-3 font-bold tracking-[5px]  uppercase md:border-2  h-14"
    :class="{
      [hoverStyle[category]]: selected !== category && hovered ,
      [hoverStyle['undefined']]: selected !== category && !hovered,
      [activeStyle[category]] : selected === category
    }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    {{ text }}
  </button>
</template>