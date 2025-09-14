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
  title: "Iryna Vynnychenko - Frontend Web Developer | +380931844615",
  description: "Professional resume and portfolio of Iryna Vynnychenko, Frontend Web Developer with 7+ years of experience. Specializing in HTML, CSS, JavaScript, React, and responsive design.",
  keywords: "Frontend Developer, HTML, CSS, JavaScript, React, Next.js, Web Development, Ukraine, Upwork, react developer, HTML/CSS, html5, scss, Professional, js developer, web app developer, web app, tailwind css, tailwindcss, developer, front-end-development, Tailwind CSS, interface developer, web development, development, experienced, web developer, React.js, expert front end developer, site development, site, website, typescript, Typescript developer, Responsive web, Responsive Design, Material, UI, HTML Expert, mobile-first",
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
