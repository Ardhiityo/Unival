import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unival-cilegon.ac.id/"),
  title: "Universitas Al-Khairiyah",
  description:
    `Universitas Al-Khairiyah menghadirkan pendidikan tinggi berbasis riset,
    teknologi, dan nilai keagamaan. Terletak di pusat jantung Kota Cilegon yang strategis, serta ekosistem kampus digital yang saling terintegrasi.`,
  openGraph: {
    title: "Universitas Al-Khairiyah — Excellent, Innovative, Santri's Character",
    description:
      `Universitas Al-Khairiyah menghadirkan pendidikan tinggi berbasis riset,
    teknologi, dan nilai keagamaan. Terletak di pusat jantung Kota Cilegon yang strategis, serta ekosistem kampus digital yang saling terintegrasi.`,
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Universitas Al-Khairiyah",
    images: [
      {
        url: "/unival.webp",
        width: 1200,
        height: 630,
        alt: "Universitas Al-Khairiyah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

const themeInitScript = `
(function() {
  try {
    const stored = localStorage.getItem("nexus-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${sora.variable} scroll-smooth`}
      style={{
        fontFamily:
          "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-slate-50 text-navy dark:bg-navy dark:text-slate-100 antialiased overflow-x-hidden theme-transition">
        {children}
      </body>
    </html>
  );
}
