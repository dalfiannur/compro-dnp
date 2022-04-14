export interface ProductSeries {
  id: number;
  name: string;
  slug: string;
  category: {
    name: string;
    slug: string;
  },
  images: {
    imageSourceUrl: string;
  }[]
}