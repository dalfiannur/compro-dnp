<script setup lang="ts">
import { defineProps } from 'vue'

interface Prop {
    name: string;
    href: string;
}

const props = defineProps<Prop>()

</script>

<template>
    <button
        class="text-sm border border-white font-questrial text-white uppercase tracking-[0.6em] border-1 h-10 w-full mt-4"><a
            :href="href">{{ name }}</a></button>
</template>