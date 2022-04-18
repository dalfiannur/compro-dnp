export interface Product {
    id: number;
    name: string;
    slug: string;
    usedAs: string;
    category: {
        name: string;
        slug: string;
    };
    images: {
        imageSourceUrl: string;
    }[]
}