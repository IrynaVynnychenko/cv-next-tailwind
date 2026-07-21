import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Iryna Vynnychenko | +380931844615 | Senior Web & Frontend Developer | React / Next.js Development",
  description: "Senior Web & Frontend Developer specializing in high-performance React / Next.js development. 4,200+ Upwork hours, 8+ years, 100+ launched projects. TypeScript, TanStack Query, GSAP, Core Web Vitals optimization.",
  keywords: "Web Developer, Senior Web Developer, React, Next.js, TypeScript, Product Engineering, TanStack Query, Redux, Zustand, GraphQL, Tailwind CSS, GSAP, Framer Motion, SSR, SSG, Core Web Vitals, Senior Frontend Developer, Ukraine, Upwork",
  authors: [{ name: "Iryna Vynnychenko" }],
  openGraph: {
    title: "Iryna Vynnychenko | +380931844615 | Senior Web & Frontend Developer | React / Next.js Development",
    description: "4,200+ Upwork hours · 8+ years · 100+ launched projects. Senior Web & Frontend Developer — high-performance React / Next.js product engineering.",
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
        {children}
      </body>
    </html>
  );
}
