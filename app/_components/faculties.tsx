"use client"

import Image from "next/image";
import Reveal from "./reveal"
import { useEffect, useState } from "react";
import { FacultyItem } from "../types/general";
import { environment } from "../config/environment";

export function Faculties() {
    const baseUrl = environment.API_URL;
    const [faculties, setFaculties] = useState<FacultyItem[]>([]);
    const [nextUrl, setNextUrl] = useState<string | null>(`${baseUrl}/faculties`);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        async function load() {
            const response = await fetch(`${baseUrl}/faculties`);
            const result = await response.json();
            setFaculties(result.data);
            setNextUrl(result.links.next);
        }
        load();
    }, [baseUrl])

    async function loadMore() {
        if (!nextUrl) return;
        setIsPending(true);
        const response = await fetch(nextUrl);
        const result = await response.json();
        setFaculties(prev => [...prev, ...result.data]);
        setNextUrl(result.links.next);
        setIsPending(false);
    }

    return (
        <section id="fakultas" className="px-4 py-20 sm:py-24">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="pill">Akademik</span>
                        <h2 className="section-title mt-4">
                            Beragam Pilihan Fakultas
                        </h2>
                        <p className="mt-3 text-slate-600 dark:text-slate-300">
                            Pilih bidang yang paling sesuai dengan tujuan karier Anda.
                        </p>
                    </div>
                </Reveal>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {faculties?.map((faculty, index) => (
                        <Reveal key={`${faculty.title}-${index}`} delay={(index % 3) * 90}>
                            <article className="faculty-card">
                                <div className="overflow-hidden">
                                    <Image
                                        src={faculty.image_url}
                                        alt={faculty.title}
                                        loading="lazy"
                                        width={1024}
                                        height={640}
                                        unoptimized
                                        className="h-44 w-full object-cover"
                                    />
                                </div>
                                <div className="relative p-6">
                                    <h3 className="font-display text-lg font-bold">
                                        {faculty.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                        {faculty.description}
                                    </p>
                                    <a href={faculty.detail_url} target="_blank" className="btn-ghost mt-5">
                                        Lihat Selengkapnya
                                    </a>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
                {faculties.length > 0 && nextUrl && (
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
    )
}