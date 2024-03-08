import React, { FC, ReactNode } from "react";
import NavigationComponent from "@/components/navigation";
import FooterComponent from "@/components/footer";

type LayoutProps = {
    children: ReactNode
}

const LayoutComponent: FC<LayoutProps> = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavigationComponent />
            <main className="flex-grow">
                {children}
            </main>
            <FooterComponent />
        </div>
    );
};

export default LayoutComponent;