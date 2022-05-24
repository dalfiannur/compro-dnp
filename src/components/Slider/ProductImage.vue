<script setup lang="ts">
import { ref, computed, toRefs, onMounted, watch } from "vue";
import { gsap } from "gsap";

import {Product} from "../../typings/Product";
import { useRoute } from "vue-router";
import useGetQuery from "../../composable/useGetQuery";

// const route = useRoute();
// const {fetcher, data} = useGetQuery<Product>('product');
// onMounted(() => {
//     fetcher(route.params.slug as string)
// })


type Prop = {
  data: Product
}

const prop = defineProps<Prop>();

const { data } = toRefs(prop)


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
    if (activeSlides.value === data.value!.images.length - 1) {
        activeSlides.value = 0;
    }
    else {
        activeSlides.value++
    }
    next(activeSlides.value)
}

const prevSlide = () => {
    if (activeSlides.value === 0) {
        activeSlides.value = data.value!.images.length - 1
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
onMounted(() => {
  console.log(data.value?.images)
})
</script>

<template>
    <div class="flex justify-center w-full h-full px-10 lg:w-[450px] xl:w-[550px] 2xl:w-[700px]" v-if="data">
        <div class="relative h-full w-[500px] sm:w-full bg-white-smoke justify-center items-center">

            <div class="justify-center w-full">
                <div class="flex overflow-hidden w-full sm:h-[500px] lg:h-full aspect-square">
                    <div
                        class="flex-none justify-center w-full h-full p-12 selected-slide"
                        v-for="item in data?.images"
                        :key="item.imageSourceUrl"
                        :class="['border-' + data?.category.slug]"
                    >
                        <img
                            class="object-cover h-full cursor-pointer aspect-square"
                            :src="item.imageSourceUrl"
                        />
                    </div>
                </div>

                <div class="flex items-center justify-center flex-1 bg-white">
                    <div
                        v-for="(item, index) in data?.images"
                        :key="item.imageSourceUrl"
                        class="flex items-center justify-center w-full h-3 border cursor-pointer"
                        :class="['border-' + data?.category.slug]"
                        @click="goTo(index)"
                    >
                        <div v-if="activeSlides === index" class="w-full h-full" :class="['bg-' + data?.category.slug]" />
                    </div>
                </div>
            </div>

            <div class="hidden lg:flex">
                <button
                    @click="prevSlide"
                    class="top-40 xl:top-52 2xl:top-64 pb-1 absolute -left-6 h-10 w-10 text-repair border border-repair"
                    :class="['border-' + data?.category?.slug + ' ' + 'text-' + data?.category?.slug]"
                >&lt;
                </button>
                <button
                    @click="nextSlide"
                    class="top-40 xl:top-52 2xl:top-64 pb-1 absolute -right-6 h-10 w-10 border text-repair border-repair"
                    :class="['border-' + data?.category?.slug + ' ' + 'text-' + data?.category?.slug]"
                >&gt;
                </button>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
$categories: 'repair', 'prevent', 'glow', 'hydrate', 'preserve';

@each $category in $categories {
  .text-#{$category} {
    --tw-bg-opacity: 1;
    color: theme('colors.' + $category);
  }
  .border-#{$category} {
    --tw-bg-opacity: 1;
    border-color: theme('colors.' + $category);
  }
  .bg-#{$category} {
    --tw-bg-opacity: 1;
    background-color: theme('colors.' + $category);
  }
}
</style>