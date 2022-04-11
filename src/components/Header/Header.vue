<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import ProductCard from './ProductCard.vue'

const hovered = ref<number | null>(null)
const menu = reactive({
    open: true
})

const search = reactive({
    text: '',
    data: []
})

const searchProduct = reactive({
    text: '',
    data: []
})

const show = ref<number>(0)

const productSeries = [
    {
        title: 'REPAIR',
        usedAs: [
            'Skin Tranquilty',
            'Refine Night'
        ]
    },
    {
        title: 'PREVENT',
        usedAs: [
            'Antioxidant Antaxhanthin',
            'Antioxidant Resveratrol',
        ]
    },
    {
        title: 'GLOW',
        usedAs: [
            'C & E with Ferulic',
            'Antioxidant C Ferulic',
            'Antioxidant C Sylmarin',
            'Tranex & Kojic with B3'
        ]
    },
    {
        title: 'HYDRATE',
        usedAs: [
            'Caffeine Hydrating',
            'Phyto Hydro',
            'Antioxidant C Sylmarin',
            'Tranex & Kojic with B3'
        ]
    }
]

const onResize = () => {
    if (window.innerWidth < 600) {
        menu.open = false
    }
}

const onMouseLeave = () => {
    search.text = ''
    search.data = []
    hovered.value = null
}

