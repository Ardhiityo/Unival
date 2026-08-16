"use client"

import Image from "next/image"
import Reveal from "./reveal"

export function About() {
    return (
        <section id="tentang" className="px-4 py-20 sm:py-28">
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                <Reveal>
                    <div className="tilt-card glass rounded-4xl p-3">
                        <Image
                            src="/assets/images/about-campus.jpg"
                            alt="Suasana kampus Universitas Al-Khairiyah"
                            width={1280}
                            height={896}
                            loading="lazy"
                            className="w-full rounded-3xl object-cover"
                        />
                    </div>
                    <div className="mt-4 glass overflow-hidden rounded-4xl p-3">
                        <video
                            className="w-full rounded-3xl"
                            controls
                            preload="none"
                            poster="/assets/images/news-3.jpg"
                        >
                            <source
                                src="https://www.w3schools.com/html/mov_bbb.mp4"
                                type="video/mp4"
                            />
                            Browser Anda tidak mendukung video.
                        </video>
                        <p className="px-2 py-2 text-xs text-slate-500 dark:text-slate-400">
                            Video profil kampus (dummy)
                        </p>
                    </div>
                </Reveal>
                <Reveal delay={120}>
                    <span className="pill">Tentang Kami</span>
                    <h2 className="section-title mt-4">
                        Kampus Riset yang Tumbuh Bersama Masyarakat
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-300">
                        Universitas Al-Khairiyah adalah perguruan tinggi yang berfokus pada
                        pendidikan berbasis riset, kolaborasi industri, dan pengabdian
                        masyarakat. Kami percaya bahwa ilmu pengetahuan harus berdampak
                        nyata bagi kehidupan sehari-hari.
                    </p>
                    <p className="mt-4 text-slate-600 dark:text-slate-300">
                        Berdiri sejak 1978 dengan tiga fakultas, kini Nexus berkembang
                        menjadi tujuh fakultas dengan 42 program studi, pusat riset
                        terapan, dan jaringan alumni yang tersebar di berbagai sektor
                        strategis nasional maupun internasional.
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        <div className="info-card">
                            <p className="font-semibold">Berdiri</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                14 Maret 1978
                            </p>
                        </div>
                        <div className="info-card">
                            <p className="font-semibold">Luas Kampus</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                48 hektar, 3 lokasi
                            </p>
                        </div>
                        <div className="info-card">
                            <p className="font-semibold">Akreditasi</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Unggul (BAN-PT)
                            </p>
                        </div>
                        <div className="info-card">
                            <p className="font-semibold">Kerja Sama</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                120+ mitra industri
                            </p>
                        </div>
                    </div>
                    <a href="#fakultas" className="btn-primary btn-lg mt-8">
                        Selengkapnya
                    </a>
                </Reveal>
            </div>
        </section>
    )
}