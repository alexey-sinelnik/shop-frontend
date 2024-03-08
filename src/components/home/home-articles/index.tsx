import { JSX, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { homeArticles } from "@/common/data/articles";
import { ArticlesItem } from "@/common/types/articles";

const HomeArticleComponent: FC = (): JSX.Element => {
    const renderArticles: JSX.Element[] = homeArticles.map(
        (element: ArticlesItem) => (
            <div key={element.id}>
                <Image
                    src={element.image}
                    alt="Artile image"
                    className="mb-6"
                />
                <div>
                    <h3 className="font-medium text-xl mb-2">
                        {element.title}
                    </h3>
                    <div className="flex items-center gap-4">
                        <Link
                            className="flex items-center gap-2 text-md font-medium border-b border-black border-opacity-30"
                            href={element.link}
                        >
                            Read More
                            <BsArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        )
    );
    return (
        <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
                <h2 className="h2 py-4">Articles</h2>
                <Link href={"/products"}>
                    <div className="flex items-center gap-4 border-b border-black border-opacity-30">
                        <p className="text-md font-medium">More Articles</p>
                        <BsArrowRight />
                    </div>
                </Link>
            </div>
            <div className="flex items-center justify-between gap-4 md:flex-row flex-col">
                {renderArticles}
            </div>
        </div>
    );
};

export default HomeArticleComponent;
