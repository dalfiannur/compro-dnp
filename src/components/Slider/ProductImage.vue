<script setup lang="ts">
import { ref } from "vue";
import { gsap } from "gsap";

import useGetQueries from "../../composable/useGetQueries";
import {Product} from "../../typings/Product";

const { data: featuredProducts } = useGetQueries<Product>('product', {
    perPage: 5,
    autoFetch: true
});

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
        <div class="relative h-full w-full sm:w-[600px] lg:w-[350px] xl:w-[450px] 2xl:w-[600px] bg-white-smoke justify-center items-center">
            <div class="justify-center w-full">
                <div class="flex overflow-hidden aspect-square">
                    <div
                        class="flex-none w-full h-full p-12 selected-slide"
                        v-for="item in featuredProducts"
                        :key="item.id"
                    >
                        <img
                            class="object-cover w-full cursor-pointer aspect-square"
                            :src="item.images[1].imageSourceUrl"
                        />
                    </div>
                </div>

                <div class="flex items-center justify-center flex-1 bg-white">
                    <div
                        v-for="(item, index) in featuredProducts"
                        :key="item.id"
                        class="flex items-center justify-center w-full h-3 border cursor-pointer border-repair"
                        @click="goTo(index)"
                    >
                        <div v-if="activeSlides === index" class="w-full h-full bg-repair" />
                    </div>
                </div>
            </div>
            <div class="hidden lg:flex">
                <button
                    @click="prevSlide"
                    class="top-40 xl:top-52 2xl:top-72 pb-1 absolute -left-6 h-10 w-10 text-repair border border-repair"
                >&lt;
                </button>
                <button
                    @click="nextSlide"
                    class="top-40 xl:top-52 2xl:top-72 pb-1 absolute -right-6 h-10 w-10 border text-repair border-repair"
                >&gt;
                </button>
            </div>


        </div>
    </div>
</template>
