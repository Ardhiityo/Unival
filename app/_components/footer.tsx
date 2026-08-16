"use client"

import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="px-4 pb-10 pt-10">
            <div className="mx-auto max-w-6xl glass rounded-4xl p-8 sm:p-10">
                <div className="grid gap-10 md:grid-cols-4">
                    <div className="md:col-span-1">
                        <div className="flex flex-col items-center gap-2">
                            <span className="logo-mark">
                                <Image src={"/unival.webp"} width={500} height={500} alt="unival" />
                            </span>
                            <span className="font-display text-base font-bold">
                                Universitas Al-Khairiyah
                            </span>
                        </div>
                        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 text-center">
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
                        © {currentYear}. Seluruh hak cipta dilindungi.
                    </p>
                    <a href="#" className="link">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    )
}