"use client"

import { useEffect, useRef, useState } from "react";
import Reveal from "./reveal"
import StatSection from "./stat-section"
import Image from "next/image";
import { environment } from "../config/environment";
import { HeroSectionItem } from "../types/general";

export function HeroSection() {
    const [countersStart, setCountersStart] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);
    const baseUrl = environment.API_URL;
    const [heroSection, setHeroSection] = useState<HeroSectionItem | null>(null)

    useEffect(() => {
        async function fetchHeroSections() {
            const response = await fetch(`${baseUrl}/hero-sections`);
            if (response.ok) {
                const result = await response.json();
                setHeroSection(result.data[0]);
            }
        }
        fetchHeroSections();
    }, [baseUrl])

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
                        <span className="pill">Excellent · Innovative · {"Santri's "}Character</span>
                        <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                            Membentuk Generasi{" "}
                            <span className="text-gradient">
                                Baik &amp; Berdaya Saing Global
                            </span>
                        </h1>
                        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                            <b>Universitas Al-Khairiyah</b>  menghadirkan pendidikan tinggi berbasis riset,
                            teknologi, dan nilai keagamaan. Terletak di pusat jantung Kota Cilegon yang strategis, serta ekosistem kampus digital yang saling terintegrasi.
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
                                <dd className="font-display text-lg font-bold">{heroSection?.accreditation}</dd>
                            </div>
                            <div>
                                <dt className="text-slate-500 dark:text-slate-400">
                                    Mitra Industri
                                </dt>
                                <dd className="font-display text-lg font-bold">{heroSection?.total_industry_partner}+</dd>
                            </div>
                            <div>
                                <dt className="text-slate-500 dark:text-slate-400">Alumni</dt>
                                <dd className="font-display text-lg font-bold">{heroSection?.total_number_of_graduate}+</dd>
                            </div>
                        </dl>
                    </Reveal>

                    <Reveal delay={120}>
                        <div className="relative">
                            <div className="tilt-card glass rounded-4xl p-3">
                                <Image
                                    src="/assets/images/hero.png"
                                    alt="Visual 3D gedung Universitas Al-Khairiyah"
                                    width={1280}
                                    height={1024}
                                    className="h-full w-full rounded-3xl object-cover"
                                />
                            </div>
                            <div className="floater glass absolute -left-5 top-10 hidden rounded-2xl px-4 py-3 sm:block">
                                <p className="text-[11px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400">
                                    Kampus Digital
                                </p>
                                <p className="font-display text-xl font-bold">SIAKAD</p>
                            </div>
                            <div className="floater floater-slow glass absolute -right-15 bottom-3 hidden rounded-2xl px-4 py-3 sm:block">
                                <p className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">
                                    Biaya Terjangkau
                                </p>
                                <p className="font-display text-xl font-bold">Beasiswa & Mandiri</p>
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