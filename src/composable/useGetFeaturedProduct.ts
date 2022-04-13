import { ref } from 'vue'
import { Product } from '../typings/Product'


export default function () {
    const data = ref<Product[]>([
        {
            id: 1,
            name: 'Caffein Hydrating',
            category: {
                name: 'Hydrate'
            },
            images: [
                {
                    image_source_url: '/img/bottle_box.png',
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
                    image_source_url: '/img/bottle_box.png',
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
                    image_source_url: '/img/bottle_box.png',
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
                    image_source_url: '/img/bottle_box.png',
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
                    image_source_url: '/img/bottle_box.png',
                },
                {
                    image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png',
                }
            ]
        }
    ])

    return {
        data
    }
}