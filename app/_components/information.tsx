"use client"

import Reveal from "./reveal"

export function Information() {
    return (
        <section className="px-4 py-16">
            <Reveal>
                <div className="cta-band mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-12">
                    <div className="cta-shape cta-shape-1"></div>
                    <div className="cta-shape cta-shape-2"></div>
                    <div className="relative">
                        <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                            Siap Menjadi Bagian dari Universitas Kami?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-white/80">
                            Pendaftaran gelombang II dibuka hingga 30 Juni. Konsultasi
                            program studi gratis bersama tim akademik kami.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <a
                                href="https://pmb.nexus.ac.id"
                                target="_blank"
                                rel="noopener"
                                className="btn-white btn-lg"
                            >
                                Daftar Sekarang
                            </a>
                            <a href="#tentang" className="btn-outline-white btn-lg">
                                Jelajahi Kampus
                            </a>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}