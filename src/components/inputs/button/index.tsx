import { JSX, FC } from "react";
import { ButtonProps } from "@/common/types/inputs/buttons";

const AppButton: FC<ButtonProps> = ({ title }): JSX.Element => {
    return (
        <button className="bg-black text-white w-full py-2 px-4 rounded font-medium">
            {title}
        </button>
    );
};

export default AppButton;
