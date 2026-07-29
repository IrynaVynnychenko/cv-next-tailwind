import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "../../globals.css";
import Providers from "@/components/Providers";

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
  title: "Ірина Винниченко | Senior Web & Frontend Розробник | Розробка React / Next.js",
  description: "Senior Web & Frontend Розробник, що спеціалізується на високопродуктивній розробці React / Next.js. 4,200+ годин на Upwork, 8+ років досвіду, 100+ запущених проєктів. TypeScript, TanStack Query, GSAP, оптимізація Core Web Vitals.",
  keywords: "Web Розробник, Senior Web Engineer, React, Next.js, TypeScript, Продуктова Інженерія, Frontend Розробник, Україна, Upwork",
  authors: [{ name: "Ірина Винниченко" }],
  alternates: {
    canonical: 'https://vynnychenko.dev/ua/',
    languages: {
      'en': 'https://vynnychenko.dev/',
      'en-US': 'https://vynnychenko.dev/',
      'uk-UA': 'https://vynnychenko.dev/ua/',
      'x-default': 'https://vynnychenko.dev/',
    },
  },
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
    title: "Ірина Винниченко | Senior Web & Frontend Розробник | Розробка React / Next.js",
    description: "4,200+ годин на Upwork · 8+ років досвіду · 100+ запущених проєктів. Senior Web & Frontend Розробник — високопродуктивна фронтенд-інженерія.",
    url: 'https://vynnychenko.dev/ua/',
    siteName: 'Ірина Винниченко — Senior Web & Frontend Розробник',
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
