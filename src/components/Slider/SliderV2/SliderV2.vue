<script setup lang="ts">
import { ref, defineProps, toRefs, onBeforeUnmount, onMounted } from 'vue'
// @ts-ignore
import SliderItem from './SliderItem.vue';
// @ts-ignore
import SliderButton from './SliderButton.vue';
import { SliderV2 } from '../../../typings/SliderV2'

interface Prop {
    items: SliderV2[]
}

const props = defineProps<Prop>()
const { items } = toRefs(props)
const currentSlide = ref(0)
const slideInterval = ref<NodeJS.Timer>()
const direction = ref("right")

const banner = ref<any>()
const bannerWidth = ref(0)

function setCurrentSlide(index: number) {
    currentSlide.value = index
}

function prev() {
    const index = currentSlide.value > 0 ? currentSlide.value - 1 : items.value.length - 1
    setCurrentSlide(index)
    direction.value = "left"
    startSlideTimer()
}

function _next() {
    const index = currentSlide.value < items.value.length - 1 ? currentSlide.value + 1 : 0
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
    clearInterval(slideInterval.value!)
}

onMounted(function () {
    // startSlideTimer()
    setTimeout(() => {
        bannerWidth.value = banner.value.offsetWidth / 1.96;
        console.log(bannerWidth.value)
    }, 500);
})

onBeforeUnmount(function () {
    stopSliderTimer()
})

</script>

<template>
    <div class="flex justify-center">
        <div
            ref="banner"
            class="relative w-full overflow-hidden bg-neutral-100"
            :style="`height: ${bannerWidth}px;`"
        >
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

