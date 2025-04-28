import type { Metadata } from "next"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import BreadcrumbNav from "@/components/BreadcrumbNav"
import RelatedContent from "@/components/RelatedContent"
import Script from "next/script"
// Removed SecondaryNavigation import

export const metadata: Metadata = {
  title: "Copyright Disclaimer - YMP3 YouTube to MP3 Converter",
  description:
    "Read the Copyright Disclaimer for YMP3, the free YouTube to MP3 converter. Understand our stance on copyright and fair use when converting YouTube videos to MP3 format.",
  keywords:
    "copyright disclaimer, youtube to mp3 copyright, mp3 converter disclaimer, fair use, youtube converter copyright",
  alternates: {
    canonical: "/disclaimer",
  },
}

export default function Disclaimer() {
  const lastModified = new Date().toISOString().split("T")[0] // YYYY-MM-DD format

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-[#0066FF]">
        <Navigation />
        {/* Removed SecondaryNavigation component */}
        <BreadcrumbNav items={[{ label: "Copyright Disclaimer", href: "/disclaimer", isCurrent: true }]} />
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
          Copyright Disclaimer | YMP3 YouTube to MP3 Converter
        </h1>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">Last Updated: {lastModified}</p>

            <h2 className="text-2xl font-semibold mb-4">Copyright Disclaimer</h2>
            <p className="mb-4">
              YMP3 is a YouTube to MP3 converter tool that allows users to extract audio from YouTube videos for
              personal, non-commercial use. We respect intellectual property rights and expect our users to do the same.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Fair Use Notice</h2>
            <p className="mb-4">
              YMP3 operates under the belief that converting YouTube videos to MP3 format for certain purposes may
              constitute fair use under copyright law in some jurisdictions. Fair use typically includes purposes such
              as criticism, comment, news reporting, teaching, scholarship, or research.
            </p>

            <h2 className="text-2xl font-semibold mb-4">User Responsibility</h2>
            <p className="mb-4">
              Users of YMP3 are solely responsible for how they use the converted content. By using our service, you
              agree that:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You will only convert content that you have the legal right to convert</li>
              <li>You will not use our service to infringe on any copyright or intellectual property rights</li>
              <li>
                You understand that downloading copyrighted material without permission may be illegal in your country
              </li>
              <li>You will use the converted content in accordance with applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">DMCA Compliance</h2>
            <p className="mb-4">
              YMP3 respects the intellectual property rights of others and expects users to do the same. If you believe
              that your work has been copied in a way that constitutes copyright infringement, please provide us with
              the following information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                A physical or electronic signature of the copyright owner or a person authorized to act on their behalf
              </li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>
                Identification of the material that is claimed to be infringing or to be the subject of infringing
                activity
              </li>
              <li>Your contact information, including your address, telephone number, and email address</li>
              <li>
                A statement by you that you have a good faith belief that the disputed use is not authorized by the
                copyright owner, its agent, or the law
              </li>
              <li>
                A statement, made under penalty of perjury, that the information in your notice is accurate and that you
                are the copyright owner or authorized to act on the copyright owner's behalf
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have any questions about this Copyright Disclaimer or if you believe that your copyrighted material
              has been infringed upon, please contact us through our{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact Page
              </a>
              .
            </p>
          </div>
        </div>

        {/* Related Content Section */}
        <div className="mt-12">
          <RelatedContent
            title="Related Copyright Information"
            links={[
              {
                title: "Terms of Service",
                href: "/terms",
                description: "Read our complete terms and conditions",
              },
              {
                title: "Privacy Policy",
                href: "/privacy",
                description: "Learn how we handle your data",
              },
              {
                title: "How to Use YouTube to MP3 Converter",
                href: "/#how-it-works",
                description: "Learn the proper way to use our converter",
              },
              {
                title: "Contact Us",
                href: "/contact",
                description: "Get in touch with copyright concerns or questions",
              },
            ]}
            keywords={[
              { text: "YouTube to MP3 Copyright", href: "/disclaimer" },
              { text: "Fair Use Policy", href: "/disclaimer#fair-use-notice" },
              { text: "MP3 Converter Legal", href: "/disclaimer" },
              { text: "DMCA Compliance", href: "/disclaimer#dmca-compliance" },
              { text: "Copyright Infringement", href: "/disclaimer#dmca-compliance" },
              { text: "User Responsibility", href: "/disclaimer#user-responsibility" },
              { text: "Legal MP3 Downloads", href: "/disclaimer" },
              { text: "YouTube Converter Rights", href: "/disclaimer" },
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
                item: "https://www.ymp3.top/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Copyright Disclaimer",
                item: "https://www.ymp3.top/disclaimer",
              },
            ],
          }),
        }}
      />
    </div>
  )
}
