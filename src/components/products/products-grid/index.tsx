import { JSX, FC } from "react";
import { selectItems } from "@/common/data/products";
import ProductBoxComponent from "@/components/products/product-box";
import SelectComponent from "@/components/inputs/select";
import { ProductsGridProps, ProductType } from "@/common/types/products";

const ProductsGridComponent: FC<ProductsGridProps> = ({
    sortableProducts,
    items,
    setItems,
    categoryName
}): JSX.Element => {
    return (
        <div>
            <div className="flex justify-between items-center mb-4 ">
                <h2 className="h2"> {categoryName}</h2>
                <div className="flex gap-12">
                    <SelectComponent
                        title={"Sort by"}
                        data={selectItems}
                        size={"small"}
                        state={items}
                        setState={setItems}
                    />
                </div>
            </div>
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12`}>
                {sortableProducts &&
                    sortableProducts.map((product: ProductType) => {
                        return (
                            <ProductBoxComponent
                                {...product}
                                key={product.id}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default ProductsGridComponent;
