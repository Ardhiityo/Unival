"use client"

import Reveal from "./reveal"

export function Information() {
    return (
        <section className="px-4 py-16" id="pmb">
            <Reveal>
                <div className="cta-band mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-12">
                    <div className="cta-shape cta-shape-1"></div>
                    <div className="cta-shape cta-shape-2"></div>
                    <div className="relative">
                        <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                            Siap Menjadi Bagian dari Universitas Kami?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-white/80">
                            Pendaftaran bisa dilakukan secara online ataupun offline. Konsultasi
                            program studi gratis bersama tim akademik kami.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <a
                                href="https://unival.siakadcloud.com/spmbfront/jalur-seleksi"
                                target="_blank"
                                rel="noopener"
                                className="btn-white btn-lg"
                            >
                                Daftar Sekarang
                            </a>
                            <a href="#contact" className="btn-outline-white btn-lg">
                                Konsultasi Sekarang
                            </a>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}