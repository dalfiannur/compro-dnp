<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const items = ref<any[]>([
    {
        id: 1,
        name: 'Caffein Hydrating',
        category: {
            name: 'Hydrate'
        },
        images: [
            {
                image_source_url: 'https://www.emenacpackaging.co.uk/wp-content/uploads/2019/05/Serum-Boxes-Wholesale.png',
            },
            {
                image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png',
            }
        ]
    },
    {
        id: 2,
        name: 'Caffein Glow',
        category: {
            name: 'Glow'
        },
        images: [
            {
                image_source_url: 'https://www.emenacpackaging.co.uk/wp-content/uploads/2019/05/Serum-Boxes-Wholesale.png',
            },
            {
                image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png',
            }
        ]
    },
    {
        id: 3,
        name: 'Caffein Repair',
        category: {
            name: 'Repair'
        },
        images: [
            {
                image_source_url: 'https://www.emenacpackaging.co.uk/wp-content/uploads/2019/05/Serum-Boxes-Wholesale.png',
            },
            {
                image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png',
            }
        ]
    },
    {
        id: 4,
        name: 'Caffein Hydrating',
        category: {
            name: 'Hydrate'
        },
        images: [
            {
                image_source_url: 'https://www.emenacpackaging.co.uk/wp-content/uploads/2019/05/Serum-Boxes-Wholesale.png',
            },
            {
                image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png',
            }
        ]
    },
    {
        id: 5,
        name: 'Caffein Prevent',
        category: {
            name: 'Prevent'
        },
        images: [
            {
                image_source_url: 'https://www.emenacpackaging.co.uk/wp-content/uploads/2019/05/Serum-Boxes-Wholesale.png',
            },
            {
                image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png',
            }
        ]
    }
])

const activeSlides = ref<number>(2)
const selectedSlide = ref<any>(items.value[2])
const imagesWrap = gsap.utils.wrap(items.value)

onMounted(() => {
    const elements = document.querySelectorAll('.slider-item')
    gsap.set(elements, { xPercent: -100 })
    gsap.set(elements[activeSlides.value + 1], { rotation: -10 })
    gsap.set(elements[activeSlides.value - 1], { rotation: 10 })
})

const next = (key: number, duration: number = 1) => {
    selectedSlide.value = imagesWrap(key)

    const elements = document.querySelectorAll('.slider-item')

    if (elements[key + 1]) {
        gsap.fromTo(elements[key + 1], {
            scale: 0,
            duration: 0
        }, {
            scale: 1,
            duration: 1,
            delay: .2,
            rotation: -10
        })
    }

    if (elements[key - 1]) {
        gsap.fromTo(elements[key - 1], {
            y: 100,
            rotation: 0,
            duration: 0
        }, {
            y: 0,
            rotation: 10,
            duration: 1
        })
    }

    gsap.to(elements, { xPercent: -((key - 1) * 100), duration })
    gsap.fromTo(elements[key], {
        rotation: -10,
        y: 0
    }, {
        rotation: 0,
        y: 100,
        duration: 1
    })
}

const prev = (key: number, duration: number = 1) => {
    console.log(duration)
    selectedSlide.value = imagesWrap(key)

    const elements = document.querySelectorAll('.slider-item')

    if (elements[key - 1]) {
        gsap.fromTo(elements[key - 1], {
            scale: 0,
            duration: 0
        }, {
            scale: 1,
            duration: 1,
            delay: .2,
            rotation: 10
        })
    }

    if (elements[key + 1]) {
        gsap.fromTo(elements[key + 1], {
            y: 100,
            rotation: 0,
            duration: 0
        }, {
            y: 0,
            rotation: -10,
            duration: 1
        })
    }

    gsap.to(elements, {
        xPercent: -((key - 1) * 100),
        duration
    })

    gsap.fromTo(elements[key], {
        rotation: 10,
        y: 0
    }, {
        rotation: 0,
        y: 100,
        duration: 1
    })
}

const goTo = (key: number) => {
    if (key >= activeSlides.value) {
        next(key)
        gsap.fromTo('.selected-slide', {
            xPercent: 100
        }, {
            xPercent: 0,
            duration: 1
        })


    } else {
        prev(key)
        gsap.fromTo('.selected-slide', {
            xPercent: -100
        }, {
            xPercent: 0,
            duration: 1
        })
    }

    activeSlides.value = key
}

</script>

<template>
    <div class="flex justify-center w-full">
        <div class="relative z-20 flex items-center mx-24 bg-primary">
            <div class="absolute flex justify-center -top-8 left-1/4 right-1/4">
                <div
                    class="w-full py-4 text-xl font-bold text-center uppercase bg-white border-2 text-primary border-primary font-questrial"
                >{{ selectedSlide.category.name }}</div>
            </div>
            <div class="overflow-hidden">
                <div class="h-96 my-52 aspect-square selected-slide">
                    <img
                        class="object-cover w-full h-full"
                        :src="selectedSlide.images[0].image_source_url"
                    />
                </div>
            </div>
            <div class="absolute bottom-0 w-full h-[200px] flex flex-col">
                <div class="py-5 text-3xl font-bold text-center text-white">{{ selectedSlide.name }}</div>
                <div class="flex items-center justify-center flex-1 gap-8">
                    <div
                        v-for="(item, index) in items"
                        :key="item.id"
                        class="flex items-center justify-center w-10 h-10 border-2 border-white cursor-pointer"
                        @click="goTo(index)"
                    >
                        <div v-if="activeSlides === index" class="w-6 h-6 bg-white" />
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute w-full">
            <div class="absolute w-1/3 bg-white-smoke h-96 top-52" />
            <div class="absolute right-0 w-1/3 bg-white-smoke h-96 top-52" />
            <div class="flex overflow-hidden flex-nowrap">
                <div class="flex-none w-1/3 slider-item pt-52" v-for="item in items" :key="item">
                    <div class="relative flex justify-center -mt-24 aspect-square">
                        <img class="absolute w-96 h-96" :src="item.images[1].image_source_url" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>