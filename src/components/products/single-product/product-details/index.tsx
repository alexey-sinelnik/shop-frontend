import { FC } from "react";
import { calculateDiscountPrice } from "@/utils/helpers";
import CountdownTimerComponent from "@/components/countdown-timer";
import AppButton from "@/components/inputs/button";
import ProductColorsComponent from "@/components/products/single-product/product-colors";
import ProductParametersComponent from "@/components/products/single-product/product-parameters";
import ProductImageComponent from "@/components/products/single-product/product-image";
import { ProductDetailsProps } from "@/common/types/products";

const ProductDetailsComponent: FC<ProductDetailsProps> = ({ product }) => {
    const handleColorSelect = () => {};
    return (
        <div className="grid md:grid-cols-2 gap-5">
            <div className='bg-white p-10'>
                <ProductImageComponent images={product.images} handleColorSelect={handleColorSelect}/>
            </div>
            <div className="flex flex-col gap-1">
                <h2 className="h2 ">{product.title}</h2>
                <hr className="opacity-10 my-2" />
                <div className="text-justify opacity-50 mb-4">
                    {product.description}
                </div>
                <div className="flex gap-2">
                    <div>
                        <p className="text-2xl font-medium">
                            $
                            {calculateDiscountPrice(
                                product.price,
                                product.discount
                            )}
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl opacity-50 line-through font-medium">
                            ${product.price}
                        </p>
                    </div>
                </div>

                <hr className="opacity-10 my-2" />
                {Boolean(product.discount) && (
                    <>
                        <div>
                            <div className="mb-4">
                                <p>Offer expires in:</p>
                            </div>
                            <div className="mb-4">
                                <CountdownTimerComponent
                                    targetDate={product.expireDiscount}
                                />
                            </div>
                        </div>
                        <hr className="opacity-10 my-2" />
                    </>
                )}
                <div>
                    <p className="font-semibold">Colors: </p>
                    <ProductColorsComponent colors={product.productColors} />
                </div>
                <hr className="opacity-10 my-2" />
                <div>
                    <AppButton title={"Add to cart"} />
                </div>
                <hr className="opacity-10 my-2" />
                <ProductParametersComponent
                    title={"Dimensions"}
                    parameter={product.dimensions}
                />
                <ProductParametersComponent
                    title={"Category"}
                    parameter={product.category.name}
                />
                <ProductParametersComponent
                    title={"Brand"}
                    parameter={product.brand}
                />
                <hr className="opacity-10 my-2" />
            </div>
        </div>
    );
};

export default ProductDetailsComponent;
