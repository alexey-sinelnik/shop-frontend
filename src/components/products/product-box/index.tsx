import { FC, useState, JSX } from "react";
import { ProductType } from "@/common/types/products";
import HeartIconComponent from "@/components/icons/heart";
import AppButton from "@/components/inputs/button";
import RatingComponent from "@/components/inputs/rating";
import { useRouter } from "next/navigation";
import { calculateDiscountPrice } from "@/utils/helpers";
import Image from "next/image";

const ProductBoxComponent: FC<ProductType> = ({
    newArrival,
    discount,
    price,
    rating,
    title,
    images,
    id
}): JSX.Element => {
    const [productRating, setProductRating] = useState<number>(rating || 0);
    const [hover, setHover] = useState<number>(0);
    const [totalStars] = useState<number>(5);
    const router = useRouter();

    return (
        <div className="flex flex-col max-w-[262px]">
            <div
                className="max-h-[550px] relative group cursor-pointer"
                onClick={() => router.push(`/product/${id}`)}
            >
                <Image
                    src={images[0].link}
                    alt={`${title} image`}
                    className="w-full max-w-[350px]"
                    unoptimized
                    height={500}
                    width={300}
                />
                <div className="absolute top-6 left-4 flex flex-col justify-center">
                    {newArrival && (
                        <div className="bg-white px-4 py-1 uppercase font-semibold mb-1 rounded">
                            New
                        </div>
                    )}
                    <div className="bg-green text-center px-4 rounded font-semibold">
                        {discount ? `-${discount}%` : null}
                    </div>
                </div>
                <div className="absolute top-6 right-4 bg-white p-2 rounded-full group-hover:block md:opacity-0 md:group-hover:opacity-100 ase-out duration-300 transition-all">
                    <div>
                        <HeartIconComponent />
                    </div>
                </div>
                <div className="px-4 absolute bottom-2 w-full overflow-hidden">
                    <div className="md:translate-y-96 md:group-hover:translate-y-0 ase-out duration-300 transition-all">
                        <AppButton title="Add to cart" />
                    </div>
                </div>
            </div>
            <div className="w-full">
                <RatingComponent
                    productRating={productRating}
                    setProductRating={setProductRating}
                    hover={hover}
                    setHover={setHover}
                    totalStars={totalStars}
                />
            </div>
            <div className="w-full text-xl font-medium px-0 py-1">
                <p>{title}</p>
            </div>
            <div className="w-full text-xl font-medium px-0 py-1 flex gap-1 items-center">
                <div>${calculateDiscountPrice(price, discount)}</div>
                {Boolean(discount) && (
                    <div className="text-lg opacity-50 line-through">
                        ${price.toFixed(2)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductBoxComponent;
