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
  title: "LootLook - Know What Your Stuff Is Really Worth",
  description: "AI-powered pricing for anything. Snap a photo, get instant valuations. Perfect for garage sales, decluttering, collections, and insurance. Join the beta now!",
  verification: {
    google: "0eX6mqFihrObpCl73cFDjZh-76oGp7njtXTpU64IkEE",
  },
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
        {children}
      </body>
    </html>
  );
}
