<script setup lang="ts">
interface Prop {
  data: any[]
  title: string
}

const { data, title } = defineProps<Prop>()
</script>
<template>
  <div class="relative h-full px-5 pt-5 lg:pt-10 2xl:pt-20 bg-white pb-2 md:pb-6 border shadow-custom">
    <a href="/product-line-up" class="text-lg text-gray-600 font-inter hover:font-bold" :class="{
      'hover:text-repair': title.toLowerCase() === 'repair',
      'hover:text-prevent': title.toLowerCase() === 'prevent',
      'hover:text-glow': title.toLowerCase() === 'glow',
      'hover:text-hydrate': title.toLowerCase() === 'hydrate',
      'hover:text-preserve': title.toLowerCase() === 'preserve',
    }">
      <span>{{ title }}</span> | Series
    </a>
    <div class="w-full h-1 my-5" :class="{
      'bg-repair': title.toLowerCase() === 'repair',
      'bg-prevent': title.toLowerCase() === 'prevent',
      'bg-glow': title.toLowerCase() === 'glow',
      'bg-hydrate': title.toLowerCase() === 'hydrate',
      'bg-preserve': title.toLowerCase() === 'preserve',
    }" />
    <ul class="hidden xl:block text-justify text-gray-600">
      <li v-for="used in data" :key="used">
        <a :href="'/products/' + used.slug" @click="$router.push('/products/' + used.slug)">{{ used.name }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.shadow-custom {
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.1);
}
</style>