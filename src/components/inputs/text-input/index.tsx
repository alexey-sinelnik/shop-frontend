import { FC, JSX } from "react";

export type TextInputComponentProps = {
    type: string;
    placeholder?: string;
    className?: string;
};

const TextInputComponent: FC<TextInputComponentProps> = ({ type, placeholder, className }): JSX.Element => {
    return <input type={type} placeholder={placeholder} className={`${className} outline-none border-b-2 border-black border-opacity-20 py-1`} />;
};

export default TextInputComponent;
