"use client"

import { FaFacebook, FaInstagram } from "react-icons/fa6"
import Reveal from "./reveal"
import { FaYoutube } from "react-icons/fa"
import { BsTelephone } from "react-icons/bs"
import { IoLocationOutline, IoMailOutline } from "react-icons/io5"

export default function Contact() {
    return (
        <main className="px-4 py-20 sm:py-24">
            <section id="kontak" className="mx-auto max-w-6xl">
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
                                <li className="flex flex-col gap-3 md:flex-row">
                                    <div className="icon">
                                        <BsTelephone className="dark:text-brand-200" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Telepon</p>
                                        <a href="tel:+02547877057" className="link">
                                            (0254) 7877057
                                        </a>
                                    </div>
                                </li>
                                <li className="flex flex-col gap-3 md:flex-row">
                                    <div className="icon">
                                        <IoMailOutline className="dark:text-brand-200" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <a href="mailto:alkhairiyah.university@gmail.com" className="link">
                                            alkhairiyah.university@gmail.com
                                        </a>
                                    </div>
                                </li>
                                <li className="flex flex-col gap-3 md:flex-row">
                                    <div className="icon">
                                        <IoLocationOutline className="dark:text-brand-200" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Alamat</p>
                                        <p className="text-slate-600 text-wrap dark:text-slate-300">
                                            Jl. Kh.Enggus Arja No.1, Kec. Citangkil, Kota Cilegon
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
                                        href="https://www.instagram.com/humas_unival"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <FaInstagram />
                                        Instagram
                                    </a>
                                    <a
                                        className="social flex items-center gap-1"
                                        href="https://www.facebook.com/share/1CGXwtSxKG/"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <FaFacebook />
                                        Facebook
                                    </a>
                                    <a
                                        className="social flex items-center gap-1"
                                        href="https://www.youtube.com/@al-khairiyahtv432"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <FaYoutube />
                                        YouTube
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.8390762881586!2d106.03968747476215!3d-6.016819993968526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418e153492ffff%3A0xaabad81c1107ac4a!2sUNIVERSITAS%20AL-KHAIRIYAH!5e0!3m2!1sid!2sid!4v1787132893189!5m2!1sid!2sid"
                            ></iframe>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    )
}