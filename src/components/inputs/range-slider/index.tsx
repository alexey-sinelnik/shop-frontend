import { FC, JSX } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { RangeSliderProps } from "@/common/types/inputs/range-slider";

const RangeSliderComponent: FC<RangeSliderProps> = ({
    value,
    setValue
}): JSX.Element => {
    const handleChange = (event: Event, newValue: number | number[]): void => {
        setValue(newValue as number[]);
    };

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                value={value}
                defaultValue={200}
                onChange={handleChange}
                min={0}
                max={100000}
                color={"success"}
            />
        </Box>
    );
};

export default RangeSliderComponent;
