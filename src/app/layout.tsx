import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves page loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Improves page loading performance
});

export const metadata: Metadata = {
  title: "Stallion Classic - India's National Bodybuilding Championship",
  description:
    "Stallion Classic - India's premier national bodybuilding championship featuring bodybuilding, men's physique & classic physique categories. Join the ultimate competition for fitness enthusiasts.",
  keywords: "Stallion Classic, bodybuilding championship, India bodybuilding, men's physique competition, classic physique, national bodybuilding contest, fitness competition India",
  metadataBase: new URL("https://stallionclassic.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stallion Classic | India's National Bodybuilding Championship",
    description: "Stallion classic India's premier bodybuilding championship featuring top athletes competing in bodybuilding, men's physique & classic physique categories.",
    url: "https://stallionclassic.com",
    siteName: "Stallion Classic",
    images: [
      {
        url: "/images/stallion-classic-og.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Stallion Classic Championship",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stallion Classic | India's National Bodybuilding Championship",
    description: "India's premier bodybuilding championship featuring top athletes competing in bodybuilding, men's physique & classic physique categories.",
    images: ["/images/stallion-classic-twitter.jpg"], // Replace with actual image path
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180" },
    ],
  },
  verification: {
    google: "HEeSkFQ15nmvuqgbvcWCSbwO6vm-EV6lpTXke5SVpsc",
  },
  category: "Sports & Fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <link rel="canonical" href="https://stallionclassic.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="preload"
          href="/fonts/CreatoDisplay.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/impact.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* Schema.org JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsEvent",
              "name": "Stallion Classic Bodybuilding Championship",
              "description": "India's premier national bodybuilding championship featuring bodybuilding, men's physique & classic physique categories.",
              "url": "https://stallionclassic.com",
              "location": {
                "@type": "Place",
                "name": "India", // Update with specific venue details
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "India"
                  // Add city, postal code, etc. when available
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": "Stallion Classic",
                "url": "https://stallionclassic.com"
              },
              "sport": "Bodybuilding",
              "audience": {
                "@type": "Audience",
                "audienceType": "Bodybuilding Enthusiasts"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
