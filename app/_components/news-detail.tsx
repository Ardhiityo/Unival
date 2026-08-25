"use client"

import { NewsItem } from "../types/general";
import Image from "next/image";
import DOMPurify from "dompurify";
import Link from "next/link";

export default function NewsDetail({ news }: { news: NewsItem }) {
    return (
        <main className="news-detail-page">
            <div className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:pt-40">
                <Link href="/#berita" className="btn-ghost mb-8 inline-flex">← Kembali ke Berita</Link>
                <article className="news-detail-page-panel overflow-hidden">
                    <div className="news-detail-img-wrap">
                        <Image
                            src={news.image_url ?? '/unival.webp'}
                            alt={news.title}
                            width={1200}
                            height={600}
                            unoptimized
                            className="news-detail-img"
                        />
                    </div>
                    <div className="news-detail-body news-detail-page-body">
                        <p className="text-xs font-bold uppercase tracking-widest text-brand-400 dark:text-brand-200">
                            {news.date}
                        </p>
                        <h1 className="section-title mt-3">{news.title}</h1>
                        <article className="mt-5 font-semibold article-responsive text-slate-700 dark:text-slate-300 leading-relaxed"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(news.description),
                            }}>
                        </article>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link href="/#berita" className="btn-primary">
                                Berita Lainnya
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}
