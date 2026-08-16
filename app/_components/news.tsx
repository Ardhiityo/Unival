"use client"

import { useState } from "react";
import Reveal from "./reveal";
import { NewsItem } from "../types/general";
import NewsDetail from "./news-detail";
import Image from "next/image";

const newsData = [
    {
        img: "/assets/images/news-1.jpg",
        title: "Wisuda Periode I Meluluskan 1.240 Sarjana",
        date: "12 Agustus 2026",
        category: "Akademik",
        desc: "Universitas Al-Khairiyah menggelar prosesi wisuda dengan tingkat serapan kerja alumni mencapai 87% dalam enam bulan.",
        content: `Universitas Al-Khairiyah kembali menorehkan pencapaian membanggakan dengan menggelar Prosesi Wisuda Periode I Tahun Akademik 2025/2026. Sebanyak 1.240 wisudawan dari tujuh fakultas resmi dinyatakan lulus dan siap memasuki dunia profesional.

Rektor Universitas Al-Khairiyah, Prof. Dr. Arief Wibowo, M.Pd., dalam sambutannya menegaskan bahwa angka serapan kerja alumni mencapai 87% dalam enam bulan pertama pasca kelulusan—melampaui rata-rata nasional perguruan tinggi sejenis. "Ini bukan sekadar angka. Ini bukti bahwa kurikulum berbasis kompetensi dan kemitraan industri kita benar-benar bekerja," ujarnya.

Prosesi berlangsung khidmat di Graha Utama Kampus Pusat, dihadiri oleh orang tua wisudawan, sivitas akademika, serta para mitra industri strategis. Wisudawan terbaik tahun ini diraih oleh Salsabila Putri Andini dari Fakultas Ilmu Komputer dengan IPK 3,98 dan predikat Summa Cum Laude.

Universitas Al-Khairiyah juga mengumumkan program beasiswa purna wisuda bagi lulusan terbaik yang melanjutkan studi ke jenjang magister, sebagai bentuk komitmen berkelanjutan terhadap pengembangan sumber daya manusia Indonesia.`,
    },
    {
        img: "/assets/images/news-2.jpg",
        title: "Riset Biomedis Nexus Raih Pendanaan Nasional",
        date: "05 Agustus 2026",
        category: "Riset",
        desc: "Tim peneliti fakultas kedokteran memperoleh hibah riset untuk pengembangan alat diagnostik cepat.",
        content: `Tim peneliti dari Fakultas Kedokteran Universitas Al-Khairiyah berhasil meraih hibah riset nasional senilai Rp 4,2 miliar dari Kementerian Riset dan Teknologi. Dana tersebut akan digunakan untuk mengembangkan prototipe alat diagnostik cepat berbasis biosensor yang mampu mendeteksi infeksi bakteri resistan antibiotik hanya dalam 15 menit.

Ketua tim peneliti, Dr. Melissa Hartono, Sp.PK., menjelaskan bahwa alat ini dirancang untuk digunakan di puskesmas dan fasilitas kesehatan tingkat pertama, sehingga dapat mempercepat pengambilan keputusan klinis di daerah-daerah yang memiliki keterbatasan akses laboratorium canggih.

Penelitian ini merupakan kolaborasi antara Fakultas Kedokteran, Fakultas Teknik bidang Mikro-elektronika, dan tiga rumah sakit mitra di Jawa dan Sulawesi. Target prototype pertama dituntaskan pada kuartal pertama 2027, dengan uji klinis terbatas yang dijadwalkan berlangsung di tiga rumah sakit mitra.

Program ini juga membuka peluang kerja sama riset internasional, dengan dua institusi dari Belanda dan Korea Selatan yang telah menyatakan minat untuk bergabung dalam konsorsium penelitian lanjutan.`,
    },
    {
        img: "/assets/images/news-3.jpg",
        title: "Perpustakaan Pusat Hadirkan Ruang Belajar 24 Jam",
        date: "28 Juli 2026",
        category: "Fasilitas",
        desc: "Fasilitas baru mendukung mahasiswa dengan ruang diskusi, akses jurnal internasional, dan zona tenang.",
        content: `Perpustakaan Pusat Universitas Al-Khairiyah resmi membuka layanan 24 jam mulai Agustus 2026. Renovasi besar-besaran selama delapan bulan mengubah wajah perpustakaan menjadi pusat belajar modern yang dilengkapi berbagai fasilitas kelas dunia.

Fasilitas baru meliputi 12 ruang diskusi kedap suara berkapasitas 4–10 orang yang dapat dipesan secara online, zona belajar tenang dengan 200 kursi ergonomis, serta area kreatif dengan papan tulis digital dan proyektor portabel. Seluruh area kini terhubung dengan jaringan Wi-Fi 10 Gbps.

Akses ke lebih dari 45.000 jurnal internasional dari database Scopus, Web of Science, dan IEEE Xplore kini tersedia 24 jam penuh melalui portal digital perpustakaan. Mahasiswa juga dapat mengakses lebih dari 120.000 e-book akademik tanpa biaya tambahan.

Kepala Perpustakaan, Dra. Yuni Setiawati, M.Hum., menyampaikan bahwa sistem peminjaman mandiri berbasis RFID juga telah diaktifkan, memungkinkan mahasiswa meminjam dan mengembalikan buku kapan saja tanpa harus mengantre di meja layanan.`,
    },
    {
        img: "/assets/images/news-4.jpg",
        title: "Program Magang Bersertifikat Bersama 40 Mitra",
        date: "19 Juli 2026",
        category: "Karier",
        desc: "Mahasiswa semester lanjut dapat mengikuti magang berdurasi satu semester dengan konversi SKS penuh.",
        content: `Universitas Al-Khairiyah meluncurkan Program Magang Bersertifikat (PMB) generasi terbaru yang menggandeng 40 perusahaan dan lembaga mitra dari berbagai sektor industri. Program ini membuka 850 posisi magang untuk mahasiswa semester 5 ke atas yang ingin mendapatkan pengalaman kerja nyata sambil tetap memenuhi beban studi.

Keistimewaan program ini adalah konversi penuh 20 SKS untuk masa magang satu semester, sehingga mahasiswa tidak perlu khawatir ketertinggalan mata kuliah. Setiap peserta akan mendapatkan mentor dari perusahaan dan dosen pembimbing dari universitas secara bersamaan.

Mitra industri yang bergabung mencakup perusahaan teknologi, perbankan, manufaktur, kesehatan, hingga lembaga pemerintah. Di antara nama besar yang turut serta adalah PT Telkom Indonesia, Bank Mandiri, Astra International, Siloam Hospitals, dan Badan Riset dan Inovasi Nasional (BRIN).

Pendaftaran dibuka mulai 1 September 2026 melalui portal karier Nexus. Seleksi meliputi penilaian portofolio, tes kompetensi dasar, dan wawancara dengan perwakilan perusahaan mitra.`,
    },
    {
        img: "/assets/images/news-5.jpg",
        title: "Nexus Sport Festival Diikuti 3.000 Peserta",
        date: "07 Juli 2026",
        category: "Kemahasiswaan",
        desc: "Ajang tahunan mempertemukan unit kegiatan mahasiswa dari seluruh fakultas dalam sepuluh cabang olahraga.",
        content: `Nexus Sport Festival (NSF) 2026 resmi dibuka pada Sabtu pagi di Lapangan Olahraga Terpadu Kampus Utara, dihadiri lebih dari 3.000 mahasiswa dari seluruh tujuh fakultas. Ini merupakan penyelenggaraan NSF keempat sejak pertama kali digelar pada 2023, dan menjadi yang terbesar dalam sejarah universitas.

Tahun ini, NSF menghadirkan sepuluh cabang olahraga yang diperlombakan selama lima hari, meliputi futsal, bola voli, bulu tangkis, renang, atletik, bola basket, tenis meja, catur, e-sports, dan cabang baru: panjat tebing. Lebih dari 120 tim mendaftarkan diri, mewakili 38 unit kegiatan mahasiswa (UKM).

Dekan Bidang Kemahasiswaan, Dr. Rangga Permana, menyampaikan bahwa festival ini bukan sekadar ajang kompetisi, melainkan sarana mempererat kebersamaan lintas jurusan. "Kami ingin mahasiswa mengenal teman dari fakultas lain dan membangun jejaring yang kuat sejak bangku kuliah," tuturnya.

Juara umum NSF 2026 diraih oleh Fakultas Teknik dengan perolehan 4 medali emas, 2 perak, dan 3 perunggu. Piala bergilir Rektor diserahkan langsung oleh Prof. Dr. Arief Wibowo dalam upacara penutupan yang meriah.`,
    },
    {
        img: "/assets/images/news-6.jpg",
        title: "Konferensi Internasional Teknologi Berkelanjutan",
        date: "24 Juni 2026",
        category: "Internasional",
        desc: "Lebih dari 200 akademisi dari 12 negara membahas transisi energi dan kota cerdas di kampus Nexus.",
        content: `Universitas Al-Khairiyah sukses menjadi tuan rumah International Conference on Sustainable Technology (ICST) 2026, forum akademik bergengsi yang tahun ini diikuti oleh lebih dari 200 akademisi, peneliti, dan praktisi dari 12 negara di Asia, Eropa, dan Amerika.

Konferensi berlangsung selama tiga hari di Gedung Pascasarjana Nexus, mengangkat tema besar "Energy Transition and Smart Cities: Bridging Research and Policy." Sebanyak 87 makalah ilmiah dipresentasikan dalam sesi paralel, mencakup topik energi terbarukan, transportasi cerdas, pengelolaan limbah berbasis IoT, dan arsitektur kota masa depan.

Keynote speaker tahun ini adalah Prof. Dr. Ing. Klaus Müller dari Technische Universität München dan Dr. Priya Ramachandran dari National University of Singapore, keduanya pakar terkemuka di bidang smart grid dan urban sustainability.

Dari konferensi ini, Universitas Al-Khairiyah berhasil menjajaki tiga nota kesepahaman (MoU) baru dengan institusi dari Belanda, Jepang, dan Australia untuk kolaborasi riset dan pertukaran mahasiswa pascasarjana. Prosiding konferensi akan dipublikasikan dalam jurnal terindeks Scopus pada September 2026.`,
    },
];

