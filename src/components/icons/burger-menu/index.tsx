import { FC, JSX } from "react";
import { IconProps } from "@/common/types/icons";

const BurgerMenuIcon: FC<IconProps> = ({
    className = 'w-6 h-6"'
}): JSX.Element => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={className}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
        </>
    );
};

export default BurgerMenuIcon;
