import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { ToastProvider } from "@/components/ui/toast"
import Script from "next/script"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Improves CLS (Cumulative Layout Shift)
})

export const metadata: Metadata = {
  title: "YTMP3 - YouTube to MP3 Converter",
  description: "Convert your favorite YouTube videos & short to high-quality MP3 files for free.",
  metadataBase: new URL("https://www.y2mat.xyz"), // Changed to www version as canonical
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "YTMP3 - YouTube to MP3 Converter",
    description: "Convert your favorite YouTube videos & shorts to high-quality MP3 files for free.",
    url: "https://www.y2mat.xyz",
    siteName: "YTMP3",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "YTMP3 - YouTube to MP3 Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YTMP3 - YouTube to MP3 Converter",
    description: "Convert your favorite YouTube videos & shorts to high-quality MP3 files for free.",
    images: ["/android-chrome-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  generator: "Next.js",
  keywords: [
    "youtube to mp3",
    "youtube converter",
    "mp3 converter",
    "youtube shorts to mp3",
    "download youtube audio",
    "free youtube converter",
    "online mp3 converter",
  ],
  authors: [{ name: "YTMP3 Team" }],
  category: "Web Application",
  verification: {
    google: "google-site-verification-code", // Replace with your verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Remove whitespace between tags and keep them on the same line or use fragments */}
        <link rel="canonical" href="https://www.y2mat.xyz" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href={inter.url} as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
      </head>
      <body className={inter.className}>
        <ToastProvider>
          {children}
          <Toaster />
        </ToastProvider>

        {/* Structured data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "YTMP3",
              url: "https://www.y2mat.xyz",
              logo: "https://www.y2mat.xyz/logo.png",
              sameAs: ["https://twitter.com/ytmp3", "https://facebook.com/ytmp3"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "support@y2mat.xyz",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
