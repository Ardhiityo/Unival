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
                <div className="mt-12 mx-auto grid items-stretch gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {services.map((service, index) => (
                        <article key={`${service.title}-${index}`} className="service-card flex flex-col justify-between">
                            <Reveal>
                                <div>
                                    <span className="icon">
                                        <GrSystem className="dark:text-brand-200" />
                                    </span>
                                    <h3>{service.title}</h3>
                                    <p>
                                        {service.description}
                                    </p>
                                </div>
                                <a
                                    href={service.url}
                                    target="_blank"
                                    rel="noopener"
                                    className="btn-primary mt-5 mb-3 w-fit"
                                >
                                    Kunjungi
                                </a>
                            </Reveal>
                        </article>
                    ))}
                </div>
                {
                    services.length > 0 && nextUrl && (
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
                    )
                }
            </div>
        </section>
    )
}