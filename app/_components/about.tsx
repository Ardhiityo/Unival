"use client"

import Image from "next/image"
import Reveal from "./reveal"

export function About() {
    return (
        <section id="tentang" className="px-4 py-20 sm:py-28">
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                <Reveal>
                    <div className="tilt-card glass rounded-4xl p-3 relative">
                        <Image
                            src="/assets/images/syamun.png"
                            alt="Suasana kampus Universitas Al-Khairiyah"
                            width={1280}
                            height={896}
                            loading="lazy"
                            className="w-full rounded-3xl object-cover"
                        />
                        <div className="floater floater-slow glass absolute -left-15 bottom-3 hidden rounded-2xl px-4 py-3 sm:block">
                            <p className="text-[10px] uppercase tracking-widest text-slate-700 dark:text-slate-400 font-bold">
                                Pendiri Al-Khairiyah
                            </p>
                            <p className="font-display text-base font-bold">Brigjend KH. {"Syam'un"}</p>
                        </div>
                    </div>
                    <div className="mt-4 glass overflow-hidden rounded-4xl p-3">
                        <video
                            className="w-full rounded-3xl"
                            controls
                            preload="none"
                            poster="/assets/images/thumbnail.png"
                        >
                            <source
                                src="/unival.mp4"
                                type="video/mp4"
                            />
                            Browser Anda tidak mendukung video.
                        </video>
                        <p className="px-2 py-2 text-xs text-slate-500 dark:text-slate-400">
                            Video Profil Universitas Al-Khairiyah
                        </p>
                    </div>
                </Reveal>
                <Reveal delay={120}>
                    <span className="pill">Tentang Kami</span>
                    <h2 className="section-title mt-4">
                        Kampus Peradaban Islam yang Tumbuh Bersama Masyarakat
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-300">
                        Berawal dari Perguruan Islam Al-Khairiyah yang didirikan oleh Pahlawan Nasional <a href="https://id.wikipedia.org/wiki/Syam%27un" target="_blank"><b>Brigadir Jendral {"KH.Syam'un"}</b></a> pada tahun <b>1916</b>, nama <br /> Al-Khairiyah tersebar di berbagai kota sebagai sekolah Islam terjangkau yang tumbuh bersama masyarakat, dan jaringan alumni yang tersebar di berbagai sektor
                        strategis nasional maupun internasional.
                    </p>
                    <p className="mt-4 text-slate-600 dark:text-slate-300">
                        Al-Khairiyah berevolusi dari Perguruan Islam hingga tepatnya pada tahun <b>2020</b> resmi memiliki <b>Surat Keputusan (SK) Kemendikbud dengan nomor 1247/M/2020 tertanggal 30 Desember 2020</b>, dan sejak tahun <b>1916</b> nama <br /> Al-Khairiyah menjadi pelopor pendidikan terjangkau yang berkualitas bagi masyarakat, kini Universitas Al-Khairiyah menjadi <b>Perguruan Tinggi Swasta No. 1</b> di Kota Cilegon
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        <div className="info-card">
                            <p className="font-semibold">Berdiri</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                2020
                            </p>
                        </div>
                        <div className="info-card">
                            <p className="font-semibold">Luas Kampus</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                1000m<sup>2</sup>
                            </p>
                        </div>
                        <div className="info-card">
                            <p className="font-semibold">Akreditasi</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Baik (BAN-PT)
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