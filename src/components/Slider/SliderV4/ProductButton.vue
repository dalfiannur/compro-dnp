<script setup lang="ts">
import { defineProps } from 'vue'

interface Prop {
    name: string;
}

const props = defineProps<Prop>()

</script>

<template>
    <button
        class="text-sm text-white font-questrial uppercase tracking-[0.6em] border-2 h-10 w-full mt-4"
    >{{ name }}</button>
</template>