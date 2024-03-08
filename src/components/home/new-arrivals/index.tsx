import { JSX, FC } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Autoplay, Keyboard, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductType } from "@/common/types/products";
import ProductBoxComponent from "@/components/products/product-box";
import {useAppSelector} from "@/store";

const NewArrivalsComponent: FC = (): JSX.Element => {
    const {products} = useAppSelector(state => state.products)

    const renderNewArrivalsSlider: JSX.Element[] = products.filter((product: ProductType) => product.newArrival ).map(
        (element: ProductType) => (
            <SwiperSlide key={element.id}>
                <ProductBoxComponent {...element} />
            </SwiperSlide>
        )
    );

    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl md:text-4xl py-4 font-semibold">
                    New Arrivals
                </h2>
                <Link href={"/products"}>
                    <div className="flex items-center gap-4 border-b border-black border-opacity-30">
                        <p className="text-sm md:text-md font-medium">
                            More Products
                        </p>
                        <BsArrowRight />
                    </div>
                </Link>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                keyboard={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2
                    },
                    400: {
                        slidesPerView: 2
                    },
                    600: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 4
                    }
                }}
                modules={[Autoplay, Keyboard, Scrollbar]}
                className="max-w-[1280px] px-4 lg:px-0"
            >
                {renderNewArrivalsSlider}
            </Swiper>
        </div>
    );
};

export default NewArrivalsComponent;
