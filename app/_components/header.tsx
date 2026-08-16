"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
    { href: "#home", label: "Home" },
    { href: "#tentang", label: "Tentang" },
    { href: "#visimisi", label: "Visi & Misi" },
    { href: "#fakultas", label: "Fakultas" },
    { href: "#layanan", label: "Layanan" },
    { href: "#berita", label: "Berita" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [isDark, setIsDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [shrink, setShrink] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");

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

    useEffect(() => {
        const onScroll = () => setShrink(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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

    return (
        <header
            id="navbar"
            className={`fixed left-1/2 top-3 z-50 -translate-x-1/2 transition-all duration-500 ${shrink ? "shrink" : ""}`}
        >
            <nav className="island flex items-center justify-center gap-3 rounded-full px-3 py-2 sm:px-4 w-[calc(100vw-1.5rem)] sm:w-[calc(100vw-2rem)] max-w-6xl">
                <a
                    href="#home"
                    className="flex shrink-0 items-center gap-2 pl-1 pr-2"
                >
                    <span className="logo-mark">
                        <Image src={"/unival.webp"} height={500} width={500} alt="unival" />
                    </span>
                    <span className="hidden sm:block leading-tight">
                        <span className="block font-display text-sm font-800 font-bold tracking-tight">
                            Universitas Al-Khairiyah
                        </span>
                        <span className="block text-[10px] font-bold tracking-[0.18em] text-brand-500 dark:text-brand-200">
                            Kampus Peradaban Islam
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
    )
}