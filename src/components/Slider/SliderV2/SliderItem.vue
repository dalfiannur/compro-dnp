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
        <div class="absolute mx-6 sm:mx-12 top-1/2 -translate-y-1/2" v-show="currentSlide === index">
            <img :src="data.source" :alt="`slide-${index}`"  />
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
    transform: translate(-100%,-55%);
}
.slide-in-leave-to {
    margin: 15px;
    transform: translate(100%,-55%);
}
.slide-out-enter-from {
    margin: 15px;
    transform: translate(100%,-55%);
}
.slide-out-leave-to {
    margin: 15px;
    transform: translate(-100%,-55%);
}
</style>