<script setup lang="ts">
  import {ref, defineProps, toRefs, onBeforeUnmount, onMounted} from 'vue'
  import SliderItem from './SliderItem.vue';
  import SliderButton from './SliderButton.vue';
  import {MainBanner} from '../../../typings/MainBanner'

  interface Prop {
    items: MainBanner[]
  }

  const props = defineProps<Prop>();

  const {items} = toRefs(props);

  const currentSlide = ref(0);
  const slideInterval = ref<NodeJS.Timer>();
  const direction = ref("right");
  let isSliding = false;
  
  const banner = ref<any>();
  const bannerHeight = ref(0);

  function setCurrentSlide(index: number) {
    currentSlide.value = index
  }

  function prev() {
    if (isSliding != true) {
      const index = currentSlide.value > 0 ? currentSlide.value - 1 : items.value.length - 1
      setCurrentSlide(index)
      direction.value = "left"
      sliding()
      startSlideTimer()
    }
  }

  function next() {
    if (isSliding != true) {
      const index = currentSlide.value < items.value.length - 1 ? currentSlide.value + 1 : 0
      setCurrentSlide(index)
      direction.value = "right"
      sliding()
      startSlideTimer()
    }
  }

  function startSlideTimer() {
    stopSliderTimer();
    slideInterval.value = setInterval(() => {
      next()
    }, 6000)
  }

  function stopSliderTimer() {
    clearInterval(slideInterval.value!)
  }

  function sliding() {
    isSliding = true;
    setTimeout(function () {
      isSliding = false;
    }, 1000);
  }

  onBeforeUnmount(function () {
    stopSliderTimer()
  })
  onMounted(function () {
  // startSlideTimer()
  console.log(bannerHeight)
  setTimeout(() => {
    bannerHeight.value = banner.value.offsetWidth / 2.3;
    console.log(bannerHeight.value);
  }, 500);
});

</script>

<template>
  <div class="flex justify-center">
    <div 
      ref="banner"
      class="relative w-full max-h-[200px] md:max-h-[none] overflow-hidden"
      :style="`height: ${bannerHeight}px;`"
      >
      <SliderItem
        v-for="(item, index) in items"
        :data="item"
        :key="`slide-${index}`"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
      />
      <SliderButton @prev="prev" @next="next" />
    </div>
  </div>
</template>

