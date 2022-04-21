<script setup lang="ts">
import { ref, defineProps, toRefs, onBeforeUnmount, onMounted } from 'vue'
import SliderItem from './SliderItem.vue';
import SliderButton from './SliderButton.vue';
import { MainBanner } from '../../../typings/MainBanner'

interface Prop {
    items: MainBanner[]
}

const props = defineProps<Prop>();

const { items } = toRefs(props);

const currentSlide = ref(0);
const slideInterval = ref<NodeJS.Timer>();
const direction = ref("right");

function setCurrentSlide(index: number) {
    currentSlide.value = index
}

function prev() {
    const index = currentSlide.value > 0 ? currentSlide.value - 1 : items.value.length - 1;
    setCurrentSlide(index);
    direction.value = "left";
    startSlideTimer()
}

function _next() {
    const index = currentSlide.value < items.value.length - 1 ? currentSlide.value + 1 : 0;
    setCurrentSlide(index);
    direction.value = "right"
}

function next() {
    _next();
    startSlideTimer()
}

function startSlideTimer() {
    stopSliderTimer();
    slideInterval.value = setInterval(() => {
        next()
    }, 5000)
}

function stopSliderTimer() {
    clearInterval(slideInterval.value!)
}

onMounted(function () {
    // startSlideTimer()
});

onBeforeUnmount(function () {
    stopSliderTimer()
})

</script>

<template>
    <div class="flex justify-center">
        <div class="relative w-full min-h-[555px] overflow-hidden">
            <SliderItem
                v-for="(item, index) in items"
                :data="item"
                :key="`slide-${index}`"
                :current-slide="currentSlide"
                :index="index"
                :direction="direction"
            ></SliderItem>
            <SliderButton @prev="prev" @next="next"></SliderButton>
        </div>
    </div>
</template>

