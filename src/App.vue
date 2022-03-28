<script setup lang="ts">
// import { ref, defineProps } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import SliderV1 from './components/Slider/SliderV1.vue'

const imagesSlider = ['/src/assets/slider1_0.png', '/src/assets/slider1_1.png', '/src/assets/slider1_2.png']
const linksSlider = ['page1', 'page2', 'page3']

</script>

<template>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <SliderV1 :slides="imagesSlider" :links="linksSlider"></SliderV1>
</template>