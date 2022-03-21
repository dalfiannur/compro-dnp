<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps({
    slide: String, currentSlide: Number, index: Number, direction: String
})

const transitionEffect = computed(() => {
    return props.direction === 'right' ? 'slide-out' : 'slide-in'
})

</script>


<template>
    <transition :name="transitionEffect">
        <div class="absolute" v-show="currentSlide === index">
            <img :src="slide" :alt="`slide-${index}`" />
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