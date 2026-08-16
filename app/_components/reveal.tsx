"use client"

import { useEffect, useRef, useState } from "react";

export default function Reveal({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => setVisible(true), delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`reveal ${visible ? "visible" : ""} ${className}`}
        >
            {children}
        </div>
    );
}