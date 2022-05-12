<script setup lang="ts">
import { defineEmits } from 'vue'
const emit = defineEmits(['prev', 'next'])
</script>

<template>
    <button class="top-1/2 pb-1 absolute left-3 sm:left-6 h-10 w-10 border border-gray-1" @click="$emit('prev')">&lt;</button>
    <button class="top-1/2 pb-1 absolute right-3 sm:right-6 h-10 w-10 border border-gray-1" @click="$emit('next')">&gt;</button>
</template>