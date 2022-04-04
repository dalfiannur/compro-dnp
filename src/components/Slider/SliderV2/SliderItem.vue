<script setup lang="ts">
import { defineProps, computed, toRefs } from 'vue'
import { SliderV2 } from '../../../typings/SliderV2'

interface Prop {
    data: SliderV2;
    currentSlide: number;
    index: number;
    direction: string;
}

const props = defineProps<Prop>()

const { direction, data } = toRefs(props)

const transitionEffect = computed(() => {
    return direction.value === 'right' ? 'slide-out' : 'slide-in'
})
</script>


<template>
    <transition :name="transitionEffect">
        <div
            class="absolute m-12"
            v-show="currentSlide === index"
        >
            <div class="relative flex items-end justify-end h-full">
                <img :src="data.source" :alt="`slide-${index}`" class="block h-full" />
            </div>
        </div>
    </transition>
</template>

<style scoped>
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
    transition: all 1s ease-in-out;
}
.slide-in-enter-from {
    margin: 15px;
    transform: translateX(-100%);
}
.slide-in-leave-to {
    margin: 15px;
    transform: translateX(100%);
}
.slide-out-enter-from {
    margin: 15px;
    transform: translateX(100%);
}
.slide-out-leave-to {
    margin: 15px;
    transform: translateX(-100%);
}
</style>