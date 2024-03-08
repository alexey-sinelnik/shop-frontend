"use client";
import { useEffect, useState } from "react";

export const useCountdown = (targetDate: string | number | Date) => {
    const countDownDate: number = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState<number>(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        const interval: NodeJS.Timeout = setInterval((): void => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
    const days: number = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes: number = Math.floor(
        (countDown % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds: number = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
};
