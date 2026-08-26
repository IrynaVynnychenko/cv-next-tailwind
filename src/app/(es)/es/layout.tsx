import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "../../globals.css";
import Providers from "@/components/Providers";
import ThemeScript from "@/components/ThemeScript";
import { getOgLocale, getOpenGraphImages, getTwitterImageMetadata } from "@/lib/seo";

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vynnychenko.dev'),
  title: "Iryna Vynnychenko | Next.js, Telegram Mini Apps e IA",
  description: "Desarrollo de Telegram Mini App, soluciones de IA para empresas, Next.js fullstack. Más de 4.200 horas en Upwork, 100% Job Success.",
  keywords: "desarrollo Telegram Mini App, soluciones de IA para empresas, Frontend, Full-Stack, Next.js, Webflow, WordPress, React, TypeScript, PostgreSQL, Ucrania, Upwork, España",
  authors: [{ name: "Iryna Vynnychenko" }],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
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
    title: "Iryna Vynnychenko | Next.js, Telegram Mini Apps e IA",
    description: "Desarrollo de Telegram Mini App, soluciones de IA para empresas, Next.js fullstack. Más de 4.200 horas en Upwork · 100% Job Success.",
    url: 'https://vynnychenko.dev/es/',
    siteName: 'Iryna Vynnychenko - Ingeniera frontend y full-stack',
    type: "website",
    locale: getOgLocale('es'),
    images: getOpenGraphImages(),
  },
  twitter: getTwitterImageMetadata(),
};

export default function EsRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth light" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <Providers lang="es">
          {children}
        </Providers>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
