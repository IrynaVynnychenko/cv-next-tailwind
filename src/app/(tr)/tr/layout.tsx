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
  description: "Ürün mühendisi: özel CRM’ler, ERP tarzı admin platformları ve kendi Node.js/PostgreSQL backend’ine sahip çok kiracılı SaaS. 4.200+ Upwork saati, %100 Job Success, NDA’ya hazır.",
  keywords: "Product Engineer, Full-Stack, React, Next.js, Node.js, TypeScript, özel CRM, RBAC, PostgreSQL, Prisma, GraphQL, TanStack Query, OpenAI, AWS, Ukrayna, Upwork, Türkiye",
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
    description: "Özel CRM, ERP tarzı admin, çok kiracılı SaaS. Next.js + Node.js / PostgreSQL. 4.200+ Upwork saati · %100 Job Success · NDA.",
    url: 'https://vynnychenko.dev/tr/',
    siteName: 'Iryna Vynnychenko - Full-Stack Product Engineer',
    type: "website",
    locale: getOgLocale('tr'),
    images: getOpenGraphImages(),
  },
  twitter: getTwitterImageMetadata(),
};

export default function TrRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth light" suppressHydrationWarning>
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
