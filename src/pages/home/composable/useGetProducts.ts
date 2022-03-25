import { onMounted, ref } from 'vue'

type Category = 'repair' | 'prevent' | 'glow' | 'hydrate'

export default function () {
    const temp = {
        repair: [
            {
                id: 1,
                name: 'Caffein Repair 1',
                images: [
                    {
                        image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
                    }
                ]
            },
            {
                id: 2,
                name: 'Caffein Repair 2',
                images: [
                    {
                        image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
                    }
                ]
            },
            {
                id: 3,
                name: 'Caffein Repair 3',
                images: [
                    {
                        image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
                    }
                ]
            },
            {
                id: 4,
                name: 'Caffein Repair 4',
                images: [
                    {
                        image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
                    }
                ]
            },
        ],
        prevent: [
            {
                id: 1,
                name: 'Caffein Prevent 1',
                images: [
                    {
                        image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
                    }
                ]
            },
            {
                id: 2,
                name: 'Caffein Prevent 2',
                images: [
                    {
                        image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
                    }
                ]
            },
            {
                id: 3,
                name: 'Caffein Prevent 3',
                images: [
                    {
                        image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
                    }
                ]
            },
            {
                id: 4,
                name: 'Caffein Prevent 4',
                images: [
                    {
                        image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
                    }
                ]
            },
        ],
        glow: [
            {
                id: 1,
                name: 'Caffein Glow 1',
                images: [
                    {
                        image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
                    }
                ]
            },
            {
                id: 2,
                name: 'Caffein Glow 2',
                images: [
                    {
                        image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
                    }
                ]
            },
            {
                id: 3,
                name: 'Caffein Glow 3',
                images: [
                    {
                        image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
                    }
                ]
            },
            {
                id: 4,
                name: 'Caffein Glow 4',
                images: [
                    {
                        image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
                    }
                ]
            },
            
        ],
        hydrate: [
            {
                id: 1,
                name: 'Caffein Hydrate 1',
                images: [
                    {
                        image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
                    }
                ]
            },
            {
                id: 2,
                name: 'Caffein Hydrate 2',
                images: [
                    {
                        image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
                    }
                ]
            },
            {
                id: 3,
                name: 'Caffein Hydrate 3',
                images: [
                    {
                        image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
                    }
                ]
            },
            {
                id: 4,
                name: 'Caffein Hydrate 4',
                images: [
                    {
                        image_source_url: 'https://shawellnessclinic.com/sha-boutique/wp-content/uploads/2017/09/wls_v1_serum.png'
                    }
                ]
            },
        ]
    }

    const data = ref<any[]>([])

    const fetcher = (category: Category) => {
        data.value = temp[category]
    }

    onMounted(() => fetcher('repair'))

    return {
        data,
        fetcher
    }
}