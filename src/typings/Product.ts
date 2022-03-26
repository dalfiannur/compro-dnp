export interface Product {
    id: number;
    name: string;
    category: {
        name: string;
    };
    images: {
        image_source_url: string;
    }[]
}