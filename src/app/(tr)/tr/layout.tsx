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
  title: "Iryna Vynnychenko | Frontend ve Full-Stack Geliştirici | Next.js, React, Node.js, Yapay Zekâ",
  description: "Özel CRM ve karmaşık web uygulamalarında uzman Frontend ve Full-Stack Geliştirici. Next.js, React, Node.js, yapay zekâ, API. 4.200+ Upwork saati, 8+ yıl, 100+ yayına alınan proje.",
  keywords: "Frontend Geliştirici, Full-Stack Geliştirici, React, Next.js, Node.js, TypeScript, özel CRM, yapay zekâ, OpenAI, Prisma, PostgreSQL, Tailwind CSS, Shadcn/ui, GSAP, Ukrayna, Upwork, Türkiye",
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
    title: "Iryna Vynnychenko | Frontend ve Full-Stack Geliştirici | Next.js, React, Node.js, Yapay Zekâ",
    description: "4.200+ Upwork saati · 8+ yıl · 100+ yayına alınan proje. Özel CRM, karmaşık web uygulamaları, Next.js / React / Node.js / yapay zekâ.",
    url: 'https://vynnychenko.dev/tr/',
    siteName: 'Iryna Vynnychenko — Frontend ve Full-Stack Geliştirici',
    type: "website",
  },
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
