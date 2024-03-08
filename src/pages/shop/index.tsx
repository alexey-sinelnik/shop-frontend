import { useEffect, useMemo, useState, JSX, FC } from "react";
import NewsletterComponent from "@/components/home/newsletter";
import ShopHeroComponent from "@/components/shop/shop-hero";
import ProductsGridComponent from "@/components/products/products-grid";
import ShopFilterComponent from "@/components/shop/filter";
import { ProductType } from "@/common/types/products";
import { useAppDispatch, useAppSelector } from "@/store";
import { getAllProductsThunk } from "@/store/thunks/products";

const ShopPage: FC = (): JSX.Element => {
    const [items, setItems] = useState<string>("price_asc");
    const [sortableProducts, setSortableProducts] = useState<ProductType[]>([]);
    const [categoryName, setCategoryName] = useState<string>("All Rooms");
    const { products } = useAppSelector(state => state.products);
    const dispatch = useAppDispatch();

    useEffect((): void => {
        dispatch(getAllProductsThunk());
    }, [dispatch]);

    useEffect(() => {
        if (products.length > 0)
            setSortableProducts(
                [...products].sort((a, b) => a.price - b.price)
            );
    }, [products]);

    useMemo((): void => {
        switch (items) {
            case "price_desc":
                const sortableByHigherPrice = [...products].sort(
                    (a, b) => b.price - a.price
                );
                setSortableProducts(sortableByHigherPrice);
                break;
            case "price_asc":
                const sortableByLowerPrice = [...products].sort(
                    (a, b) => a.price - b.price
                );
                setSortableProducts(sortableByLowerPrice);
                break;

            case "name_asc":
                const sortableByNameAsc = [...products].sort(
                    (a: ProductType, b: ProductType) =>
                        a.title.localeCompare(b.title)
                );
                setSortableProducts(sortableByNameAsc);
                break;
            case "name_desc":
                const sortableByNameDesc = [...products].sort(
                    (a: ProductType, b: ProductType) =>
                        b.title.localeCompare(a.title)
                );
                setSortableProducts(sortableByNameDesc);
                break;
        }
    }, [items]);

    return (
        <>
            <ShopHeroComponent />
            <div className="max-w-[1400px] mx-auto px-2 md:px-0 grid grid-cols-12 gap-2">
                <div className="hidden md:block col-span-12 md:col-span-4">
                    <ShopFilterComponent setCategoryName={setCategoryName} />
                </div>
                <div className="col-span-12 md:col-span-8">
                    <ProductsGridComponent
                        sortableProducts={sortableProducts}
                        items={items}
                        setItems={setItems}
                        categoryName={categoryName}
                    />
                </div>
            </div>
            <NewsletterComponent />
        </>
    );
};

export default ShopPage;
