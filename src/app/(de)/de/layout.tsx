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
  title: "Iryna Vynnychenko | Frontend- & Full-Stack-Entwicklerin | Next.js, React, Node.js, AI",
  description: "Frontend- & Full-Stack-Entwicklerin für Custom-CRMs und komplexe Web-Apps. Next.js, React, Node.js, KI, APIs. 4.200+ Upwork-Stunden, 8+ Jahre, 100+ veröffentlichte Projekte.",
  keywords: "Frontend-Entwicklerin, Full-Stack-Entwicklerin, React, Next.js, Node.js, TypeScript, Custom CRM, AI, OpenAI, Prisma, PostgreSQL, Tailwind CSS, Shadcn/ui, GSAP, Ukraine, Upwork, Deutschland",
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
    title: "Iryna Vynnychenko | Frontend- & Full-Stack-Entwicklerin | Next.js, React, Node.js, AI",
    description: "4.200+ Upwork-Stunden · 8+ Jahre · 100+ veröffentlichte Projekte. Custom-CRMs, komplexe Web-Apps, Next.js / React / Node.js / KI.",
    url: 'https://vynnychenko.dev/de/',
    siteName: 'Iryna Vynnychenko — Frontend- & Full-Stack-Entwicklerin',
    type: "website",
  },
};

export default function DeRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth light" suppressHydrationWarning>
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
