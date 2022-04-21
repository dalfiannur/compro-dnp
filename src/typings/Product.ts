export interface Product {
    id: number;
    name: string;
    sku: string;
    slug: string;
    usedAs: string;
    howToUse: string;
    description: string;
    keyingredient: string;
    category: {
        name: string;
        slug: string;
    };
    images: {
        imageSourceUrl: string;
    }[]
    skinTypes: any[]
    skinConcerns: any[]
}
