import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AdminShortcut from "@/components/AdminShortcut";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("scroll-smooth overflow-x-hidden", inter.variable, "font-sans", geist.variable)}>
      <body className="antialiased min-h-screen flex flex-col bg-slate-100 text-slate-900 selection:bg-green-200 selection:text-green-900 overflow-x-hidden max-w-full relative">
        <AdminShortcut />
        {children}
      </body>
    </html>
  );
}
