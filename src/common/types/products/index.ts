import { CategoriesType } from "@/common/types/categories";
import {ColorType} from "@/common/types/shop";

export type ProductType = {
    title: string;
    description: string;
    price: number;
    dimensions: string;
    productColors: ColorType[];
    id: string;
    images: any[];
    rating: number;
    createdAt: string;
    updatedAt: string;
    discount: number;
    expireDiscount: string | number | Date;
    newArrival: boolean;
    category: CategoriesType;
    brand: string;
};

export type ProductsGridProps = {
    sortableProducts: ProductType[];
    setItems: (item: string) => void;
    items: string;
    categoryName: string;
};

export type ProductDetailsProps = {
    product: ProductType;
};

export type ProductImageProps = {
    images: any[];
    handleColorSelect: (value: any) => void;
};

export type SingleProductPageProps = {
    productId: string;
};

export type ProductsState = {
    products: ProductType[];
};
