<script lang="ts" setup>
import ArticleCard from '../../components/ArticleCard.vue'
import SliderV3 from '../../components/Slider/SliderV3.vue';

const articles = new Array<Article>(10).fill({
    img: "bg-1",
    route: '/',
    author: 'Dr. Devina',
    title: 'Pori-Pori Wajah Besar? Ikuti Cara Ini Untuk Mengecilkannya',
    time: "22/02/2022",
})
</script>

<template>
    <div>
        <SliderV3 />
    </div>
    <div class="flex justify-center">
        <div class="grid flex-1 max-w-screen-xl gap-10 px-20 mt-10 grid-md-cols-1 md:grid-cols-2">
            <ArticleCard v-for="item in articles" :key="item.title" :data="item" />
        </div>
    </div>
</template>