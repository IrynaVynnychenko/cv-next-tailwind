import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "../../globals.css";
import Providers from "@/components/Providers";
import ThemeScript from "@/components/ThemeScript";

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
  title: "Iryna Vynnychenko | Sviluppatrice Frontend e Full-Stack | Next.js, React, Node.js, IA",
  description: "Sviluppatrice Frontend e Full-Stack specializzata in CRM su misura e applicazioni web complesse. Next.js, React, Node.js, IA, API. Oltre 4.200 ore su Upwork, 8+ anni, 100+ progetti lanciati.",
  keywords: "Sviluppatrice Frontend, Sviluppatrice Full-Stack, React, Next.js, Node.js, TypeScript, CRM su misura, IA, OpenAI, Prisma, PostgreSQL, Tailwind CSS, Shadcn/ui, GSAP, Ucraina, Upwork, Italia",
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
    title: "Iryna Vynnychenko | Sviluppatrice Frontend e Full-Stack | Next.js, React, Node.js, IA",
    description: "Oltre 4.200 ore su Upwork · 8+ anni · 100+ progetti lanciati. CRM su misura, applicazioni web complesse, Next.js / React / Node.js / IA.",
    url: 'https://vynnychenko.dev/it/',
    siteName: 'Iryna Vynnychenko — Sviluppatrice Frontend e Full-Stack',
    type: "website",
  },
};

export default function ItRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth light" suppressHydrationWarning>
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
