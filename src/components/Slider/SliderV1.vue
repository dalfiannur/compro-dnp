<script setup lang="ts">
import { ref, defineProps, PropType, onBeforeUnmount, onMounted } from 'vue'
import SliderItemV1 from './SliderItemV1.vue';
import SliderButtonV1 from './SliderButtonV1.vue';

const props = defineProps({
    slides: Array as PropType<string[]>,
})

const currentSlide = ref(0)
const slideInterval = ref(0)
const direction = ref("right")

function setCurrentSlide(index: number) {
    currentSlide.value = index
}

function prev() {
    const index = currentSlide.value > 0 ? currentSlide.value - 1 : props.slides?.length - 1
    setCurrentSlide(index)
    direction.value = "left"
    startSlideTimer()
}

function _next() {
    const index = currentSlide.value < props.slides?.length - 1 ? currentSlide.value + 1 : 0
    setCurrentSlide(index)
    direction.value = "right"
}

function next() {
    _next()
    startSlideTimer()
}

function startSlideTimer() {
    stopSliderTimer()
    slideInterval.value = setInterval(() => {
        next()
    }, 5000)
}

function stopSliderTimer() {
    clearInterval(slideInterval.value)
}

onMounted(function () {
    startSlideTimer()
})

onBeforeUnmount(function () {
    stopSliderTimer()
})

</script>

<template>
    <div class="flex justify-center">
        <div class="relative w-[950px] h-[400px] overflow-hidden">
            <SliderItemV1
                v-for="(slide, index) in slides"
                :slide="slide"
                :key="`slide-${index}`"
                :current-slide="currentSlide"
                :index="index"
                :direction="direction"
            ></SliderItemV1>
            <SliderButtonV1 @prev="prev" @next="next"></SliderButtonV1>
        </div>
    </div>
</template>

