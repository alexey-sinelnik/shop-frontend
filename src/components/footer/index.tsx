import { JSX, FC } from "react";
import { navigate } from "@/common/data/header";
import { NavigateElement } from "@/common/types/header";
import Link from "next/link";
import { redressed, spaceGrotesk } from "@/common/fonts";
import Container from "../container";
import { footerLinks, SocialIcons } from "@/common/data/footer";
import { FooterLinks } from "@/common/types/footer";
import Image from "next/image";

const FooterComponent: FC = (): JSX.Element => {
    const renderMenu: JSX.Element[] = navigate.map(
        (element: NavigateElement) => (
            <Link
                className={`${spaceGrotesk.className} opacity-60 hover:opacity-100 active:opacity-100 transition-opacity hidden md:block`}
                href={element.path}
                key={element.name}
            >
                {element.name}
            </Link>
        )
    );

    const renderPrivacyBlock: JSX.Element[] = footerLinks.map(
        (element: FooterLinks) => (
            <Link href={element.path} key={element.name}>
                {element.name}
            </Link>
        )
    );

    const renderSocialIcons: JSX.Element[] = SocialIcons.map(
        (element: FooterLinks) => (
            <Image
                src={element.icon}
                alt={element.name}
                className="cursor-pointer"
                key={element.name}
            />
        )
    );

    return (
        <div className="w-full h-full bg-black">
            <Container>
                <div className="flex justify-center text-white border-b-[1px] py-4 md:p-8 md:justify-between">
                    <div className="flex flex-col gap-3 items-center justify-between md:flex-row md:gap-[30px]">
                        <div className="md:border-r-[1px] px-7">
                            <h2 className={`${redressed.className} text-2xl`}>
                                Your Ecommerce
                            </h2>
                        </div>
                        <div className="text-xl">
                            <p>Gift & Decoration Store</p>
                        </div>
                    </div>
                    <div className="gap-8 text-xl hidden md:flex">
                        {renderMenu}
                    </div>
                </div>
                <div className="flex justify-center md:justify-between items-center py-4 md:py-8">
                    <div className="gap-5 text-white hidden md:flex">
                        {renderPrivacyBlock}
                    </div>
                    <div className="flex gap-8">{renderSocialIcons}</div>
                </div>
            </Container>
        </div>
    );
};

export default FooterComponent;
