<script lang="ts" setup>
import { toRefs } from "vue";
import ArticleCard from "./ArticleCard.vue";

interface Props {
    items: any[];
}

const props = defineProps<Props>();
const { items } = toRefs(props);
</script>

<template>
    <div class="w-full flex justify-center mx-auto mt-3 md:mt-6">
        <div class="grid grid-cols-1 gap-10 md:gap-16 py-8 md:grid-cols-2 xl:grid-cols-2">
            <ArticleCard v-for="(page, index) in items" :key="index" :data="page" />
        </div>
    </div>
</template>
