import { FC, JSX } from "react";
import { ContainerProps } from "@/common/types/container";

const Container: FC<ContainerProps> = ({ children }): JSX.Element => {
    return (
        <div className="max-w-[1280px] mx-auto xl:px-20 md:px-2 px-4 w-full">
            {children}
        </div>
    );
};

export default Container;
