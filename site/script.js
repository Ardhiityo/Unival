/* ============ Theme (dark / light) ============ */
(function () {
  const stored = localStorage.getItem("nexus-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (stored === "dark" || (!stored && prefersDark)) document.documentElement.classList.add("dark");
})();

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;

  document.getElementById("themeToggle")?.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem("nexus-theme", html.classList.contains("dark") ? "dark" : "light");
  });

  /* ============ Navbar scroll + active link ============ */
  const navbar = document.getElementById("navbar");
  const onScroll = () => navbar.classList.toggle("shrink", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ============ Hamburger ============ */
  const burger = document.getElementById("hamburger");
  const menu = document.getElementById("mobileMenu");
  const closeMenu = () => {
    burger.classList.remove("is-open");
    menu.classList.remove("open");
    menu.setAttribute("aria-hidden", "true");
    burger.setAttribute("aria-expanded", "false");
  };
  burger?.addEventListener("click", () => {
    const open = !menu.classList.contains("open");
    burger.classList.toggle("is-open", open);
    menu.classList.toggle("open", open);
    menu.setAttribute("aria-hidden", String(!open));
    burger.setAttribute("aria-expanded", String(open));
  });
  menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  /* ============ Faculty data ============ */
  const faculties = [
    { name: "Fakultas Teknik", img: "assets/images/hero-3d.jpg", desc: "Teknik Informatika, Sipil, Elektro, Industri, dan Mesin dengan laboratorium berstandar industri." },
    { name: "Fakultas Kedokteran", img: "assets/images/news-2.jpg", desc: "Pendidikan dokter dan ilmu kesehatan dengan rumah sakit pendidikan terintegrasi." },
    { name: "Fakultas Ekonomi & Bisnis", img: "assets/images/news-4.jpg", desc: "Manajemen, Akuntansi, dan Bisnis Digital yang terhubung dengan ekosistem startup." },
    { name: "Fakultas Hukum", img: "assets/images/news-6.jpg", desc: "Kajian hukum bisnis, tata negara, dan internasional dengan klinik hukum aktif." },
    { name: "Fakultas Ilmu Komputer", img: "assets/images/news-3.jpg", desc: "Data Science, Kecerdasan Artifisial, dan Keamanan Siber berbasis proyek nyata." },
    { name: "Fakultas Ilmu Sosial & Politik", img: "assets/images/news-5.jpg", desc: "Komunikasi, Hubungan Internasional, dan Administrasi Publik yang responsif zaman." },
    { name: "Fakultas Keguruan & Pendidikan", img: "assets/images/news-1.jpg", desc: "Mencetak pendidik profesional dengan kurikulum berbasis praktik lapangan." },
  ];

  const facultyGrid = document.getElementById("facultyGrid");
  facultyGrid.innerHTML = faculties
    .map(
      (f, i) => `
      <article class="faculty-card reveal" data-delay="${(i % 3) * 90}">
        <div class="overflow-hidden">
          <img src="${f.img}" alt="${f.name}" loading="lazy" width="1024" height="640" class="h-44 w-full object-cover" />
        </div>
        <div class="relative p-6">
          <h3 class="font-display text-lg font-bold">${f.name}</h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">${f.desc}</p>
          <a href="#layanan" class="btn-ghost mt-5">Lihat Selengkapnya</a>
        </div>
      </article>`
    )
    .join("");

  /* ============ News data + Load More ============ */
  const news = [
    { img: "assets/images/news-1.jpg", title: "Wisuda Periode I Meluluskan 1.240 Sarjana", date: "12 Agustus 2026", desc: "Universitas Nexus menggelar prosesi wisuda dengan tingkat serapan kerja alumni mencapai 87% dalam enam bulan." },
    { img: "assets/images/news-2.jpg", title: "Riset Biomedis Nexus Raih Pendanaan Nasional", date: "05 Agustus 2026", desc: "Tim peneliti fakultas kedokteran memperoleh hibah riset untuk pengembangan alat diagnostik cepat." },
    { img: "assets/images/news-3.jpg", title: "Perpustakaan Pusat Hadirkan Ruang Belajar 24 Jam", date: "28 Juli 2026", desc: "Fasilitas baru mendukung mahasiswa dengan ruang diskusi, akses jurnal internasional, dan zona tenang." },
    { img: "assets/images/news-4.jpg", title: "Program Magang Bersertifikat Bersama 40 Mitra", date: "19 Juli 2026", desc: "Mahasiswa semester lanjut dapat mengikuti magang berdurasi satu semester dengan konversi SKS penuh." },
    { img: "assets/images/news-5.jpg", title: "Nexus Sport Festival Diikuti 3.000 Peserta", date: "07 Juli 2026", desc: "Ajang tahunan mempertemukan unit kegiatan mahasiswa dari seluruh fakultas dalam sepuluh cabang olahraga." },
    { img: "assets/images/news-6.jpg", title: "Konferensi Internasional Teknologi Berkelanjutan", date: "24 Juni 2026", desc: "Lebih dari 200 akademisi dari 12 negara membahas transisi energi dan kota cerdas di kampus Nexus." },
  ];

  const grid = document.getElementById("newsGrid");
  const loadMoreBtn = document.getElementById("loadMore");
  const PAGE = 3;
  let shown = 0;

  function renderNews(count) {
    const slice = news.slice(shown, shown + count);
    slice.forEach((n) => {
      const el = document.createElement("article");
      el.className = "news-card news-enter";
      el.innerHTML = `
        <div class="overflow-hidden">
          <img src="${n.img}" alt="${n.title}" loading="lazy" width="1024" height="640" class="h-48 w-full object-cover" />
        </div>
        <div class="p-6">
          <p class="text-xs font-semibold uppercase tracking-widest text-brand dark:text-brand-200">${n.date}</p>
          <h3 class="mt-2 font-display text-lg font-bold leading-snug">${n.title}</h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">${n.desc}</p>
          <a href="#berita" class="btn-ghost mt-5">Baca Selengkapnya</a>
        </div>`;
      grid.appendChild(el);
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("in")));
    });
    shown += slice.length;
    if (shown >= news.length) loadMoreBtn.style.display = "none";
  }
  renderNews(PAGE);
  loadMoreBtn?.addEventListener("click", () => renderNews(PAGE));

  /* ============ Scroll reveal ============ */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.dataset.delay || 0);
        setTimeout(() => entry.target.classList.add("visible"), delay);
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ============ Count-up statistics ============ */
  const counters = document.querySelectorAll(".counter");
  const format = (n) => n.toLocaleString("id-ID");
  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.target);
        const duration = 1800;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = format(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        countObserver.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((el) => countObserver.observe(el));

  /* ============ Active nav link on scroll ============ */
  const sections = [...document.querySelectorAll("section[id]")];
  const navLinks = [...document.querySelectorAll("#navLinks .nav-link")];
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
      });
    },
    { threshold: 0.35 }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  document.getElementById("year").textContent = new Date().getFullYear();
});
