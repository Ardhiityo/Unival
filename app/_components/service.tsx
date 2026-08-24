"use client"

import { useEffect, useState } from "react"
import Reveal from "./reveal"
import { ServiceItem } from "../types/general"
import { environment } from "../config/environment"
import { GrSystem } from "react-icons/gr"

export function Service() {
    const baseUrl = environment.API_URL;
    const [services, setServices] = useState<ServiceItem[]>([]);
    const [nextUrl, setNextUrl] = useState<string | null>(null)
    const [isPending, setIsPending] = useState(false)

    useEffect(() => {
        async function fetchServices() {
            const response = await fetch(`${baseUrl}/services`);
            if (response.ok) {
                const result = await response.json();
                setServices(result.data);
                setNextUrl(result.links.next);
            }
        }
        fetchServices();
    }, [baseUrl])

    const loadMore = async () => {
        if (!nextUrl) return;
        setIsPending(true);
        const response = await fetch(nextUrl);
        if (response.ok) {
            const result = await response.json();
            setServices((prev) => [...prev, ...result.data]);
            setNextUrl(result.links.next);
            setIsPending(false);
        }
    };

    return (
        <section id="layanan" className="px-4 py-20 sm:py-24">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="pill">Layanan Digital</span>
                        <h2 className="section-title mt-4">
                            Semua Kebutuhan Akademik dalam Satu Portal
                        </h2>
                    </div>
                </Reveal>
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {services.map((service, index) => (
                        <Reveal key={`${service.title}-${index}`}>
                            <article className="service-card">
                                <span className="icon">
                                    <GrSystem className="dark:text-brand-200" />
                                </span>
                                <h3>{service.title}</h3>
                                <p>
                                    {service.description}
                                </p>
                                <a
                                    href={service.url}
                                    target="_blank"
                                    rel="noopener"
                                    className="btn-primary mt-5"
                                >
                                    Kunjungi
                                </a>
                            </article>
                        </Reveal>
                    ))}
                </div>
                {services.length > 0 && nextUrl && (
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