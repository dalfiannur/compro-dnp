<script setup lang="ts">
interface Prop {
  item: any
}

const { item } = defineProps<Prop>()
</script>
<template>
  <div class="relative h-full px-5 pt-5 2xl:pt-32 bg-white pb-2 md:pb-6 shadow-custom">
    <a href="/product-line-up" class="text-lg text-gray-600 font-inter">
      <span>{{ item.title }}</span> | Series
    </a>
    <div
      class="w-full h-1 my-5"
      :class="{
        'bg-repair': item.title.toLowerCase() === 'repair',
        'bg-prevent': item.title.toLowerCase() === 'prevent',
        'bg-glow': item.title.toLowerCase() === 'glow',
        'bg-hydrate': item.title.toLowerCase() === 'hydrate',
        'bg-preserve': item.title.toLowerCase() === 'preserve',
      }"
    />
    <ul class="hidden xl:block text-justify text-gray-600">
      <li v-for="used in item.usedAs" :key="used">
        {{ used }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.shadow-custom {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>