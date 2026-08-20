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
  title: "Ірина Винниченко | Frontend & Full-Stack розробниця | Next.js, React, Node.js, AI",
  description: "Frontend & Full-Stack розробниця: кастомні CRM і складні вебзастосунки. Next.js, React, Node.js, ШІ, API. 4 200+ годин на Upwork, 8+ років, 100+ запущених проєктів.",
  keywords: "Frontend розробниця, Full-Stack розробниця, Frontend розробник, React, Next.js, Node.js, TypeScript, Custom CRM, AI, OpenAI, Prisma, PostgreSQL, Tailwind CSS, Shadcn/ui, GSAP, Україна, Upwork",
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
    title: "Ірина Винниченко | Frontend & Full-Stack розробниця | Next.js, React, Node.js, AI",
    description: "4 200+ годин на Upwork · 8+ років · 100+ запущених проєктів. Кастомні CRM, складні вебзастосунки, Next.js / React / Node.js / ШІ.",
    url: 'https://vynnychenko.dev/ua/',
    siteName: 'Ірина Винниченко — Frontend & Full-Stack розробниця',
    type: "website",
  },
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
