"use client"

import Reveal from "./reveal"

export function Service() {
    return (
        <section id="layanan" className="px-4 py-20 sm:py-24">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="pill">Layanan Digital</span>
                        <h2 className="section-title mt-4">
                            Semua Kebutuhan Akademik dalam Satu Portal
                        </h2>
                    </div>
                </Reveal>
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    <Reveal>
                        <article className="service-card">
                            <span className="svc-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="3" y="4" width="18" height="14" rx="2" />
                                    <path d="M8 20h8M12 18v2M7 9h10M7 13h6" />
                                </svg>
                            </span>
                            <h3>SIAKAD</h3>
                            <p>
                                Sistem Informasi Akademik untuk KRS, jadwal kuliah, nilai,
                                dan transkrip mahasiswa.
                            </p>
                            <a
                                href="https://siakad.nexus.ac.id"
                                target="_blank"
                                rel="noopener"
                                className="btn-ghost mt-5"
                            >
                                Buka SIAKAD
                            </a>
                        </article>
                    </Reveal>
                    <Reveal delay={100}>
                        <article id="pmb" className="service-card">
                            <span className="svc-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 10 12 5 2 10l10 5 10-5z" />
                                    <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
                                </svg>
                            </span>
                            <h3>PMB Online</h3>
                            <p>
                                Pendaftaran mahasiswa baru sepenuhnya online: daftar, unggah
                                berkas, dan cek kelulusan.
                            </p>
                            <a
                                href="https://pmb.nexus.ac.id"
                                target="_blank"
                                rel="noopener"
                                className="btn-primary mt-5"
                            >
                                Daftar Sekarang
                            </a>
                        </article>
                    </Reveal>
                    <Reveal delay={200}>
                        <article className="service-card">
                            <span className="svc-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                    <path d="m18 2 4 4-8 8-4 1 1-4 7-9z" />
                                </svg>
                            </span>
                            <h3>Form Perbaikan Data</h3>
                            <p>
                                Ajukan koreksi data diri, NIM, atau dokumen akademik dengan
                                verifikasi cepat.
                            </p>
                            <a
                                href="https://form.nexus.ac.id/perbaikan-data"
                                target="_blank"
                                rel="noopener"
                                className="btn-ghost mt-5"
                            >
                                Isi Formulir
                            </a>
                        </article>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}