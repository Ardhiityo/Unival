"use client"

import useCounter from "../hooks/useCounter";

export default function Counter({
    target,
    start,
}: {
    target: number;
    suffix?: string;
    start: boolean;
}) {
    const value = useCounter(target, start);
    return (
        <span className="font-display text-4xl font-extrabold text-brand dark:text-brand-200 sm:text-5xl">
            {value.toLocaleString("id-ID")}
        </span>
    );
}