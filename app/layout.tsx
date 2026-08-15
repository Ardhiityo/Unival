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
  title: "Universitas Nexus — Kampus Modern, Riset, dan Inovasi",
  description:
    "Universitas Nexus adalah kampus modern dengan 42 program studi, riset unggulan, dan layanan digital terpadu untuk mahasiswa dan calon mahasiswa.",
  openGraph: {
    title: "Universitas Nexus — Kampus Modern, Riset, dan Inovasi",
    description:
      "Kampus modern dengan 42 program studi, riset unggulan, dan layanan digital terpadu.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
