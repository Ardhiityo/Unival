"use client"

import Image from "next/image";
import Reveal from "./reveal"

const faculties = [
    {
        name: "Fakultas Teknik",
        img: "/assets/images/hero-3d.jpg",
        desc: "Teknik Informatika, Sipil, Elektro, Industri, dan Mesin dengan laboratorium berstandar industri.",
    },
    {
        name: "Fakultas Kedokteran",
        img: "/assets/images/news-2.jpg",
        desc: "Pendidikan dokter dan ilmu kesehatan dengan rumah sakit pendidikan terintegrasi.",
    },
    {
        name: "Fakultas Ekonomi & Bisnis",
        img: "/assets/images/news-4.jpg",
        desc: "Manajemen, Akuntansi, dan Bisnis Digital yang terhubung dengan ekosistem startup.",
    },
    {
        name: "Fakultas Hukum",
        img: "/assets/images/news-6.jpg",
        desc: "Kajian hukum bisnis, tata negara, dan internasional dengan klinik hukum aktif.",
    },
    {
        name: "Fakultas Ilmu Komputer",
        img: "/assets/images/news-3.jpg",
        desc: "Data Science, Kecerdasan Artifisial, dan Keamanan Siber berbasis proyek nyata.",
    },
    {
        name: "Fakultas Ilmu Sosial & Politik",
        img: "/assets/images/news-5.jpg",
        desc: "Komunikasi, Hubungan Internasional, dan Administrasi Publik yang responsif zaman.",
    },
    {
        name: "Fakultas Keguruan & Pendidikan",
        img: "/assets/images/news-1.jpg",
        desc: "Mencetak pendidik profesional dengan kurikulum berbasis praktik lapangan.",
    },
];

export function Faculties() {
    return (
        <section id="fakultas" className="px-4 py-20 sm:py-24">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="pill">Akademik</span>
                        <h2 className="section-title mt-4">
                            Tujuh Fakultas, Satu Standar Keunggulan
                        </h2>
                        <p className="mt-3 text-slate-600 dark:text-slate-300">
                            Pilih bidang yang paling sesuai dengan tujuan karier Anda.
                        </p>
                    </div>
                </Reveal>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {faculties.map((f, i) => (
                        <Reveal key={f.name} delay={(i % 3) * 90}>
                            <article className="faculty-card">
                                <div className="overflow-hidden">
                                    <Image
                                        src={f.img}
                                        alt={f.name}
                                        loading="lazy"
                                        width={1024}
                                        height={640}
                                        className="h-44 w-full object-cover"
                                    />
                                </div>
                                <div className="relative p-6">
                                    <h3 className="font-display text-lg font-bold">
                                        {f.name}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                        {f.desc}
                                    </p>
                                    <a href="#layanan" className="btn-ghost mt-5">
                                        Lihat Selengkapnya
                                    </a>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}