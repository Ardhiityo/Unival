"use client"

import { useEffect, useRef, useState } from "react";
import Reveal from "./reveal"
import StatSection from "./stat-section"
import Image from "next/image";

export function HeroSection() {
    const [countersStart, setCountersStart] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = statsRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCountersStart(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.4 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section
                id="home"
                className="relative px-4 pt-32 pb-20 sm:pt-40 lg:pb-28"
            >
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <Reveal>
                        <span className="pill">Excellent · Innovative. {"Santri's "}Character</span>
                        <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                            Membentuk Generasi{" "}
                            <span className="text-gradient">
                                Unggul &amp; Berdaya Saing Global
                            </span>
                        </h1>
                        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                            <b>Universitas Al-Khairiyah</b>  menghadirkan pendidikan tinggi berbasis riset,
                            teknologi, dan nilai keagamaan. Terletak di pusat jantung kota Cilegon yang strategis, serta ekosistem kampus digital yang saling terintegrasi.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#pmb" className="btn-primary btn-lg">
                                Daftar Sekarang
                            </a>
                            <a href="#tentang" className="btn-ghost btn-lg">
                                Jelajahi Kampus
                            </a>
                        </div>
                        <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm">
                            <div>
                                <dt className="text-slate-500 dark:text-slate-400">
                                    Akreditasi
                                </dt>
                                <dd className="font-display text-lg font-bold">Unggul (A)</dd>
                            </div>
                            <div>
                                <dt className="text-slate-500 dark:text-slate-400">
                                    Mitra Industri
                                </dt>
                                <dd className="font-display text-lg font-bold">120+</dd>
                            </div>
                            <div>
                                <dt className="text-slate-500 dark:text-slate-400">Alumni</dt>
                                <dd className="font-display text-lg font-bold">64.000+</dd>
                            </div>
                        </dl>
                    </Reveal>

                    <Reveal delay={120}>
                        <div className="relative">
                            <div className="tilt-card glass rounded-4xl p-3">
                                <Image
                                    src="/assets/images/hero-3d.jpg"
                                    alt="Visual 3D gedung Universitas Al-Khairiyah"
                                    width={1280}
                                    height={1024}
                                    className="h-full w-full rounded-3xl object-cover"
                                />
                            </div>
                            <div className="floater glass absolute -left-3 top-10 hidden rounded-2xl px-4 py-3 sm:block">
                                <p className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
                                    Riset Aktif
                                </p>
                                <p className="font-display text-xl font-bold">318 Proyek</p>
                            </div>
                            <div className="floater floater-slow glass absolute -right-2 bottom-8 hidden rounded-2xl px-4 py-3 sm:block">
                                <p className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
                                    Kampus Digital
                                </p>
                                <p className="font-display text-xl font-bold">SIAKAD 24/7</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
            <div ref={statsRef}>
                <StatSection countersStart={countersStart} />
            </div>
        </>
    )
}