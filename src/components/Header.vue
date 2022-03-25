<script lang="ts" setup>
import { ref, reactive } from 'vue'

const hovered = ref<number | null>(null)

const search = reactive({
    text: '',
    data: []
})
</script>
<template>
    <div
        class="fixed top-0 left-0 z-20 flex items-center justify-between w-full h-24 px-20 bg-white"
    >
        <div>
            <img class="object-cover w-20 h-20" />
        </div>

        <ul class="flex gap-20">
            <li>
                <a href="#" @click.prevent @mouseenter="hovered = 0">Products</a>
                <Transition name="fade">
                    <div
                        v-show="hovered === 0"
                        class="absolute left-0 flex w-full px-20 pb-24 bg-white shadow-lg top-24"
                        @mouseleave="hovered = null"
                    >
                        <div class="w-[320px] -ml-24">
                            <div class="pl-24 bg-gray-100 w-[380px] h-full flex items-center">
                                <h3 class="text-4xl text-hydrate">Explore Our Products</h3>
                            </div>
                        </div>
                        <div class="grid flex-1 grid-cols-4 gap-10 my-10">
                            <div
                                class="px-5 py-20 bg-white shadow-custom"
                                v-for="item in [1, 2, 3, 4]"
                                :key="item"
                            >
                                <div
                                    class="text-justify"
                                >Caffeine is a powerful natural antioxidant.</div>
                                <div class="w-full h-1 mt-5 bg-hydrate" />
                            </div>
                        </div>
                    </div>
                </Transition>
            </li>

            <li>
                <a href="#" @click.prevent @mouseenter="hovered = 1">Articles</a>
                <Transition name="fade">
                    <div
                        v-show="hovered === 1"
                        class="absolute left-0 flex w-full px-20 bg-white shadow-lg top-24"
                        @mouseleave="hovered = null"
                    >
                        <div class="h-full -ml-24">
                            <div
                                class="pl-24 bg-gray-100 w-[380px] h-[300px] py-10"
                            >
                                <h3 class="text-4xl text-hydrate">Article</h3>
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
                                        <input
                                            v-model="search.text"
                                            type="search"
                                            class="w-[500px] bg-gray-200 h-14 focus:outline-none px-5"
                                        />
                                        <transition name="fade">
                                            <div
                                                v-show="search.text.length > 3"
                                                class="absolute w-full p-5 bg-gray-300"
                                            >
                                                <div
                                                    class="flex items-center justify-between pb-2 border-b-2 border-gray-400"
                                                >
                                                    <h3
                                                        class="text-gray-600"
                                                    >5 Kandungan Skincare untuk Kulit Sehat dan Glowing</h3>
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
                <a href="#" @click.prevent @mouseenter="hovered = 2">About Us</a>
                <Transition name="fade">
                    <div
                        v-show="hovered === 2"
                        class="absolute left-0 flex w-full px-20 bg-white shadow-lg top-24"
                        @mouseleave="hovered = null"
                    >
                        <div class="-ml-24 cursor-pointer" @click="$router.push('/about-us')">
                            <div
                                class="px-24 bg-gray-100 w-[400px] h-full flex flex-col justify-center py-14"
                            >
                                <h3 class="text-4xl text-hydrate">About Us</h3>
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
                                    <div class="rounded-full w-14 h-14 bg-hydrate" />
                                </div>
                                <div>
                                    <div class="rounded-full w-14 h-14 bg-hydrate" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.shadow-custom {
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
}

.fade-enter-active {
    transition: all 1.2s ease-out;
}

.fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>