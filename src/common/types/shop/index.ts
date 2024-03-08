export type SelectComponentProps = {
    title: string;
    data: SelectElementType[];
    size: "small" | "medium";
    state: string;
    setState: (value: string) => void;
};

export type SelectElementType = {
    name: string;
    value: string | number;
};

export type ShopFilterProps = {
    setCategoryName: (name: string) => void;
};

export type ProductColorsComponentProps = {
    colors: ColorType[];
};

export type ColorType = {
    color:ColorElementType
    colorsId:string
    id:string
    productId: string
}

type ColorElementType = {
id: string, value: string, label: string, color: string, productId: string
}
