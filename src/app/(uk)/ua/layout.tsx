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
  title: "Ірина Винниченко | Frontend і Full-Stack | Webflow, WordPress, Next.js",
  description: "Маркетингові сайти, Webflow, WordPress, статика, анімація GSAP і fullstack Next.js — UI, API, PostgreSQL. 4 200+ годин на Upwork, 100% Job Success.",
  keywords: "Frontend, Full-Stack, Next.js, Webflow, WordPress, маркетинговий сайт, лендинг, анімація, GSAP, статика, React, Node.js, TypeScript, PostgreSQL, Україна, Upwork",
  authors: [{ name: "Ірина Винниченко" }],
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
    title: "Ірина Винниченко | Frontend і Full-Stack | Webflow, WordPress, Next.js",
    description: "Маркетингові сайти, Webflow, WordPress, анімація GSAP, fullstack Next.js. 4 200+ годин на Upwork · 100% Job Success.",
    url: 'https://vynnychenko.dev/ua/',
    siteName: 'Ірина Винниченко - Frontend і Full-Stack інженерка',
    type: "website",
    locale: getOgLocale('ua'),
    images: getOpenGraphImages('Ірина Винниченко'),
  },
  twitter: getTwitterImageMetadata('Ірина Винниченко'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="scroll-smooth light" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <Providers>
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
