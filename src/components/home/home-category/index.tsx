import { JSX, FC } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Chair from "@/assets/images/home/categories/chair.png";
import Dresser from "@/assets/images/home/categories/dresser.png";
import Toaster from "@/assets/images/home/categories/toaster.png";

const HomeCategoryComponent: FC = (): JSX.Element => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-8">
                <h2 className="text-xl md:text-4xl font-semibold mb-2 md:mb-0">
                    Simply Unique <br /> Simply Better.
                </h2>
                <p className="text-center opacity-50">
                    World of furniture is a gift & decorations store based in
                    HCMC, Vietnam. Est since 2019.
                </p>
            </div>
            <div className="grid mb-8 grid-flow-row md:grid-flow-col md:gap-6 mt-8">
                <div className="row-span-3 relative mb-4 md:mb-0">
                    <div className="absolute top-6 left-6 text-2xl md:text-4xl font-semibold">
                        <h3>Living Room</h3>
                        <div className="flex gap-4 items-center text-xl">
                            <Link href="#">Shop Now</Link>
                            <BsArrowRight />
                        </div>
                    </div>
                    <Image src={Chair} alt="Chair image" />
                </div>
                <div className="col-span-2 relative mb-4 md:mb-0">
                    <div className="absolute bottom-6 left-6 text-2xl md:text-4xl font-semibold">
                        <h3>Bedroom</h3>
                        <div className="flex gap-4 items-center text-xl">
                            <Link href="#">Shop Now</Link>
                            <BsArrowRight />
                        </div>
                    </div>
                    <Image src={Dresser} alt="Dresser image" />
                </div>
                <div className="col-span-2 relative mb-4 md:mb-0">
                    <div className="absolute bottom-6 left-6 text-2xl md:text-4xl font-semibold">
                        <h3>Kitchen</h3>
                        <div className="flex gap-4 items-center text-xl">
                            <Link href="#">Shop Now</Link>
                            <BsArrowRight />
                        </div>
                    </div>
                    <Image src={Toaster} alt="Toaster image" />
                </div>
            </div>
        </>
    );
};

export default HomeCategoryComponent;
