import React, { FC, JSX } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
    SelectComponentProps,
    SelectElementType
} from "@/common/types/shop";

const SelectComponent: FC<SelectComponentProps> = ({
    title,
    data,
    size,
    state,
    setState
}): JSX.Element => {
    const handleChange = (event: any): void => {
        if (event.target) {
            setState(event.target.value);
        }
    };

    const renderSelectItems: JSX.Element[] = data.map(
        (element: SelectElementType) => (
            <MenuItem key={element.name} value={element.value}>
                {element.name}
            </MenuItem>
        )
    );

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size={size}>
            <InputLabel id={`select-${title}-label`}>{title}</InputLabel>
            <Select
                labelId={`select-${title}-label`}
                id={`select ${title}`}
                value={state}
                label={title}
                onChange={handleChange}
            >
                {renderSelectItems}
            </Select>
        </FormControl>
    );
};

export default SelectComponent;
