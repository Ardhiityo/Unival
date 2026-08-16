import { useEffect, useRef, useState } from "react";

export default function useCounter(target: number, start: boolean) {
    const [value, setValue] = useState(0);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        if (!start) return;
        const duration = 1800;
        const startTime = performance.now();
        const tick = (now: number) => {
            const p = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(target * eased));
            if (p < 1) {
                rafRef.current = requestAnimationFrame(tick);
            }
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [target, start]);

    return value;
}