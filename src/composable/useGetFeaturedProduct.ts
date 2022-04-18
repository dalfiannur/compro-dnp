import { ref } from 'vue'
import { Product } from '../typings/Product'


export default function () {
    const data = ref<Product[]>([
        {
            id: 1,
            name: 'Caffein Hydrating',
            slug: 'caffein-hydrating',
            usedAs: '',
            category: {
                name: 'Hydrate',
                slug: 'hydrate'
            },
            images: [
                {
                    imageSourceUrl: '/img/bottle_box.png',
                },
                {
                    imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png',
                }
            ]
        },
        {
            id: 2,
            name: 'Caffein Glow',
            slug: 'caffein-glow',
            usedAs: '',
            category: {
                name: 'Glow',
                slug: 'glow'
            },
            images: [
                {
                    imageSourceUrl: '/img/bottle_box.png',
                },
                {
                    imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png',
                }
            ]
        },
        {
            id: 3,
            name: 'Caffein Repair',
            slug: 'caffein-repair',
            usedAs: '',
            category: {
                name: 'Repair',
                slug: 'repair'
            },
            images: [
                {
                    imageSourceUrl: '/img/bottle_box.png',
                },
                {
                    imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png',
                }
            ]
        },
        {
            id: 4,
            name: 'Caffein Hydrating',
            slug: 'Caffein Hydrating',
            usedAs: '',
            category: {
                name: 'Hydrate',
                slug: 'hydrate'
            },
            images: [
                {
                    imageSourceUrl: '/img/bottle_box.png',
                },
                {
                    imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png',
                }
            ]
        },
        {
            id: 5,
            name: 'Caffein Prevent',
            slug: 'caffein-prevent',
            usedAs: '',
            category: {
                name: 'Prevent',
                slug: 'prevent',
            },
            images: [
                {
                    imageSourceUrl: '/img/bottle_box.png',
                },
                {
                    imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png',
                }
            ]
        }
    ])

    return {
        data
    }
}