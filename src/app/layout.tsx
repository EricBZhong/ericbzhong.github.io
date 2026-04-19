import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
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
  title: "Eric Zhong",
  description:
    "Co-Founder & CTO at Colby. Previously Arta Finance, Coinbase. I build products from zero to one.",
  openGraph: {
    title: "Eric Zhong",
    description:
      "Co-Founder & CTO at Colby. Previously Arta Finance, Coinbase. I build products from zero to one.",
    url: "https://ericbzhong.github.io",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
