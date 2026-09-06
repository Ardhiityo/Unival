"use client"

import { useEffect, useState } from "react";
import { NewsItem } from "../types/general";
import Image from "next/image";
import Link from "next/link";
import { environment } from "../config/environment";
import DOMPurify from "dompurify";
import Reveal from "@/app/_components/reveal";

export function News() {
    const [isPending, setIsPending] = useState(false);

    const baseUrl = environment.API_URL;
    const [news, setNews] = useState<NewsItem[]>([]);
    const [nextUrl, setNextUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch(`${baseUrl}/news`);
            if (response.ok) {
                const result = await response.json();
                setNews(result.data);
                setNextUrl(result.links.next);
            }
        };

        fetchNews();
    }, [baseUrl, setNews, setNextUrl]);

    const loadMore = async () => {
        if (!nextUrl) return;
        setIsPending(true);
        const response = await fetch(nextUrl);
        const result = await response.json();
        if (response.ok) {
            setNews((prev) => [...prev, ...result.data]);
            setNextUrl(result.links.next);
            setIsPending(false);
        }
    };

    return (
        <>
            <main className="px-4 py-20 sm:py-24">
                <div className="mx-auto max-w-6xl">
                    <Reveal>
                        <section id="berita" className="mx-auto max-w-2xl text-center">
                            <span className="pill">Berita &amp; Agenda</span>
                            <h2 className="section-title mt-4">
                                Kabar Terbaru dari Kampus
                            </h2>
                        </section>
                    </Reveal>
                    <div className="mt-12 place-items-center grid items-stretch gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        {news.slice(0, news.length).map((news: NewsItem, i: number) => (
                            <Reveal key={`${news.title}-${i}`} delay={(i % 3) * 80}>
                                <article
                                    className="news-card flex gap-4 flex-col cursor-pointer w-87.5 h-full"
                                >
                                    <div className="overflow-hidden">
                                        <Image
                                            src={news.image_url ?? '/unival.webp'}
                                            alt={news.title}
                                            loading="lazy"
                                            width={1024}
                                            height={640}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="h-48 w-full object-cover"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <p className="text-xs font-semibold uppercase tracking-widest text-brand dark:text-brand-200 ">
                                            {news.date}
                                        </p>
                                        <h3 className="mt-2 font-display text-lg font-bold leading-snug line-clamp-2">
                                            {news.title}
                                        </h3>
                                        <article
                                            className="mt-2 text-sm line-clamp-3 text-slate-600 article-responsive dark:text-slate-300" dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(news.description),
                                            }}>
                                        </article>
                                        <Link href={`/news/${news.slug}`} className="btn-primary mt-5 mb-3">
                                            Baca Selengkapnya
                                        </Link>
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
            </main>
        </>
    )
}