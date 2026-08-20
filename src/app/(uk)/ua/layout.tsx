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
  title: "Ірина Винниченко | Full-Stack Product Engineer | Next.js, Node.js, PostgreSQL",
  description: "Продуктова інженерка: кастомні CRM, адмін-платформи рівня ERP і мульти-тенантний SaaS із власним бекендом на Node.js/PostgreSQL. 4 200+ годин на Upwork, 100% Job Success, готова до NDA.",
  keywords: "Product Engineer, Full-Stack, React, Next.js, Node.js, TypeScript, кастомна CRM, RBAC, PostgreSQL, Prisma, GraphQL, TanStack Query, OpenAI, AWS, Україна, Upwork",
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
    title: "Ірина Винниченко | Full-Stack Product Engineer | Next.js, Node.js, PostgreSQL",
    description: "Кастомні CRM, адмін рівня ERP, мульти-тенантний SaaS. Next.js + Node.js / PostgreSQL. 4 200+ годин на Upwork · 100% Job Success · NDA.",
    url: 'https://vynnychenko.dev/ua/',
    siteName: 'Ірина Винниченко - Full-Stack Product Engineer',
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
