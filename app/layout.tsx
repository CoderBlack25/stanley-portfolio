import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const drukWide = localFont({
  src: "../fonts/DrukWide-Heavy.otf",
  variable: "--font-druk-wide",
  display: "swap",
});

const drukWideMedium = localFont({
  src: "../fonts/DrukWide-Medium.otf",
  variable: "--font-druk-wide-medium",
  display: "swap",
});

const drukTextWide = localFont({
  src: "../fonts/DrukTextWide-Medium.otf",
  variable: "--font-druk-text-wide",
  display: "swap",
});

const switzerMedium = localFont({
  src: "../fonts/Switzer-Medium.otf",
  variable: "--font-switzer-medium-family",
  display: "swap",
});

const switzerRegular = localFont({
  src: "../fonts/Switzer-Regular.otf",
  variable: "--font-switzer-regular-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stanley's Portfolio",
  description: "Built by Logic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${drukWide.variable} ${drukWideMedium.variable} ${drukTextWide.variable} ${switzerMedium.variable} ${switzerRegular.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
