import { useEffect, useState } from 'react';

export type TimerProps = {
    startTime: string;
    endTime: string;
    extraclasses?: string;
};

export function Timer({ startTime, endTime, extraclasses }: TimerProps) {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const [startDay, startMonth, startYear] = startTime.split('-').map(Number);
            const [endDay, endMonth, endYear] = endTime.split('-').map(Number);

            const start = new Date(startYear, startMonth - 1, startDay).getTime();
            const end = new Date(endYear, endMonth - 1, endDay).getTime();

            let targetTime: number;
            if (now < start) {
                targetTime = start;
            } else if (now >= start && now <= end) {
                targetTime = end;
            } else {
                setTimeLeft('0 Days 0 Hours 0 Minutes');
                return;
            }

            const difference = targetTime - now;
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

            setTimeLeft(`${days} Days ${hours} Hours ${minutes} Minutes`);
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 60000);

        return () => clearInterval(timer);
    }, [startTime, endTime]);

    return (
        <div className={extraclasses}>{timeLeft}</div>
    );
}
