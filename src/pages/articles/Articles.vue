<script lang="ts" setup>
import ArticleCard from '../../components/ArticleCard.vue'

const articles = new Array<Article>(10).fill({
    img: "bg-1",
    route: '/',
    author: 'Dr. Devina',
    title: 'Pori-Pori Wajah Besar? Ikuti Cara Ini Untuk Mengecilkannya',
    time: "22/02/2022",
})
</script>

<template>
    <div class="grid grid-cols-3 gap-10 px-20">
        <ArticleCard v-for="item in articles" :key="item.title" :data="item" />
    </div>
</template>