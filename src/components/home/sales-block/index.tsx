import { JSX, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import SalesImage from "@/assets/images/home/sales.png";

const SalesBlockComponent: FC = (): JSX.Element => {
    return (
        <div className="flex gap-4 flex-wrap items-center justify-center h-full mb-12">
            <div className="max-w-[720px] max-h-[532px]">
                <Image src={SalesImage} alt="Sales image" />
            </div>
            <div className="flex flex-col justify-center px-8 bg-gray w-full h-[532px] max-w-[720px] max-h-[532px]">
                <h3 className="text-xl text-blue font-semibold mb-8">
                    SALE UP TO 35% OFF
                </h3>
                <h2 className="text-3xl font-semibold max-w-[452px] mb-4">
                    HUNDREDS of New lower prices!
                </h2>
                <p className="text-sm font-light max-w-[452px] mb-4">
                    It’s more affordable than ever to give every room in your
                    home a stylish makeover
                </p>
                <Link href={"/products"}>
                    <div className="flex items-center gap-4">
                        <p className="text-md font-medium">Shop Now</p>
                        <BsArrowRight />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SalesBlockComponent;
