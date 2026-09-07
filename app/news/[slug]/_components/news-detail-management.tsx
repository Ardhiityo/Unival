"use client"

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { environment } from "@/app/config/environment";
import { NewsItem } from "@/app/types/general";
import NewsDetail from "./news-detail";

export default function NewsDetailManagement() {
    const { slug } = useParams<{ slug: string }>();
    const [news, setNews] = useState<NewsItem | null>(null);
    const [status, setStatus] = useState<"loading" | "error">("loading");

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const baseUrl = environment.API_URL;
                const response = await fetch(`${baseUrl}/news/${slug}`);
                if (!response.ok) throw new Error("Failed to fetch news");
                const result = await response.json();
                setNews(result.data);
            } catch {
                setStatus("error");
            }
        };
        fetchNews();
    }, [slug]);

    return (
        <>
            {news ? <NewsDetail news={news} /> : (
                <main className="flex min-h-screen items-center justify-center px-4 pt-24">
                    <p className="text-center text-slate-600 dark:text-slate-300">
                        {status === "loading" ? "Memuat berita..." : "Berita tidak ditemukan."}
                    </p>
                </main>
            )}
        </>
    );
}