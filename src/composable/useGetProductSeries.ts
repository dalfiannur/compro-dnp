import { ref } from 'vue'
import { ProductSeries } from '../typings/ProductSeries'


export default function useGetProductSeries() {
  const data = ref<ProductSeries[]>([
    {
      id: 1,
      name: 'Repair Series',
      slug: 'repair-series',
      category: {
        slug: 'repair',
        name: 'Repair'
      },
      images: [
        {
          imageSourceUrl: '/img/repair-series.png'
        }
      ]
    },
    {
      id: 2,
      name: 'Prevent Series',
      slug: 'prevent-series',
      category: {
        slug: 'prevent',
        name: 'Prevent'
      },
      images: [
        {
          imageSourceUrl: '/img/prevent-series.png'
        }
      ]
    },
    {
      id: 3,
      name: 'Glow Series',
      slug: 'glow-series',
      category: {
        slug: 'glow',
        name: 'Glow'
      },
      images: [
        {
          imageSourceUrl: '/img/glow-series.png'
        }
      ]
    },
    {
      id: 4,
      name: 'Hydrate Series',
      slug: 'hydrate-series',
      category: {
        slug: 'hydrate',
        name: 'Hydrate'
      },
      images: [
        {
          imageSourceUrl: '/img/hydrate-series.png'
        }
      ]
    },
    {
      id: 4,
      name: 'Preserve Series',
      slug: 'preserve-series',
      category: {
        slug: 'preserve',
        name: 'Preserve'
      },
      images: [
        {
          imageSourceUrl: '/img/hydrate-series.png'
        }
      ]
    },
  ])

  return {
    data
  }
}
