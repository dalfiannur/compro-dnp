import { onMounted, ref } from 'vue'

interface Option { 
    category?: string
}

export default function (option?: Option) {
    const temp: { [key: string]: any[] } = {
        mix: [
            {
                id: 1,
                name: 'Caffein Repair 1',
                category: {
                    slug: 'repair'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
            {
                id: 2,
                name: 'Caffein Prevent 1',
                category: {
                    slug: 'prevent'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
            {
                id: 3,
                name: 'Caffein Glow 1',
                category: {
                    slug: 'glow'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
            {
                id: 4,
                name: 'Caffein Hydrate 1',
                category: {
                    slug: 'hydrate'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
        ],
        repair: [
            {
                id: 1,
                name: 'Caffein Repair 1',
                category: {
                    slug: 'repair'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
            {
                id: 2,
                name: 'Caffein Repair 2',
                category: {
                    slug: 'repair'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
            {
                id: 3,
                name: 'Caffein Repair 3',
                category: {
                    slug: 'repair'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
            {
                id: 4,
                name: 'Caffein Repair 4',
                category: {
                    slug: 'repair'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
        ],
        prevent: [
            {
                id: 1,
                name: 'Caffein Prevent 1',
                category: {
                    slug: 'prevent'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
            {
                id: 2,
                name: 'Caffein Prevent 2',
                category: {
                    slug: 'prevent'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
            {
                id: 3,
                name: 'Caffein Prevent 3',
                category: {
                    slug: 'prevent'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
            {
                id: 4,
                name: 'Caffein Prevent 4',
                category: {
                    slug: 'prevent'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
        ],
        glow: [
            {
                id: 1,
                name: 'Caffein Glow 1',
                category: {
                    slug: 'glow'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
            {
                id: 2,
                name: 'Caffein Glow 2',
                category: {
                    slug: 'glow'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
            {
                id: 3,
                name: 'Caffein Glow 3',
                category: {
                    slug: 'glow'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
            {
                id: 4,
                name: 'Caffein Glow 4',
                category: {
                    slug: 'glow'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },

        ],
        hydrate: [
            {
                id: 1,
                name: 'Caffein Hydrate 1',
                category: {
                    slug: 'hydrate'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
            {
                id: 2,
                name: 'Caffein Hydrate 2',
                category: {
                    slug: 'hydrate'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
            {
                id: 3,
                name: 'Caffein Hydrate 3',
                category: {
                    slug: 'hydrate'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
            {
                id: 4,
                name: 'Caffein Hydrate 4',
                category: {
                    slug: 'hydrate'
                },
                images: [
                    {
                        imageSourceUrl: '/img/prevent-antioxidant-resveratrol-a.png'
                    }
                ]
            },
        ]
    }

    const data = ref<any[]>([])

    const fetcher = (category?: string) => {
        data.value = category ? temp[category] : temp['mix']
    }

    onMounted(() => fetcher(option?.category))

    return {
        data,
        fetcher
    }
}