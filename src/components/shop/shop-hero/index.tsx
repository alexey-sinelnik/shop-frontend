import { FC, JSX } from "react";

const ShopHeroComponent: FC = (): JSX.Element => {
    return (
        <div className="flex justify-center w-full mb-12">
            <div className="max-h-[550px] bg-shopHero bg-cover h-[360px] max-w-[1400px] bg-center w-full relative overflow-hidden bg-no-repeat p-12 flex flex-col justify-center items-center">
                <h3 className="text-4xl font-medium text-black mb-2">
                    Shop Page
                </h3>
                <p className="text-center">
                    Let’s design the place you always imagined.
                </p>
            </div>
        </div>
    );
};

export default ShopHeroComponent;
