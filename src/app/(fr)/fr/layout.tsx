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
  title: "Iryna Vynnychenko | Full-Stack Product Engineer | Next.js, Node.js, PostgreSQL",
  description: "Product engineer : CRM sur mesure, admin type ERP et SaaS multi-tenant avec backend Node.js/PostgreSQL. 4 200+ heures Upwork, 100 % Job Success, NDA possible.",
  keywords: "Product Engineer, Full-Stack, React, Next.js, Node.js, TypeScript, CRM sur mesure, RBAC, PostgreSQL, Prisma, GraphQL, TanStack Query, OpenAI, AWS, Ukraine, Upwork, France",
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
    title: "Iryna Vynnychenko | Full-Stack Product Engineer | Next.js, Node.js, PostgreSQL",
    description: "CRM sur mesure, admin type ERP, SaaS multi-tenant. Next.js + Node.js / PostgreSQL. 4 200+ heures Upwork · 100 % Job Success · NDA.",
    url: 'https://vynnychenko.dev/fr/',
    siteName: 'Iryna Vynnychenko - Full-Stack Product Engineer',
    type: "website",
    locale: getOgLocale('fr'),
    images: getOpenGraphImages(),
  },
  twitter: getTwitterImageMetadata(),
};

export default function FrRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth light" suppressHydrationWarning>
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
