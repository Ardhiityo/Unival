"use client"

import Reveal from "./reveal"

export function VisionMission() {
    return (
        <section id="visimisi" className="px-4 py-20 sm:py-24">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="pill">Arah Kami</span>
                        <h2 className="section-title mt-4">
                            Visi &amp; Misi Universitas
                        </h2>
                        <p className="mt-3 text-slate-600 dark:text-slate-300">
                            Landasan yang memandu setiap keputusan akademik dan pelayanan
                            kami.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-12 grid gap-6 lg:grid-cols-5">
                    <Reveal className="lg:col-span-2">
                        <div className="glass rounded-4xl p-8 h-full">
                            <span className="badge-num">Visi</span>
                            <p className="mt-5 font-display text-xl font-bold leading-snug sm:text-2xl">
                                &ldquo;Menjadi universitas riset terkemuka di Asia Tenggara
                                yang unggul dalam inovasi, berintegritas, dan berdampak bagi
                                kemanusiaan pada tahun 2035.&rdquo;
                            </p>
                            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
                                Ditetapkan dalam Rencana Induk Pengembangan 2025–2035.
                            </p>
                        </div>
                    </Reveal>
                    <div className="grid gap-4 lg:col-span-3 sm:grid-cols-2">
                        {[
                            {
                                num: "01",
                                title: "Pendidikan Berkualitas",
                                desc: "Menyelenggarakan pendidikan tinggi yang adaptif, inklusif, dan relevan dengan kebutuhan zaman.",
                                delay: 0,
                            },
                            {
                                num: "02",
                                title: "Riset &amp; Inovasi",
                                desc: "Mengembangkan riset terapan yang menghasilkan solusi nyata bagi industri dan masyarakat.",
                                delay: 80,
                            },
                            {
                                num: "03",
                                title: "Pengabdian Masyarakat",
                                desc: "Memperkuat peran kampus sebagai mitra pembangunan daerah dan nasional.",
                                delay: 160,
                            },
                            {
                                num: "04",
                                title: "Tata Kelola Digital",
                                desc: "Membangun tata kelola transparan, akuntabel, dan terdigitalisasi penuh.",
                                delay: 240,
                            },
                            {
                                num: "05",
                                title: "Kolaborasi Global",
                                desc: "Memperluas kemitraan internasional untuk pertukaran mahasiswa dan riset bersama.",
                                delay: 320,
                            },
                            {
                                num: "06",
                                title: "Karakter &amp; Integritas",
                                desc: "Menanamkan nilai etika, kepemimpinan, dan tanggung jawab sosial pada setiap lulusan.",
                                delay: 400,
                            },
                        ].map((m) => (
                            <Reveal key={m.num} delay={m.delay}>
                                <div className="mission-card">
                                    <span className="badge-num">{m.num}</span>
                                    <h3 dangerouslySetInnerHTML={{ __html: m.title }} />
                                    <p>{m.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}