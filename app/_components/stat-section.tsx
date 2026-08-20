"use client"

import { useEffect, useState } from "react";
import { environment } from "../config/environment";
import Counter from "./counter";
import Reveal from "./reveal";
import { StatisticItem } from "../types/general";

export default function StatSection({ countersStart }: { countersStart: boolean }) {
    const baseUrl = environment.API_URL;
    const [statistics, setStatistics] = useState<StatisticItem[] | []>([]);

    useEffect(() => {
        async function fetchStatistics() {
            const response = await fetch(`${baseUrl}/statistics`)
            const result = await response.json();
            setStatistics(result.data);
        }
        fetchStatistics();
    }, [baseUrl])

    return (
        <section id="statistik" className="px-4 py-6">
            <div className="mx-auto max-w-6xl glass rounded-4xl p-6 sm:p-10">
                <Reveal>
                    <div className="grid gap-6 sm:grid-cols-3" >
                        {statistics.map((statistic, index) => (
                            <div className="stat-card text-center" key={`${statistic.title}-${index}`}>
                                <Counter target={statistic.total} start={countersStart} />
                                <p className="mt-2 font-semibold">{statistic.title}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    {statistic.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}