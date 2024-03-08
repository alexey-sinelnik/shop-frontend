import { JSX, FC } from "react";
import Letter from "@/assets/icons/newsletter/letter.svg";
import Image from "next/image";

const NewsletterComponent: FC = (): JSX.Element => {
    return (
        <div className="bg-newsletter h-[360px] w-full max-h-[360px] relative overflow-hidden  bg-cover bg-no-repeat p-12 flex flex-col justify-center items-center">
            <h2 className="h2">Join Our Newsletter</h2>
            <p>Sign up for deals, new products and promotions</p>
            <div className="flex justify-center items-center mt-6 border-b-2 border-black border-opacity-40 py-2">
                <Image src={Letter} alt="Newsletter image" />
                <form className="flex mx-2">
                    <input
                        type="text"
                        className="bg-transparent focus:outline-0"
                    />
                    <button>Signup</button>
                </form>
            </div>
        </div>
    );
};

export default NewsletterComponent;
