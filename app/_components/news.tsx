"use client"

import { useEffect, useState } from "react";
import Reveal from "./reveal";
import { NewsItem } from "../types/general";
import NewsDetail from "./news-detail";
import Image from "next/image";
import { environment } from "../config/environment";
import DOMPurify from "dompurify";

export function News() {
    const [selectedNews, setSelectedNews] = useState<(NewsItem) | null>(null);
    const [isPending, setIsPending] = useState(false);

    const baseUrl = environment.API_URL;
    const [news, setNews] = useState<NewsItem[]>([]);
    const [nextUrl, setNextUrl] = useState<string | null>(
        `${baseUrl}/news`
    );

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch(`${baseUrl}/news`);
            const result = await response.json();
            setNews(result.data);
            setNextUrl(result.links.next);
        };

        fetchNews();
    }, [baseUrl, setNews, setNextUrl]);

    const loadMore = async () => {
        if (!nextUrl) return;
        setIsPending(true);
        const response = await fetch(nextUrl);
        const result = await response.json();

        setNews((prev) => [...prev, ...result.data]);
        setNextUrl(result.links.next);
        setIsPending(false);
    };

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
                        {news.slice(0, news.length).map((news: NewsItem, i: number) => (
                            <Reveal key={news.title} delay={(i % 3) * 80}>
                                <article
                                    className="news-card cursor-pointer"
                                    onClick={() => setSelectedNews(news)}
                                    tabIndex={0}
                                    role="button"
                                    aria-label={`Baca berita: ${news.title}`}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") setSelectedNews(news);
                                    }}
                                >
                                    <div className="overflow-hidden">
                                        <Image
                                            src={news.image_url}
                                            alt={news.title}
                                            loading="lazy"
                                            width={1024}
                                            height={640}
                                            unoptimized
                                            className="h-48 w-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-widest text-brand dark:text-brand-200 ">
                                                {news.date}
                                            </p>
                                        </div>
                                        <h3 className="mt-2 font-display text-lg font-bold leading-snug">
                                            {news.title}
                                        </h3>
                                        <p
                                            className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300" dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(news.description),
                                            }}>
                                        </p>
                                        <span className="btn-ghost mt-5">
                                            Baca Selengkapnya
                                        </span>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                    {news.length > 0 && nextUrl && (
                        <div className="mt-10 text-center">
                            <button
                                disabled={!nextUrl || isPending}
                                onClick={() => loadMore()}
                                type="button"
                                className="btn-primary btn-lg disabled:opacity-35"
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