import ShowCounterComponent from "@/components/countdown-timer/show-counter";
import { useCountdown } from "@/hooks";
import { CountdownTimerComponentProps } from "@/common/types/timers";
import { FC, JSX } from "react";

const CountdownTimerComponent: FC<CountdownTimerComponentProps> = ({
    targetDate
}): JSX.Element => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    return (
        <ShowCounterComponent
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
        />
    );
};

export default CountdownTimerComponent;
