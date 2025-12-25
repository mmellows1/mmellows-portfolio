import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matthew Mellows | Full-Stack Developer Portfolio",
  description:
    "Explore Matt's portfolio showcasing projects, skills, and expertise as a full-stack developer. Specializing in web development, modern frameworks, and creating dynamic, responsive applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 bg-gradient-to-tr from-slate-900 via-slate-800 to-gray-900 bg-fixed`}
      >
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0 text-slate-400">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header />
            <main className="pt-24 lg:w-[52%] lg:py-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
