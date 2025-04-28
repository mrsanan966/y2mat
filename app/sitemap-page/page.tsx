import type { Metadata } from "next"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import BreadcrumbNav from "@/components/BreadcrumbNav"
import RelatedContent from "@/components/RelatedContent"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Script from "next/script"
// Removed SecondaryNavigation import

export const metadata: Metadata = {
  title: "Sitemap - YMP3 YouTube to MP3 Converter",
  description:
    "Browse the sitemap of YMP3, the free YouTube to MP3 converter. Find all pages and sections of our website to easily navigate to the content you need.",
  keywords: "sitemap, youtube to mp3 sitemap, mp3 converter navigation, website map, youtube converter pages",
  alternates: {
    canonical: "/sitemap-page",
  },
}

export default function SitemapPage() {
  const lastModified = new Date().toISOString().split("T")[0] // YYYY-MM-DD format

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-[#0066FF]">
        <Navigation />
        {/* Removed SecondaryNavigation component */}
        <BreadcrumbNav items={[{ label: "Sitemap", href: "/sitemap-page", isCurrent: true }]} />
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Sitemap | YMP3 YouTube to MP3 Converter</h1>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Main Pages</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Copyright Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap-page" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Home Page Sections</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/#hero-heading" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    YouTube to MP3 Converter
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#popular-artists" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Popular Artists
                  </Link>
                </li>
                <li>
                  <Link href="/#music-genres" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Music Genres
                  </Link>
                </li>
                <li>
                  <Link href="/#music-decades" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Music Through Decades
                  </Link>
                </li>
                <li>
                  <Link href="/#music-equipment" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Audio Equipment
                  </Link>
                </li>
                <li>
                  <Link href="/#music-platforms" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Music Platforms
                  </Link>
                </li>
                <li>
                  <Link href="/#trending-topics" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Trending Topics
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="flex items-center text-blue-600 hover:underline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Content Section */}
        <div className="mt-12">
          <RelatedContent
            title="Related Navigation Resources"
            links={[
              {
                title: "YouTube to MP3 Converter",
                href: "/#hero-heading",
                description: "Convert YouTube videos to MP3 format",
              },
              {
                title: "Contact Us",
                href: "/contact",
                description: "Get help with our YouTube to MP3 converter",
              },
              {
                title: "FAQ",
                href: "/#faq",
                description: "Find answers to common questions about our service",
              },
              {
                title: "How It Works",
                href: "/#how-it-works",
                description: "Learn how to use our YouTube to MP3 converter",
              },
            ]}
            keywords={[
              { text: "YouTube to MP3 Navigation", href: "/sitemap-page" },
              { text: "MP3 Converter Map", href: "/sitemap-page" },
              { text: "Website Navigation", href: "/sitemap-page" },
              { text: "Site Structure", href: "/sitemap-page" },
              { text: "All Pages", href: "/sitemap-page" },
              { text: "Website Sections", href: "/sitemap-page" },
              { text: "YouTube Converter Guide", href: "/#how-it-works" },
              { text: "MP3 Conversion Help", href: "/#faq" },
            ]}
          />
        </div>
      </main>

      <Footer />

      {/* BreadcrumbList Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.y2mat.xyz/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Sitemap",
                item: "https://www.y2mat.xyz/sitemap-page",
              },
            ],
          }),
        }}
      />
    </div>
  )
}
