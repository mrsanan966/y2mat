import type { Metadata } from "next"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import BreadcrumbNav from "@/components/BreadcrumbNav"
import RelatedContent from "@/components/RelatedContent"
import Script from "next/script"
// Removed SecondaryNavigation import

export const metadata: Metadata = {
  title: "Terms of Service - YMP3 YouTube to MP3 Converter",
  description:
    "Read the Terms of Service for YMP3, the free YouTube to MP3 converter. Learn about the rules and guidelines for using our service to convert YouTube videos to MP3 format.",
  keywords: "terms of service, youtube to mp3 terms, mp3 converter terms, legal terms, youtube converter rules",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsOfService() {
  const lastModified = new Date().toISOString().split("T")[0] // YYYY-MM-DD format

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-[#0066FF]">
        <Navigation />
        {/* Removed SecondaryNavigation component */}
        <BreadcrumbNav items={[{ label: "Terms of Service", href: "/terms", isCurrent: true }]} />
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
          Terms of Service | YMP3 YouTube to MP3 Converter
        </h1>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">Last Updated: {lastModified}</p>

            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using the YMP3 YouTube to MP3 Converter service ("Service"), you agree to be bound by
              these Terms of Service. If you do not agree to these terms, please do not use our Service.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="mb-4">
              YMP3 provides a free online service that allows users to convert YouTube videos to MP3 audio format for
              personal, non-commercial use.
            </p>

            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="mb-4">Users of YMP3 agree to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Only convert content they have the legal right to access and convert</li>
              <li>Not use the Service for any illegal purposes</li>
              <li>Not attempt to bypass any limitations or restrictions of the Service</li>
              <li>Use converted content in accordance with copyright laws and fair use principles</li>
              <li>Not use automated systems or scripts to access the Service</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="mb-4">
              YMP3 respects intellectual property rights and expects users to do the same. Our Service should only be
              used to convert content that you have permission to convert, such as:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Content you created yourself</li>
              <li>Content in the public domain</li>
              <li>Content with a license allowing conversion and personal use</li>
              <li>Content where your use qualifies as fair use under copyright law</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
            <p className="mb-4">
              The Service is provided "as is" without warranties of any kind, either express or implied. YMP3 does not
              guarantee that the Service will be uninterrupted, secure, or error-free.
            </p>

            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              YMP3 shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of or inability to use the Service.
            </p>

            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p className="mb-4">
              YMP3 reserves the right to modify these Terms of Service at any time. We will provide notice of
              significant changes by updating the "Last Updated" date at the top of this page.
            </p>

            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us through our{" "}
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
            title="Related Legal Information"
            links={[
              {
                title: "Privacy Policy",
                href: "/privacy",
                description: "Learn how we handle your data when using our YouTube to MP3 converter",
              },
              {
                title: "Copyright Disclaimer",
                href: "/disclaimer",
                description: "Understand our stance on copyright and fair use",
              },
              {
                title: "Cookie Policy",
                href: "/cookies",
                description: "Information about how we use cookies on our website",
              },
              {
                title: "Contact Us",
                href: "/contact",
                description: "Get in touch with questions about our terms of service",
              },
            ]}
            keywords={[
              { text: "YouTube to MP3 Terms", href: "/terms" },
              { text: "Legal Guidelines", href: "/terms" },
              { text: "MP3 Converter Rules", href: "/terms" },
              { text: "User Responsibilities", href: "/terms#3-user-responsibilities" },
              { text: "Intellectual Property", href: "/terms#4-intellectual-property" },
              { text: "Service Disclaimer", href: "/terms#5-disclaimer-of-warranties" },
              { text: "Terms and Conditions", href: "/terms" },
              { text: "YouTube Converter Legal", href: "/terms" },
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
                name: "Terms of Service",
                item: "https://www.ymp3.top/terms",
              },
            ],
          }),
        }}
      />
    </div>
  )
}