export function News() {
    const [newsCount, setNewsCount] = useState(3);
    const [selectedNews, setSelectedNews] = useState<(NewsItem) | null>(null);

    return (
        <>
            <section id="berita" className="px-4 py-20 sm:py-24">
                <div className="mx-auto max-w-6xl">
                    <Reveal>
                        <div className="mx-auto max-w-2xl text-center">
                            <span className="pill">Berita &amp; Agenda</span>
                            <h2 className="section-title mt-4">
                                Kabar Terbaru dari Kampus
                            </h2>
                        </div>
                    </Reveal>
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {newsData.slice(0, newsCount).map((n, i) => (
                            <Reveal key={n.title} delay={(i % 3) * 80}>
                                <article
                                    className="news-card cursor-pointer"
                                    onClick={() => setSelectedNews(n)}
                                    tabIndex={0}
                                    role="button"
                                    aria-label={`Baca berita: ${n.title}`}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") setSelectedNews(n);
                                    }}
                                >
                                    <div className="overflow-hidden">
                                        <Image
                                            src={n.img}
                                            alt={n.title}
                                            loading="lazy"
                                            width={1024}
                                            height={640}
                                            className="h-48 w-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2">
                                            <span className="pill">{n.category}</span>
                                            <p className="text-xs font-semibold uppercase tracking-widest text-brand dark:text-brand-200">
                                                {n.date}
                                            </p>
                                        </div>
                                        <h3 className="mt-2 font-display text-lg font-bold leading-snug">
                                            {n.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                            {n.desc}
                                        </p>
                                        <span className="btn-ghost mt-5">
                                            Baca Selengkapnya
                                        </span>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                    {newsCount < newsData.length && (
                        <div className="mt-10 text-center">
                            <button
                                onClick={() => setNewsCount(newsData.length)}
                                type="button"
                                className="btn-primary btn-lg"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </section>
            {selectedNews && (
                <NewsDetail news={selectedNews} onClose={() => setSelectedNews(null)} />
            )}
        </>
    )
}