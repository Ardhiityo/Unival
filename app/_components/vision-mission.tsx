"use client"

import Reveal from "./reveal"

const missions = [
    {
        title: "Pengabdian Masyarakat",
        description: "Menyelenggarakan inovasi Tridharma Perguruan Tinggi dengan akses pendidikan, pengajaran, penelitian, pengabdian masyarakat yang baik dan berkualitas.",
        delay: 0
    },
    {
        title: "Pendidikan Berkualitas",
        description: "Menyelenggarakan pendidikan yang bermutu, dinamis, beradaptasi dengan teknologi yang menghasilkan lulusan yang beriman, bertaqwa, berakhlaq mulia, dan mampu bersaing di pasar tenaga kerja secara global.",
        delay: 80
    },
    {
        title: "Riset & Inovasi",
        description: "Menyelenggarakan penelitian dan pengabdian masyarakat yang berkontribusi kepada pengembangan ilmu pengetahuan dan teknologi.",
        delay: 160
    },
    {
        title: "Karakter & Integritas",
        description: "Menyelenggarakan iklim akademik dengan tata pamong universitas secara adil, bertanggung jawab, transparan yang kredibel berdasarkan kebijakan pendidikan nasional.",
        delay: 240
    },
    {
        title: "Kolaborasi Global",
        description: "Menyelenggarakan kerjasama dengan cara membangun jaringan Nasional dan Internasional dalam pengembangan ilmu pengetahuan dan teknologi yang bermanfaat bagi kesejahteraan dan kemajuan masyarakat.",
        delay: 320
    }
]

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
                                Menjadi Universitas Unggul sebagai pusat peradaban ilmu pengetahuan, teknologi dan menciptakan generasi emas mandiri, berdaya saing global, beriman, berkarakter yang berkontribusi pada kesejahteraan dan kemajuan masyarakat
                            </p>
                            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
                                Ditetapkan dalam Rencana Induk Pengembangan Universitas Al-Khairiyah.
                            </p>
                        </div>
                    </Reveal>
                    <div className="grid gap-4 lg:col-span-3 sm:grid-cols-2">
                        {missions.map((mission, index) => (
                            <Reveal key={index} delay={mission.delay}>
                                <div className="mission-card">
                                    <span className="badge-num">{index + 1}</span>
                                    <h3 >{mission.title}</h3>
                                    <p>{mission.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}