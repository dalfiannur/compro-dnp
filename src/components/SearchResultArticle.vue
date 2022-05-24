<script lang="ts" setup>
import { ref } from "vue";
import ArticleCard from "./ArticleCard.vue";
import useGetQueries from "../composable/useGetQueries";
import { Article } from "../typings/Article";

const sortBy = ref<string>("latest");

const query = new URLSearchParams();
const { data: articles } = useGetQueries<Article>("articles", {
    perPage: 6,
    query,
    autoFetch: true
});

const sortPopular = () => {
    sortBy.value = "popular";
    query.set("sortBy", "createdAt");
    query.set("asc", "true");
};

const sortLatest = () => {
    sortBy.value = "latest";
    query.set("sortBy", "createdAt");
    query.set("asc", "false");
};
</script>

<template>
    <div class="w-full flex justify-center mx-auto mt-3 md:mt-6">
        <div class="grid grid-cols-1 gap-10 md:gap-16 py-8 md:grid-cols-2 xl:grid-cols-2">
            <ArticleCard v-for="(page, index) in articles" :key="index" :data="page" />
        </div>
    </div>
</template>
