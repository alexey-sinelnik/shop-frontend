import { JSX, FC } from "react";
import Slide1 from "@/assets/images/header-slider/image 1.png";
import Slide2 from "@/assets/images/header-slider/image 2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Keyboard, Navigation } from "swiper/modules";
import Image from "next/image";
import Container from "@/components/container";

const HomeBannerComponent: FC = (): JSX.Element => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={true}
                loop={true}
                pagination={{
                    clickable: true
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                navigation={true}
                modules={[Pagination, Autoplay, Keyboard, Navigation]}
                className="max-w-[1280px]"
            >
                <SwiperSlide>
                    <Container>
                        <div className="max-h-[550px]">
                            <Image src={Slide1} alt="Slide" />
                        </div>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container>
                        <div className="max-h-[550px] md:max-h-[450px]">
                            <Image src={Slide2} alt="Slide" />
                        </div>
                    </Container>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default HomeBannerComponent;
