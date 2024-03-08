import React, { FC, JSX } from "react";

const ProductParametersComponent: FC<any> = ({
    title,
    parameter
}): JSX.Element => {
    return (
        <div className="flex gap-2 mb-2">
            <p className="font-semibold">{title}:</p>
            {parameter}
        </div>
    );
};

export default ProductParametersComponent;
