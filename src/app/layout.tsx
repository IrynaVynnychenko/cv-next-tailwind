import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/components/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vynnychenko.dev'),
  title: "Iryna Vynnychenko | Senior Web & Frontend Engineer | React / Next.js Development",
  description: "Senior Web & Frontend Engineer specializing in high-performance React / Next.js development. 4,200+ Upwork hours, 8+ years, 100+ launched projects. TypeScript, TanStack Query, GSAP, Core Web Vitals optimization.",
  keywords: "Web Engineer, Senior Web Engineer, React, Next.js, TypeScript, Product Engineering, TanStack Query, Redux, Zustand, GraphQL, Tailwind CSS, GSAP, Framer Motion, SSR, SSG, Core Web Vitals, Senior Frontend Engineer, Ukraine, Upwork",
  authors: [{ name: "Iryna Vynnychenko" }],
  alternates: {
    canonical: 'https://vynnychenko.dev/',
    languages: {
      'en-US': 'https://vynnychenko.dev/',
      'uk-UA': 'https://vynnychenko.dev/ua/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Iryna Vynnychenko | Senior Web & Frontend Engineer | React / Next.js Development",
    description: "4,200+ Upwork hours · 8+ years · 100+ launched projects. Senior Web & Frontend Engineer — high-performance React / Next.js product engineering.",
    url: 'https://vynnychenko.dev',
    siteName: 'Iryna Vynnychenko — Senior Web & Frontend Engineer',
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

