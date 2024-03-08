import { JSX, FC } from "react";
import { ourFeaturesData } from "@/common/data/our-features";
import { OurFeatures } from "@/common/types/our-features";
import Image from "next/image";

const OurFeaturesComponent: FC = (): JSX.Element => {
    const renderFeaturesBlock: JSX.Element[] = ourFeaturesData.map(
        (element: OurFeatures) => (
            <div key={element.id} className="bg-gray py-8 px-6 mb-12">
                <div className="min-w-[200px] flex flex-col items-center md:items-start gap-2">
                    <div>
                        <Image
                            src={element.icon}
                            alt={`${element.title} icon`}
                        />
                    </div>
                    <div className="text-xl font-medium">{element.title}</div>
                    <div className="opacity-50 text-md">{element.subTitle}</div>
                </div>
            </div>
        )
    );
    return (
        <>
            <hr />
            <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                {renderFeaturesBlock}
            </div>
        </>
    );
};

export default OurFeaturesComponent;
