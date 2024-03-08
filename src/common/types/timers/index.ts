export type CountdownTimerComponentProps = {
    targetDate: number | string | Date;
};

export type ShowCounterComponentProps = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export type DateTimeDisplayProps = {
    value: number;
    type: string;
};
