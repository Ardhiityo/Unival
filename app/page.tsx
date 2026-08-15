"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

const newsData = [
  {
    img: "/assets/images/news-1.jpg",
    title: "Wisuda Periode I Meluluskan 1.240 Sarjana",
    date: "12 Agustus 2026",
    category: "Akademik",
    desc: "Universitas Nexus menggelar prosesi wisuda dengan tingkat serapan kerja alumni mencapai 87% dalam enam bulan.",
    content: `Universitas Nexus kembali menorehkan pencapaian membanggakan dengan menggelar Prosesi Wisuda Periode I Tahun Akademik 2025/2026. Sebanyak 1.240 wisudawan dari tujuh fakultas resmi dinyatakan lulus dan siap memasuki dunia profesional.

Rektor Universitas Nexus, Prof. Dr. Arief Wibowo, M.Pd., dalam sambutannya menegaskan bahwa angka serapan kerja alumni mencapai 87% dalam enam bulan pertama pasca kelulusan—melampaui rata-rata nasional perguruan tinggi sejenis. "Ini bukan sekadar angka. Ini bukti bahwa kurikulum berbasis kompetensi dan kemitraan industri kita benar-benar bekerja," ujarnya.

Prosesi berlangsung khidmat di Graha Utama Kampus Pusat, dihadiri oleh orang tua wisudawan, sivitas akademika, serta para mitra industri strategis. Wisudawan terbaik tahun ini diraih oleh Salsabila Putri Andini dari Fakultas Ilmu Komputer dengan IPK 3,98 dan predikat Summa Cum Laude.

Universitas Nexus juga mengumumkan program beasiswa purna wisuda bagi lulusan terbaik yang melanjutkan studi ke jenjang magister, sebagai bentuk komitmen berkelanjutan terhadap pengembangan sumber daya manusia Indonesia.`,
  },
  {
    img: "/assets/images/news-2.jpg",
    title: "Riset Biomedis Nexus Raih Pendanaan Nasional",
    date: "05 Agustus 2026",
    category: "Riset",
    desc: "Tim peneliti fakultas kedokteran memperoleh hibah riset untuk pengembangan alat diagnostik cepat.",
    content: `Tim peneliti dari Fakultas Kedokteran Universitas Nexus berhasil meraih hibah riset nasional senilai Rp 4,2 miliar dari Kementerian Riset dan Teknologi. Dana tersebut akan digunakan untuk mengembangkan prototipe alat diagnostik cepat berbasis biosensor yang mampu mendeteksi infeksi bakteri resistan antibiotik hanya dalam 15 menit.

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
    content: `Perpustakaan Pusat Universitas Nexus resmi membuka layanan 24 jam mulai Agustus 2026. Renovasi besar-besaran selama delapan bulan mengubah wajah perpustakaan menjadi pusat belajar modern yang dilengkapi berbagai fasilitas kelas dunia.

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
    content: `Universitas Nexus meluncurkan Program Magang Bersertifikat (PMB) generasi terbaru yang menggandeng 40 perusahaan dan lembaga mitra dari berbagai sektor industri. Program ini membuka 850 posisi magang untuk mahasiswa semester 5 ke atas yang ingin mendapatkan pengalaman kerja nyata sambil tetap memenuhi beban studi.

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
    content: `Universitas Nexus sukses menjadi tuan rumah International Conference on Sustainable Technology (ICST) 2026, forum akademik bergengsi yang tahun ini diikuti oleh lebih dari 200 akademisi, peneliti, dan praktisi dari 12 negara di Asia, Eropa, dan Amerika.

Konferensi berlangsung selama tiga hari di Gedung Pascasarjana Nexus, mengangkat tema besar "Energy Transition and Smart Cities: Bridging Research and Policy." Sebanyak 87 makalah ilmiah dipresentasikan dalam sesi paralel, mencakup topik energi terbarukan, transportasi cerdas, pengelolaan limbah berbasis IoT, dan arsitektur kota masa depan.

Keynote speaker tahun ini adalah Prof. Dr. Ing. Klaus Müller dari Technische Universität München dan Dr. Priya Ramachandran dari National University of Singapore, keduanya pakar terkemuka di bidang smart grid dan urban sustainability.

Dari konferensi ini, Universitas Nexus berhasil menjajaki tiga nota kesepahaman (MoU) baru dengan institusi dari Belanda, Jepang, dan Australia untuk kolaborasi riset dan pertukaran mahasiswa pascasarjana. Prosiding konferensi akan dipublikasikan dalam jurnal terindeks Scopus pada September 2026.`,
  },
];

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#tentang", label: "Tentang" },
  { href: "#visimisi", label: "Visi & Misi" },
  { href: "#fakultas", label: "Fakultas" },
  { href: "#layanan", label: "Layanan" },
  { href: "#berita", label: "Berita" },
  { href: "#contact", label: "Contact" },
];

function useCounter(target: number, start: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const duration = 1800;
    const startTime = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, start]);

  return value;
}

function Counter({
  target,
  suffix = "",
  start,
}: {
  target: number;
  suffix?: string;
  start: boolean;
}) {
  const value = useCounter(target, start);
  return (
    <span className="font-display text-4xl font-extrabold text-brand dark:text-brand-200 sm:text-5xl">
      {value.toLocaleString("id-ID")}
      {suffix}
    </span>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

type NewsItem = (typeof newsData)[number];

function NewsDetail({
  news,
  onClose,
}: {
  news: NewsItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="news-detail-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={news.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="news-detail-panel">
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Tutup"
          className="news-detail-close icon-btn"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Hero image */}
        <div className="news-detail-img-wrap">
          <Image
            src={news.img}
            alt={news.title}
            width={1200}
            height={600}
            className="news-detail-img"
          />
          <div className="news-detail-img-overlay" />
          <div className="news-detail-img-meta">
            <span className="pill">{news.category}</span>
          </div>
        </div>

        {/* Content */}
        <div className="news-detail-body">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-400 dark:text-brand-200">
            {news.date}
          </p>
          <h2 className="section-title mt-3">{news.title}</h2>
          <p className="mt-3 font-semibold text-slate-600 dark:text-slate-300 leading-relaxed">
            {news.desc}
          </p>
          <div className="news-detail-divider" />
          {news.content.split("\n\n").map((para, i) => (
            <p key={i} className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              {para}
            </p>
          ))}

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onClose} className="btn-ghost">
              ← Kembali ke Berita
            </button>
            <a href="#berita" onClick={onClose} className="btn-primary">
              Berita Lainnya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatSection({ countersStart }: { countersStart: boolean }) {
  return (
    <section id="statistik" className="px-4 py-6">
      <div className="mx-auto max-w-6xl glass rounded-[2rem] p-6 sm:p-10">
        <Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="stat-card">
              <Counter target={42} start={countersStart} />
              <p className="mt-2 font-semibold">Program Studi</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Diploma, Sarjana, hingga Doktoral
              </p>
            </div>
            <div className="stat-card">
              <Counter target={24500} suffix="+" start={countersStart} />
              <p className="mt-2 font-semibold">Mahasiswa Aktif</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Dari 34 provinsi &amp; 18 negara
              </p>
            </div>
            <div className="stat-card">
              <Counter target={960} suffix="+" start={countersStart} />
              <p className="mt-2 font-semibold">Dosen &amp; Peneliti</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                72% bergelar Doktor &amp; Profesor
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [newsCount, setNewsCount] = useState(3);
  const [countersStart, setCountersStart] = useState(false);
  const [selectedNews, setSelectedNews] = useState<(typeof newsData)[number] | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => {
      const dark = document.documentElement.classList.contains("dark");
      setIsDark(dark);
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.35 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

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

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    localStorage.setItem(
      "nexus-theme",
      html.classList.contains("dark") ? "dark" : "light",
    );
    setIsDark(html.classList.contains("dark"));
  };

  const closeMenu = () => setMenuOpen(false);

  const currentYear = new Date().getFullYear();

  return (
    <>
      {selectedNews && (
        <NewsDetail news={selectedNews} onClose={() => setSelectedNews(null)} />
      )}
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb orb-1"></span>
        <span className="orb orb-2"></span>
        <span className="orb orb-3"></span>
        <span className="grid-overlay"></span>
      </div>

      <header
        id="navbar"
        className={`fixed left-1/2 top-3 z-50 -translate-x-1/2 transition-all duration-500 ${shrink ? "shrink" : ""}`}
      >
        <nav className="island flex items-center gap-3 rounded-full px-3 py-2 sm:px-4 w-[calc(100vw-1.5rem)] sm:w-[calc(100vw-2rem)] max-w-6xl">
          <a
            href="#home"
            className="flex shrink-0 items-center gap-2 pl-1 pr-2"
          >
            <span className="logo-mark">N</span>
            <span className="hidden sm:block leading-tight">
              <span className="block font-display text-sm font-800 font-bold tracking-tight">
                Universitas Nexus
              </span>
              <span className="block text-[10px] tracking-[0.18em] text-brand-500 dark:text-brand-200">
                DISCOVER · INNOVATE
              </span>
            </span>
          </a>

          <ul className="mx-auto hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className={`nav-link text-nowrap ${activeSection === item.href ? "active" : ""}`}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <button
              onClick={toggleTheme}
              type="button"
              aria-label="Ganti tema"
              className="icon-btn"
            >
              <svg
                className="sun h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
              </svg>
              <svg
                className="moon h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            </button>
            <a href="#pmb" className="btn-primary hidden sm:inline-flex text-nowrap">
              Daftar
            </a>
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                type="button"
                aria-label="Buka menu"
                aria-expanded={menuOpen}
                className={`icon-btn ${menuOpen ? "is-open" : ""}`}
              >
                <span className="burger">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
              </button>
            </div>
          </div>
        </nav>

        <div
          className={`mobile-menu mt-3 lg:hidden ${menuOpen ? "open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <div className="glass rounded-3xl p-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="m-link"
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#pmb"
              className="btn-primary mt-2 w-full justify-center"
              onClick={closeMenu}
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative px-4 pt-32 pb-20 sm:pt-40 lg:pb-28"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="pill">Akreditasi Unggul · Est. 1978</span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Membentuk Generasi{" "}
                <span className="text-gradient">
                  Unggul &amp; Berdaya Saing Global
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                Universitas Nexus menghadirkan pendidikan tinggi berbasis riset,
                teknologi, dan nilai kemanusiaan. 42 program studi, laboratorium
                modern, serta ekosistem kampus digital yang terintegrasi.
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
                  <dd className="font-display text-lg font-bold">Unggul (A)</dd>
                </div>
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Mitra Industri
                  </dt>
                  <dd className="font-display text-lg font-bold">120+</dd>
                </div>
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">Alumni</dt>
                  <dd className="font-display text-lg font-bold">64.000+</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <div className="tilt-card glass rounded-[2rem] p-3">
                  <img
                    src="/assets/images/hero-3d.jpg"
                    alt="Visual 3D gedung Universitas Nexus"
                    width={1280}
                    height={1024}
                    className="h-full w-full rounded-[1.5rem] object-cover"
                  />
                </div>
                <div className="floater glass absolute -left-3 top-10 hidden rounded-2xl px-4 py-3 sm:block">
                  <p className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Riset Aktif
                  </p>
                  <p className="font-display text-xl font-bold">318 Proyek</p>
                </div>
                <div className="floater floater-slow glass absolute -right-2 bottom-8 hidden rounded-2xl px-4 py-3 sm:block">
                  <p className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Kampus Digital
                  </p>
                  <p className="font-display text-xl font-bold">SIAKAD 24/7</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div ref={statsRef}>
          <StatSection countersStart={countersStart} />
        </div>

        <section id="tentang" className="px-4 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="tilt-card glass rounded-[2rem] p-3">
                <Image
                  src="/assets/images/about-campus.jpg"
                  alt="Suasana kampus Universitas Nexus"
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="w-full rounded-[1.5rem] object-cover"
                />
              </div>
              <div className="mt-4 glass overflow-hidden rounded-[2rem] p-3">
                <video
                  className="w-full rounded-[1.5rem]"
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
                Universitas Nexus adalah perguruan tinggi yang berfokus pada
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
                <div className="glass rounded-[2rem] p-8 h-full">
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

        <section id="contact" className="px-4 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="pill">Hubungi Kami</span>
                <h2 className="section-title mt-4">Kami Siap Membantu Anda</h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="glass rounded-[2rem] p-8">
                  <ul className="space-y-6">
                    <li className="contact-row">
                      <span className="svc-icon svc-icon-sm">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        >
                          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold">Telepon</p>
                        <a href="tel:+622150998877" className="link">
                          +62 21 5099 8877
                        </a>
                      </div>
                    </li>
                    <li className="contact-row">
                      <span className="svc-icon svc-icon-sm">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        >
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m2 7 10 6 10-6" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:info@nexus.ac.id" className="link">
                          info@nexus.ac.id
                        </a>
                      </div>
                    </li>
                    <li className="contact-row">
                      <span className="svc-icon svc-icon-sm">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold">Alamat</p>
                        <p className="text-slate-600 dark:text-slate-300">
                          Jl. Cendekia Raya No. 88, Kota Nusantara, Indonesia
                          16820
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      Ikuti Kami
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        className="social"
                        href="https://instagram.com/universitasnexus"
                        target="_blank"
                        rel="noopener"
                      >
                        Instagram
                      </a>
                      <a
                        className="social"
                        href="https://facebook.com/universitasnexus"
                        target="_blank"
                        rel="noopener"
                      >
                        Facebook
                      </a>
                      <a
                        className="social"
                        href="https://youtube.com/@universitasnexus"
                        target="_blank"
                        rel="noopener"
                      >
                        YouTube
                      </a>
                      <a
                        className="social"
                        href="https://tiktok.com/@universitasnexus"
                        target="_blank"
                        rel="noopener"
                      >
                        TikTok
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="glass overflow-hidden rounded-[2rem] p-3">
                  <iframe
                    title="Peta lokasi Universitas Nexus"
                    className="h-[420px] w-full rounded-[1.5rem] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=106.75%2C-6.32%2C106.90%2C-6.20&amp;layer=mapnik"
                  ></iframe>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 pb-10 pt-10">
        <div className="mx-auto max-w-6xl glass rounded-[2rem] p-8 sm:p-10">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2">
                <span className="logo-mark">N</span>
                <span className="font-display text-base font-bold">
                  Universitas Nexus
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                Kampus riset modern yang berkomitmen mencetak lulusan unggul,
                berintegritas, dan siap berkontribusi secara global.
              </p>
            </div>
            <div>
              <h4 className="footer-title">Navigasi</h4>
              <ul className="footer-list">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#tentang">Tentang</a>
                </li>
                <li>
                  <a href="#visimisi">Visi &amp; Misi</a>
                </li>
                <li>
                  <a href="#fakultas">Fakultas</a>
                </li>
                <li>
                  <a href="#berita">Berita</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Kontak</h4>
              <ul className="footer-list">
                <li>
                  <a href="tel:+622150998877">+62 21 5099 8877</a>
                </li>
                <li>
                  <a href="mailto:info@nexus.ac.id">info@nexus.ac.id</a>
                </li>
                <li>
                  <span>Jl. Cendekia Raya No. 88, Kota Nusantara</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Sosial Media</h4>
              <ul className="footer-list">
                <li>
                  <a
                    href="https://instagram.com/universitasnexus"
                    target="_blank"
                    rel="noopener"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/universitasnexus"
                    target="_blank"
                    rel="noopener"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@universitasnexus"
                    target="_blank"
                    rel="noopener"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com/@universitasnexus"
                    target="_blank"
                    rel="noopener"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-6 text-sm text-slate-500 dark:text-slate-400 sm:flex-row">
            <p>
              © {currentYear} Universitas Nexus. Seluruh hak cipta dilindungi.
            </p>
            <a href="#" className="link">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
