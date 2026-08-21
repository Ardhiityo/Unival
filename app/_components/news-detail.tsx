"use client"

import { useEffect } from "react";
import { NewsItem } from "../types/general";
import Image from "next/image";
import DOMPurify from "dompurify";

export default function NewsDetail({
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
                        src={news.image_url}
                        alt={news.title}
                        width={1200}
                        height={600}
                        unoptimized
                        className="news-detail-img"
                    />
                    <div className="news-detail-img-overlay" />
                </div>

                {/* Content */}
                <div className="news-detail-body">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-400 dark:text-brand-200">
                        {news.date}
                    </p>
                    <h2 className="section-title mt-3">{news.title}</h2>
                    <article className="mt-5 font-semibold article-responsive text-slate-700 dark:text-slate-300 leading-relaxed"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(news.description),
                        }}>
                    </article>
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