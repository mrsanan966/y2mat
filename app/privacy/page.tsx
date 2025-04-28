import type { Metadata } from "next"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import BreadcrumbNav from "@/components/BreadcrumbNav"
import RelatedContent from "@/components/RelatedContent"
import Script from "next/script"
// Removed SecondaryNavigation import

export const metadata: Metadata = {
  title: "Privacy Policy - YTMP3 YouTube to MP3 Converter",
  description:
    "Read the Privacy Policy for YTMP3, the free YouTube to MP3 converter. Learn how we handle your data when you use our service to convert YouTube videos to MP3 format.",
  keywords: "privacy policy, youtube to mp3 privacy, mp3 converter privacy, data protection, youtube converter privacy",
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyPolicy() {
  const lastModified = new Date().toISOString().split("T")[0] // YYYY-MM-DD format

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-[#0066FF]">
        <Navigation />
        {/* Removed SecondaryNavigation component */}
        <BreadcrumbNav items={[{ label: "Privacy Policy", href: "/privacy", isCurrent: true }]} />
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
          Privacy Policy | YTMP3 YouTube to MP3 Converter
        </h1>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">Last Updated: {lastModified}</p>

            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              At YTMP3, we respect your privacy and are committed to protecting your personal data. This Privacy Policy
              explains how we collect, use, and safeguard your information when you use our YouTube to MP3 converter
              service.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="mb-4">When you use YTMP3, we may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Usage Data:</strong> Information about how you use our service, including YouTube URLs you
                convert, conversion frequency, and browser type.
              </li>
              <li>
                <strong>Log Data:</strong> Standard information that web browsers and servers typically provide, such as
                IP address, browser type, referring/exit pages, and date/time stamps.
              </li>
              <li>
                <strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to
                track activity on our Service and hold certain information.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide and maintain our Service</li>
              <li>Improve and optimize our YouTube to MP3 converter</li>
              <li>Monitor the usage of our Service</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Provide customer support</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information. However, please note that
              no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
            <p className="mb-4">
              Our Service may contain links to third-party websites or services that are not owned or controlled by
              YTMP3. We have no control over and assume no responsibility for the content, privacy policies, or practices
              of any third-party websites or services.
            </p>

            <h2 className="text-2xl font-semibold mb-4">6. Children's Privacy</h2>
            <p className="mb-4">
              Our Service is not intended for use by children under the age of 13. We do not knowingly collect
              personally identifiable information from children under 13.
            </p>

            <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us through our{" "}
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
            title="Related Privacy Information"
            links={[
              {
                title: "Terms of Service",
                href: "/terms",
                description: "Read our terms and conditions for using the YouTube to MP3 converter",
              },
              {
                title: "Cookie Policy",
                href: "/cookies",
                description: "Learn about how we use cookies on our website",
              },
              {
                title: "Copyright Disclaimer",
                href: "/disclaimer",
                description: "Understand our stance on copyright and fair use",
              },
              {
                title: "Contact Us",
                href: "/contact",
                description: "Get in touch with questions about our privacy policy",
              },
            ]}
            keywords={[
              { text: "YouTube to MP3 Privacy", href: "/privacy" },
              { text: "Data Protection", href: "/privacy" },
              { text: "MP3 Converter Privacy", href: "/privacy" },
              { text: "Information Collection", href: "/privacy#2-information-we-collect" },
              { text: "Data Usage Policy", href: "/privacy#3-how-we-use-your-information" },
              { text: "Data Security", href: "/privacy#4-data-security" },
              { text: "Privacy Terms", href: "/privacy" },
              { text: "YouTube Converter Data", href: "/privacy" },
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
                name: "Privacy Policy",
                item: "https://www.ymp3.top/privacy",
              },
            ],
          }),
        }}
      />
    </div>
  )
}
