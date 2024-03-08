import { JSX, FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../container";
import { redressed, spaceGrotesk } from "@/common/fonts";
import { navigate } from "@/common/data/header";
import { NavigateElement } from "@/common/types/header";
import BurgerMenuIcon from "@/components/icons/burger-menu";
import SearchIcon from "@/assets/icons/header/search.svg";
import AccountIcon from "@/assets/icons/header/account.svg";
import CartIcon from "@/assets/icons/header/cart.svg";

const NavigationComponent: FC = (): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);

    const renderMenu: JSX.Element[] = navigate.map((element: NavigateElement) => (
        <Link className={`${spaceGrotesk.className} opacity-60 hover:opacity-100 active:opacity-100 transition-opacity`} href={element.path} key={element.name} onClick={() => setOpen(false)}>
            {element.name}
        </Link>
    ));

    return (
        <div className="sticky top-0 w-full bg-white z-30 shadow-sm">
            <div className="py-4">
                <Container>
                    <div className="flex justify-between items-center gap-3 md:gap-0">
                        <div>
                            <Link className={`${redressed.className} text-3xl`} href="/">
                                Your Ecommerce
                            </Link>
                        </div>
                        <div className="md:flex hidden items-center gap-8 md:gap-12">{renderMenu}</div>
                        <div className="flex items-center gap-8 md:gap-12">
                            <div className="hidden md:block font-[500] opacity-60 hover:opacity-100 active:opacity-100 transition-opacity cursor-pointer">
                                <Image src={SearchIcon} alt="Search icon" />
                            </div>
                            <div className="hidden md:block font-[500] opacity-60 hover:opacity-100 active:opacity-100 transition-opacity cursor-pointer">
                                <Link href="/auth/login">
                                    <Image src={AccountIcon} alt="Account icon" />
                                </Link>
                            </div>
                            <div className="hidden md:block font-[500] opacity-60 hover:opacity-100 active:opacity-100 transition-opacity cursor-pointer">
                                <Link href="/cart">
                                    <Image src={CartIcon} alt="Cart icon" />
                                </Link>
                            </div>
                        </div>
                        <div className="block md:hidden" onClick={() => setOpen(!open)}>
                            <BurgerMenuIcon />
                        </div>
                    </div>
                </Container>
            </div>
            {open && (
                <div className="absolute w-full h-auto top-16 py-4 bg-white flex flex-col md:hidden">
                    <div className="flex flex-col items-center gap-6 mb-4">{renderMenu}</div>
                </div>
            )}
        </div>
    );
};

export default NavigationComponent;
