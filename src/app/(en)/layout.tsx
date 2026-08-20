import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "../globals.css";
import Providers from "@/components/Providers";
import ThemeScript from "@/components/ThemeScript";
import { getOgLocale, getOpenGraphImages, getTwitterImageMetadata } from "@/lib/seo";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vynnychenko.dev'),
  title: "Iryna Vynnychenko | Full-Stack Product Engineer | Next.js, Node.js, PostgreSQL",
  description: "Full-Stack Product Engineer for custom CRMs, ERP-style admin platforms, and multi-tenant SaaS with own Node.js/PostgreSQL backends. 4,200+ Upwork hours, 100% Job Success, NDA-ready.",
  keywords: "Product Engineer, Full-Stack, React, Next.js, Node.js, TypeScript, Custom CRM, RBAC, multi-tenant, PostgreSQL, Prisma, GraphQL, TanStack Query, OpenAI, AWS, Ukraine, Upwork",
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
    description: "Custom CRMs, ERP-style admin, multi-tenant SaaS. Next.js + Node.js / PostgreSQL. 4,200+ Upwork hours · 100% Job Success · NDA-ready.",
    url: 'https://vynnychenko.dev',
    siteName: 'Iryna Vynnychenko - Full-Stack Product Engineer',
    type: "website",
    locale: getOgLocale('en'),
    images: getOpenGraphImages(),
  },
  twitter: getTwitterImageMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth light" suppressHydrationWarning>
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
