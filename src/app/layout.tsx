import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tamil Selvan | Full Stack Developer",
  description: "I build high-performance websites that grow your business. Full-stack developer specializing in modern, fast, and scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth overflow-x-hidden`}>
      <body className="antialiased min-h-screen flex flex-col bg-slate-100 text-slate-900 selection:bg-green-200 selection:text-green-900 overflow-x-hidden relative max-w-[100vw] w-full">
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
