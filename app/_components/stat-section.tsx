"use client"

import Counter from "./counter";
import Reveal from "./reveal";

export default function StatSection({ countersStart }: { countersStart: boolean }) {
    return (
        <section id="statistik" className="px-4 py-6">
            <div className="mx-auto max-w-6xl glass rounded-4xl p-6 sm:p-10">
                <Reveal>
                    <div className="grid gap-6 sm:grid-cols-3">
                        <div className="stat-card">
                            <Counter target={42} start={countersStart} />
                            <p className="mt-2 font-semibold">Program Studi</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Diploma, Sarjana, hingga Doktoral
                            </p>
                        </div>
                        <div className="stat-card">
                            <Counter target={24500} suffix="+" start={countersStart} />
                            <p className="mt-2 font-semibold">Mahasiswa Aktif</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Dari 34 provinsi &amp; 18 negara
                            </p>
                        </div>
                        <div className="stat-card">
                            <Counter target={960} suffix="+" start={countersStart} />
                            <p className="mt-2 font-semibold">Dosen &amp; Peneliti</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                72% bergelar Doktor &amp; Profesor
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}