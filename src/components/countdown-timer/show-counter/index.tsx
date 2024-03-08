import DateTimeDisplay from "@/components/countdown-timer/display-date";
import { ShowCounterComponentProps } from "@/common/types/timers";
import { FC, JSX } from "react";

const ShowCounterComponent: FC<ShowCounterComponentProps> = ({
    days,
    hours,
    minutes,
    seconds
}): JSX.Element => {
    return (
        <div className="flex gap-2 md:gap-4">
            <DateTimeDisplay value={days} type={"Days"} />
            <DateTimeDisplay value={hours} type={"Hours"} />
            <DateTimeDisplay value={minutes} type={"Mins"} />
            <DateTimeDisplay value={seconds} type={"Seconds"} />
        </div>
    );
};

export default ShowCounterComponent;
