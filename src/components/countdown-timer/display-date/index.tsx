import { FC, JSX } from "react";
import { DateTimeDisplayProps } from "@/common/types/timers";

const DateTimeDisplay: FC<DateTimeDisplayProps> = ({
    value,
    type
}): JSX.Element => {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-gray p-2 md:p-8">
                <p className="text-xl md:text-4xl text-center opacity-70 min-w-[50px]">
                    {value}
                </p>
            </div>
            <span className="text-lg md:text-xl font-medium opacity-70">
                {type}
            </span>
        </div>
    );
};

export default DateTimeDisplay;
