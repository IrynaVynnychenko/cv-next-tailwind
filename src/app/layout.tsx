import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Iryna Vynnychenko - Frontend Web Developer",
  description: "Professional resume and portfolio of Iryna Vynnychenko, Frontend Web Developer with 6+ years of experience. Specializing in HTML, CSS, JavaScript, React, and responsive design.",
  keywords: "Frontend Developer, HTML, CSS, JavaScript, React, Vue.js, Web Development, Ukraine, Upwork",
  authors: [{ name: "Iryna Vynnychenko" }],
  openGraph: {
    title: "Iryna Vynnychenko - Frontend Web Developer",
    description: "Professional resume and portfolio of Iryna Vynnychenko, Frontend Web Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
