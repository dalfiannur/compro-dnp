<script setup lang="ts">
import { ref } from "vue";
import { gsap } from "gsap";

import useGetFeaturedProduct from '../../composable/useGetFeaturedProduct';

const { data: featuredProducts } = useGetFeaturedProduct()

// const items = ref<any[]>([
//     {
//         id: 1,
//         img: "bg-1",
//     },
//     {
//         id: 2,
//         img: "bg-2",
//     },
//     {
//         id: 3,
//         img: "bg-3",
//     },
//     {
//         id: 4,
//         img: "bg-2"
//     }
// ]);

const loadImage = (path: String) => {
    return "/img/" + path + ".jpg";
};

const activeSlides = ref<number>(0);

const next = (key: number) => {
    gsap.to(".selected-slide", {
        xPercent: -(key * 100),
        duration: 1,
    });
};

const prev = (key: number) => {
    gsap.to(".selected-slide", {
        xPercent: -(100 * key),
        duration: 1,
    });
};

const nextSlide = () => {
    if (activeSlides.value === featuredProducts.value.length - 1) {
        activeSlides.value = 0;
    }
    else {
        activeSlides.value++
    }
    next(activeSlides.value)
}

const prevSlide = () => {
    if (activeSlides.value === 0) {
        activeSlides.value = featuredProducts.value.length - 1
    }
    else {
        activeSlides.value--
    }
    prev(activeSlides.value)
}

const goTo = (key: number) => {
    if (key >= activeSlides.value) {
        next(key);
    } else {
        prev(key);
    }

    activeSlides.value = key;
};

</script>

<template>
    <div class="flex justify-center w-full px-10">
        <div class="relative h-full w-full sm:w-[600px] lg:w-[500px] bg-white-smoke justify-center items-center">
            <div class="w-full justify-center">
                <div class="flex aspect-square overflow-hidden">
                    <div
                        class="flex-none w-full h-full p-12 selected-slide"
                        v-for="item in featuredProducts"
                        :key="item.id"
                    >
                        <img
                            class="object-cover cursor-pointer w-full aspect-square"
                            :src="item.images[1].image_source_url"
                        />
                    </div>
                </div>

                <div class="flex items-center justify-center flex-1 bg-white">
                    <div
                        v-for="(item, index) in featuredProducts"
                        :key="item.id"
                        class="flex items-center justify-center w-full h-3 border border-hydrate cursor-pointer"
                        @click="goTo(index)"
                    >
                        <div v-if="activeSlides === index" class="w-full h-full bg-[#77c6bc]" />
                    </div>
                </div>
            </div>
            <div class="hidden lg:flex">
                <button
                    @click="prevSlide"
                    class="top-60 pb-1 absolute -left-6 h-10 w-10 text-[#77c6bc] border border-[#77c6bc]"
                >&lt;
                </button>
                <button
                    @click="nextSlide"
                    class="top-60 pb-1 absolute -right-6 h-10 w-10 border text-[#77c6bc] border-[#77c6bc]"
                >&gt;
                </button>
            </div>
           
            
        </div>
    </div>
</template>