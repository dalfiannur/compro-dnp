<script setup lang="ts">
import { ref } from 'vue'
// Import Components
import BannerSlider from '../../components/Slider/SliderV1/SliderV1.vue'
import ProductSlider from '../../components/Slider/ProductSlider.vue'
import ProductList from './components/ProductList.vue'
import HowToFind from '../../components/HowToFind.vue'
import ArticleCard from '../../components/ArticleCard.vue'

// Import Composable
import useGetFeaturedProduct from '../../composable/useGetFeaturedProduct'
import useGetMainBanners from '../../composable/useGetMainBanners'

// Initial Composable
const { data: featuredProducts } = useGetFeaturedProduct()
const { data: mainBanners } = useGetMainBanners()

const articles = ref<any[]>([
    {
        img: "bg-1",
        title: "Pori-pori Wajahmu Membesar? Ikuti Cara ini untuk Mengecilkannya",
        author: "Dr. Devina",
        time: "22/02/2022",
        route: "#",
    },
    {
        img: "bg-2",
        title: "5 Kandungan Skincare untuk Kulit Sehat dan Glowing",
        author: "Dr. Eri",
        time: "19/02/2022",
        route: "#",
    },
    {
        img: "bg-3",
        title: "Bahaya Skincare Share in Jar, Hindari Memakai Produk ini",
        author: "Dr. David",
        time: "",
        route: "#",
    },
    {
        img: "bg-2",
        title: "Hindari Memakai Produk ini",
        author: "Dr. Rovy",
        time: "",
        route: "#",
    },
]);
</script>

<template>
    <div id="banner" class="hidden md:block">
        <BannerSlider :items="mainBanners" />
    </div>

    <div id="product-slider" class="pt-10 md:pt-0">
        <ProductSlider :items="featuredProducts" />
    </div>
    <div id="product-list" class="mt-20">
        <ProductList />
    </div>
    <div id="how-to-find" class="mt-20 mb-20">
        <HowToFind />
    </div>
    <div id="article" class="grid grid-cols-1 gap-10 px-5 md:px-20 md:grid-cols-3">
        <ArticleCard v-for="item in articles" :data="item" />
    </div>
</template>