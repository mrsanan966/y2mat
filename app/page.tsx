import type { Metadata } from "next"
import Script from "next/script"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import FAQ from "@/components/FAQ"
import AboutSection from "@/components/AboutSection"
import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"
import PopularArtists from "@/components/PopularArtists"
import MusicGenres from "@/components/MusicGenres"
import TrendingTopics from "@/components/TrendingTopics"
import MusicDecades from "@/components/MusicDecades"
import MusicEquipment from "@/components/MusicEquipment"
import MusicPlatforms from "@/components/MusicPlatforms"
import YouTubeConverterWrapper from "@/components/YouTubeConverterWrapper"
import BreadcrumbNav from "@/components/BreadcrumbNav"
import RelatedContent from "@/components/RelatedContent"
// Removed SecondaryNavigation import

export const metadata: Metadata = {
  title: "YTMP3 - YouTube to MP3 Converter | Convert Videos and Shorts",
  description:
    "Convert YouTube videos and Shorts to MP3 format with our free online converter. High-quality audio, fast downloads, and no registration required!",
  keywords:
    "youtube to mp3, youtube converter, youtube shorts to mp3, mp3 converter, download youtube audio, youtube to audio, free youtube converter",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  const lastModified = new Date().toISOString().split("T")[0] // YYYY-MM-DD format

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#0066FF]">
        <Navigation />
        {/* Removed SecondaryNavigation component */}
        <BreadcrumbNav items={[]} />
      </header>

      <main className="flex-1">
        <section className="px-4 py-16 bg-[#0066FF] text-white text-center" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-4">
              YouTube mp3 converter
            </h1>
            <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
              Convert your favorite YouTube videos and Shorts to high-quality MP3 files quickly and easily. No
              registration required!
            </p>
            <YouTubeConverterWrapper />
          </div>
        </section>

        <Features />
        <HowItWorks />

        {/* Entity-based content sections */}
        <PopularArtists />
        <MusicGenres />
        <MusicDecades />
        <MusicEquipment />
        <MusicPlatforms />
        <TrendingTopics />

        <FAQ />
        <AboutSection />

        {/* Related Content Section */}
        <div className="container mx-auto px-4 py-8">
          <RelatedContent
            title="Explore More YouTube to MP3 Resources"
            links={[
              {
                title: "How to Use YouTube to MP3 Converter",
                href: "/#how-it-works",
                description: "Step-by-step guide to converting YouTube videos to MP3 format",
              },
              {
                title: "YouTube to MP3 Converter Features",
                href: "/#features",
                description: "Discover the benefits of our free YouTube to MP3 converter",
              },
              {
                title: "Contact Our Support Team",
                href: "/contact",
                description: "Get help with YouTube to MP3 conversion issues",
              },
              {
                title: "Terms of Service",
                href: "/terms",
                description: "Learn about the rules for using our YouTube to MP3 converter",
              },
            ]}
            keywords={[
              { text: "YouTube to MP3", href: "/#hero-heading" },
              { text: "MP3 Converter", href: "/#features" },
              { text: "YouTube Shorts to MP3", href: "/#how-it-works" },
              { text: "Download YouTube Audio", href: "/#features" },
              { text: "Free MP3 Converter", href: "/#features" },
              { text: "Online Audio Converter", href: "/#features" },
              { text: "YouTube Music Download", href: "/#music-genres" },
              { text: "High Quality MP3", href: "/#features" },
              { text: "Convert YouTube Videos", href: "/#how-it-works" },
              { text: "MP3 Downloader", href: "/#features" },
            ]}
          />
        </div>
      </main>

      <Footer />

      {/* Add structured data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "YTMP3 Converter",
            url: "https://www.y2mat.xyz/",
            description:
              "Convert YouTube videos and Shorts to MP3 format with our free online converter. High-quality audio, fast downloads, and no registration required!",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "All",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            dateModified: lastModified,
          }),
        }}
      />

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
            ],
          }),
        }}
      />

      {/* Music Entity Schema */}
      <Script
        id="music-entity-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "MusicGroup",
                  name: "Taylor Swift",
                  description:
                    "Known for her narrative songwriting and versatile musical style spanning from country to pop and folk.",
                  genre: ["Pop", "Country", "Folk"],
                  url: "https://www.youtube.com/results?search_query=taylor+swift",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "MusicGroup",
                  name: "The Weeknd",
                  description:
                    "Renowned for his distinctive sound blending R&B, pop and electronic music with dark undertones.",
                  genre: ["R&B", "Pop", "Electronic"],
                  url: "https://www.youtube.com/results?search_query=the+weeknd",
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "MusicGroup",
                  name: "BTS",
                  description:
                    "Global K-pop phenomenon known for their synchronized choreography and socially conscious lyrics.",
                  genre: ["K-pop", "Hip-hop", "R&B"],
                  url: "https://www.youtube.com/results?search_query=bts",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
