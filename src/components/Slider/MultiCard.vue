<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { gsap } from 'gsap'

const items = reactive([
    {
        id: 1,
        name: 'Caffein Hydrating',
        images: [
            {
                image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
            }
        ]
    },
    {
        id: 2,
        name: 'Caffein Hydrating',
        images: [
            {
                image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
            }
        ]
    },
    {
        id: 3,
        name: 'Caffein Hydrating',
        images: [
            {
                image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
            }
        ]
    },
    {
        id: 4,
        name: 'Caffein Hydrating',
        images: [
            {
                image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
            }
        ]
    },
    {
        id: 5,
        name: 'Caffein Hydrating',
        images: [
            {
                image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
            }
        ]
    },
    {
        id: 6,
        name: 'Caffein Hydrating',
        images: [
            {
                image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
            }
        ]
    },
    {
        id: 6,
        name: 'Caffein Hydrating',
        images: [
            {
                image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
            }
        ]
    }
])

const fromIndex = ref<number>(0)

onMounted(() => {
    const sliderItems = gsap.utils.toArray('.slider-item')

    gsap.set(sliderItems, {
        width: (window.innerWidth / 4) - (30 + 40),
        marginRight: 40
    })
    const s = sliderItems.slice(0, 4)
    gsap.set(s, {
        display: ''
    })
})

const next = () => {
    const sliderItems: any[] = gsap.utils.toArray('.slider-item')
    const textItems: any[] = gsap.utils.toArray('.slider-wrapper .item-text')
    if (fromIndex.value < sliderItems.length - 4) {
        const first = sliderItems[fromIndex.value]
        const firstText = textItems[fromIndex.value]
        gsap.to(firstText, {
            scale: 0,
            duration: .2,
        })

        gsap.to(first, {
            width: 0,
            duration: 1,
            opacity: 0,
            marginRight: 0,
        })

        fromIndex.value += 1

        gsap.fromTo(sliderItems[3 + fromIndex.value], {
            scale: 0,
            width: 0
        }, {
            scale: 1,
            width: (window.innerWidth / 4) - (30 + 40),
            duration: 1
        })
    }


}
const prev = () => {
    const sliderItems: any[] = gsap.utils.toArray('.slider-item')
    const textItems: any[] = gsap.utils.toArray('.slider-wrapper .item-text')
    if (fromIndex.value !== 0) {
        fromIndex.value -= 1
        const first = sliderItems[fromIndex.value]
        const firstText = textItems[fromIndex.value]
        gsap.to(first, {
            width: (window.innerWidth / 4) - (30 + 40),
            marginRight: 40,
            duration: 1,
            opacity: 1
        })
        gsap.to(firstText, {
            scale: 1,
            duration: 1,
        })
    }

}
</script>

<template>
    <div class="mx-[80px] flex justify-between gap-[40px]">
        <button
            class="flex-1 py-3 font-bold border-2 h-14 border-repair hover:bg-repair text-repair hover:text-white"
        >Repair</button>
        <button
            class="flex-1 font-bold border-2 border-prevent hover:bg-prevent text-prevent hover:text-white"
        >Prevent</button>
        <button
            class="flex-1 font-bold border-2 border-glow text-glow hover:bg-glow hover:text-white"
        >Glow</button>
        <button
            class="flex-1 font-bold border-2 border-hydrate text-hydrate hover:bg-hydrate hover:text-white"
        >Hydrate</button>
    </div>
    <div class="relative flex justify-center mt-10 slider-wrapper">
        <div class="flex mx-[80px] overflow-hidden flex-nowrap items-center">
            <div
                class="flex-none slider-item"
                v-for="(item, index) in items"
                :data-id="index"
                :key="index"
            >
                <div class="p-10 bg-white-smoke">
                    <img
                        class="object-cover w-full aspect-ratio"
                        :src="item.images[0].image_source_url"
                    />
                </div>
                <div
                    class="mt-10 text-2xl text-center text-gray-500 h-14 font-din-next-lt-pro-light item-text"
                >{{ item.name }}</div>
            </div>
        </div>
        <div class="absolute flex items-center h-full left-[55px]">
            <button class="-mt-24 border border-black w-14 h-14 hover:bg-white" @click="prev">prev</button>
        </div>

        <div class="absolute flex items-center h-full right-[55px]">
            <button class="-mt-24 border border-black w-14 h-14 hover:bg-white" @click="next">Next</button>
        </div>
    </div>
</template>