"use client"

import { FaFacebook, FaInstagram } from "react-icons/fa6"
import Reveal from "./reveal"
import { FaTiktok, FaYoutube } from "react-icons/fa"

export default function Contact() {
    return (
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
                        <div className="glass rounded-4xl p-8">
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
                                        className="social flex gap-1 items-center"
                                        href="https://instagram.com/universitasnexus"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <FaInstagram />
                                        Instagram
                                    </a>
                                    <a
                                        className="social flex items-center gap-1"
                                        href="https://facebook.com/universitasnexus"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <FaFacebook />
                                        Facebook
                                    </a>
                                    <a
                                        className="social flex items-center gap-1"
                                        href="https://youtube.com/@universitasnexus"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <FaYoutube />
                                        YouTube
                                    </a>
                                    <a
                                        className="social flex items-center gap-1"
                                        href="https://tiktok.com/@universitasnexus"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <FaTiktok />
                                        TikTok
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={120}>
                        <div className="glass overflow-hidden rounded-4xl p-3">
                            <iframe
                                title="Peta lokasi Universitas Al-Khairiyah"
                                className="h-105 w-full rounded-3xl border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=106.75%2C-6.32%2C106.90%2C-6.20&amp;layer=mapnik"
                            ></iframe>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}