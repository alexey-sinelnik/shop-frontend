import { FC, useState } from "react";
import {ColorType, ProductColorsComponentProps} from "@/common/types/shop";

const ProductColorsComponent: FC<ProductColorsComponentProps> = ({
    colors
}) => {
    const [activeColor, setActiveColor] = useState<string>("");


    return (
        <div className="flex gap-2 rounded-md">
            {colors.length > 0 &&
                colors.map((element: ColorType) => (
                    <div
                        key={element.id}
                        style={{ backgroundColor: `${element.color.color}` }}
                        className={
                            activeColor === element.color.color
                                ? "border-opacity-60 w-[25px] h-[25px] border border-b-indigo-950 cursor-pointer"
                                : `w-[25px] h-[25px] border border-black border-opacity-20 cursor-pointer`
                        }
                        onClick={() => setActiveColor(element.color.color)}
                    ></div>
                ))}
        </div>
    );
};

export default ProductColorsComponent;
