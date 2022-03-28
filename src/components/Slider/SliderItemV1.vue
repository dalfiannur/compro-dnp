<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps({
    slide: String, link: String, currentSlide: Number, index: Number, direction: String
})

const transitionEffect = computed(() => {
    return props.direction === 'right' ? 'slide-out' : 'slide-in'
})

</script>


<template>
    <transition :name="transitionEffect">
        <a class="absolute" :href="link" v-show="currentSlide === index">
            <img :src="slide" :alt="`slide-${index}`" />
        </a>
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
    transform: translateX(-100%);
}
.slide-in-leave-to {
    transform: translateX(100%);
}
.slide-out-enter-from {
    transform: translateX(100%);
}
.slide-out-leave-to {
    transform: translateX(-100%);
}
</style>