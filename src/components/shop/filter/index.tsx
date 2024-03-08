import { FC, JSX, useState } from "react";
import { categories } from "@/common/data/products";
import RangeSliderComponent from "@/components/inputs/range-slider";
import { ShopFilterProps } from "@/common/types/shop";
import { CategoriesType } from "@/common/types/categories";

const ShopFilterComponent: FC<ShopFilterProps> = ({
    setCategoryName
}): JSX.Element => {
    const [value, setValue] = useState<number[]>([0, 10000]);
    const renderCategories: JSX.Element[] = categories.map(
        (category: CategoriesType) => (
            <p
                className="ml-2 cursor-pointer opacity-80 hover:opacity-100"
                key={category.id}
                onClick={() => setCategoryName(category.name)}
            >
                {category.name}
            </p>
        )
    );
    return (
        <div>
            <h3 className="h3 mb-2">Filter</h3>
            <h3 className="h3 mb-4">Categories</h3>
            <div className="mb-4">{renderCategories}</div>
            <h3 className="h3 mb-4">Price</h3>
            <RangeSliderComponent value={value} setValue={setValue} />
            <div className="flex items-center gap-2 text-md font-medium">
                <p className="border-b-2 border-black border-opacity-50 opacity-80">
                    {value[0]}
                </p>{" "}
                -{" "}
                <p className="border-b-2 border-black border-opacity-50 opacity-80">
                    {value[1]}
                </p>
            </div>
        </div>
    );
};

export default ShopFilterComponent;
