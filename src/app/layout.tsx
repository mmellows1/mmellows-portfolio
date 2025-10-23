import Sidebar from "@/components/Sidebar";
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
  title: "Matt | Full-Stack Developer Portfolio",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed flex h-full w-full bg-slate-800 text-white">
          <div className="max-w-[300px] w-full border-r-4 border-r-slate-700 h-full flex flex-col justify-between">
            <Sidebar />
          </div>
          <div className="w-full grow-2 scroll-smooth overflow-y-scroll overflow-x-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