onMounted(() => {
    onResize()
    window.addEventListener('resize', () => {
        onResize()
    })
})
</script>
<template>
    <div id="#header" class="fixed top-0 left-0 z-20 flex items-center justify-between w-full h-24 px-20 bg-white">
        <div>
            <img class="object-cover h-16" src="/img/logo-black.svg" />
        </div>
        <button class="block md:hidden" @click="menu.open = !menu.open">
            <img src="/img/hamburger-menu.svg" class="w-10 h-10" />
        </button>

        <Transition name="fade">
            <ul class="absolute left-0 flex flex-col w-full gap-5 p-5 bg-white md:w-fit md:p-0 md:gap-20 top-24 md:flex-row md:top-0 md:static"
                v-show="menu.open">
                <li>
                    <a href="#" @click.prevent @mouseenter="hovered = 0" class="font-semibold text-gray-600 font-din-next-lt-pro-light">Products</a>
                    <Transition name="fade">
                        <div v-show="hovered === 0" @mouseleave="onMouseLeave"
                            class="absolute left-0 flex w-full px-20 bg-white shadow-lg top-24">
                            <div class="w-[360px] -ml-24">
                                <div class="flex items-center h-full pl-24 bg-gray-100">
                                    <h3 class="text-4xl text-hydrate">Explore Our Products</h3>
                                </div>
                            </div>
                            <div class="relative flex-1">
                                <div class="grid flex-1 w-full h-full grid-cols-4 gap-10 pb-10">
                                    <ProductCard v-for="(item, index) in productSeries" :key="item.title" :item="item"
                                        @mouseenter="show = index" />
                                </div>
                                <div class="absolute top-0 right-[0px] flex gap-10 -left-[80px]">
                                    <div class="h-20 basis-1/4" />
                                    <div class="basis-3/4">
                                        <div class="flex order-2 w-full h-20 col-span-3">
                                            <div class="relative flex-1 h-14 bg-white-smoke">
                                                <input
                                                    class="w-full h-full text-gray-600 font-din-next-lt-pro-light px-14 bg-white-smoke focus:outline-none"
                                                    v-model="search.text" placeholder="Search..." />
                                                <Transition name="fade">
                                                    <div class="absolute w-full bg-gray-200 top-12 px-14"
                                                        v-show="search.text">
                                                        <ul>
                                                            <li class="py-3 text-gray-400 font-din-next-lt-pro-bold">
                                                                REPAIR | Lorem Ipsum</li>
                                                        </ul>
                                                    </div>
                                                </Transition>
                                            </div>
                                            <button class="w-14 h-14 bg-hydrate">S</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </Transition>
                </li>

                <li>
                    <a href="#" @click.prevent @mouseenter="hovered = 1" class="font-semibold text-gray-600 font-din-next-lt-pro-light">Articles</a>
                    <Transition name="fade">
                        <div v-show="hovered === 1" class="absolute left-0 flex w-full px-20 bg-white shadow-lg top-24"
                            @mouseleave="onMouseLeave">
                            <div class="h-full -ml-24">
                                <div class="pl-24 bg-gray-100 w-[380px] h-[300px] py-10">
                                    <a href="/articles" @click.prevent="$router.push('/articles')"
                                        class="text-4xl text-hydrate">Article</a>
                                    <p class="mt-5 text-gray-500">
                                        Search specific articles and
                                        related products by typing on
                                        search bar
                                    </p>
                                </div>
                            </div>
                            <div class="flex-1 my-10 -ml-32">
                                <div class="flex justify-end mt-6 border-t-2 border-hydrate">
                                    <div class="flex">
                                        <div class="relative">
                                            <input v-model="search.text" type="search"
                                                class="w-[500px] bg-gray-200 h-14 focus:outline-none px-5" />
                                            <transition name="fade">
                                                <div v-show="search.text.length > 3"
                                                    class="absolute w-full p-5 bg-gray-300">
                                                    <div
                                                        class="flex items-center justify-between pb-2 border-b-2 border-gray-400">
                                                        <h3 class="text-gray-600">5 Kandungan Skincare untuk Kulit Sehat
                                                            dan Glowing</h3>
                                                        <a class="text-sm text-hydrate">Article</a>
                                                    </div>
                                                    <div class="flex items-center justify-between pt-2">
                                                        <h3 class="text-gray-600">Caffeine Hydrating</h3>
                                                        <a class="text-sm text-hydrate">Product</a>
                                                    </div>
                                                </div>
                                            </transition>
                                        </div>
                                        <button class="text-white w-14 h-14 bg-hydrate">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </li>

                <li>
                    <a href="#" @click.prevent @mouseenter="hovered = 2" class="font-semibold text-gray-600 font-din-next-lt-pro-light">About Us</a>
                    <Transition name="fade">
                        <div v-show="hovered === 2" class="absolute left-0 flex w-full px-20 bg-white shadow-lg top-24"
                            @mouseleave="hovered = null">
                            <div class="-ml-24 cursor-pointer" @click="$router.push('/about-us')">
                                <div class="px-24 bg-gray-100 w-[400px] h-full flex flex-col justify-center py-14">
                                    <a href="/about-us" @click.prevent="$router.push('/about-us')"
                                        class="text-4xl text-hydrate">About Us</a>
                                    <p class="mt-10 text-justify text-gray-700">
                                        PT Dermedic Phar Este is
                                        established in 2022 as the first
                                        local brand with premium and
                                        professional skin care products in
                                        Indonesia.
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col flex-1 px-20 py-14">
                                <h4 class="text-4xl text-hydrate">Want to know more about us?</h4>
                                <p class="max-w-[460px] mt-5 text-gray-700">
                                    Caffeine is a powerful antioxidant and anti-aging. While
                                    combined with green tea and polyphenol, caffeine can also
                                </p>
                                <div class="flex gap-5 mt-5">
                                    <div>
                                        <a href="https://wa.me/6282261050567?text=Hallo"
                                            class="flex items-center justify-center rounded-full w-14 h-14 bg-hydrate">
                                            <img src="/img/whatsapp.svg" class="w-8 h-8 text-white" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="mailto:support@dpelab.id"
                                            class="flex items-center justify-center rounded-full w-14 h-14 bg-hydrate">
                                            <img src="/img/mail.svg" class="w-8 h-8 text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </li>
            </ul>
        </Transition>  </div>
</template>

<style scoped>
.fade-enter-active {
    transition: all .2s ease-out;
}

.fade-leave-active {
    transition: all .2s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>