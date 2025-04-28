import type { Metadata } from "next"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import BreadcrumbNav from "@/components/BreadcrumbNav"
import RelatedContent from "@/components/RelatedContent"
import Script from "next/script"
// Removed SecondaryNavigation import

export const metadata: Metadata = {
  title: "Cookie Policy - YTMP3 YouTube to MP3 Converter",
  description:
    "Read the Cookie Policy for YTMP3, the free YouTube to MP3 converter. Learn how we use cookies and similar technologies when you use our service.",
  keywords:
    "cookie policy, youtube to mp3 cookies, mp3 converter cookies, tracking technologies, youtube converter cookies",
  alternates: {
    canonical: "/cookies",
  },
}

export default function CookiePolicy() {
  const lastModified = new Date().toISOString().split("T")[0] // YYYY-MM-DD format

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-[#0066FF]">
        <Navigation />
        {/* Removed SecondaryNavigation component */}
        <BreadcrumbNav items={[{ label: "Cookie Policy", href: "/cookies", isCurrent: true }]} />
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
          Cookie Policy | YTMP3 YouTube to MP3 Converter
        </h1>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">Last Updated: {lastModified}</p>

            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              This Cookie Policy explains how YTMP3 ("we", "us", or "our") uses cookies and similar technologies on our
              YouTube to MP3 converter website. By using our website, you consent to the use of cookies as described in
              this policy.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used
              to make websites work more efficiently and provide information to the website owners. Cookies can be
              "persistent" or "session" cookies.
            </p>

            <h2 className="text-2xl font-semibold mb-4">3. How We Use Cookies</h2>
            <p className="mb-4">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and
                cannot be switched off in our systems.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we
                can measure and improve the performance of our site.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced
                functionality and personalization.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising
                partners to build a profile of your interests.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">4. Types of Cookies We Use</h2>
            <p className="mb-4">The specific types of cookies we use include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Session Cookies:</strong> These temporary cookies expire when you close your browser.
              </li>
              <li>
                <strong>Persistent Cookies:</strong> These remain on your device until they expire or you delete them.
              </li>
              <li>
                <strong>First-Party Cookies:</strong> These are set by our website directly.
              </li>
              <li>
                <strong>Third-Party Cookies:</strong> These are set by third parties, such as analytics providers and
                advertising networks.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">5. Managing Cookies</h2>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings. You can usually find these settings
              in the "Options" or "Preferences" menu of your browser. You can:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Delete all cookies</li>
              <li>Block all cookies</li>
              <li>Allow all cookies</li>
              <li>Block third-party cookies</li>
              <li>Clear all cookies when you close the browser</li>
              <li>Open a "private browsing" / "incognito" session</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">6. Changes to This Cookie Policy</h2>
            <p className="mb-4">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
              Cookie Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our Cookie Policy, please contact us through our{" "}
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
            title="Related Cookie Information"
            links={[
              {
                title: "Privacy Policy",
                href: "/privacy",
                description: "Learn how we handle your data when using our service",
              },
              {
                title: "Terms of Service",
                href: "/terms",
                description: "Read our terms and conditions for using the converter",
              },
              {
                title: "Copyright Disclaimer",
                href: "/disclaimer",
                description: "Understand our stance on copyright and fair use",
              },
              {
                title: "Contact Us",
                href: "/contact",
                description: "Get in touch with questions about our cookie policy",
              },
            ]}
            keywords={[
              { text: "YouTube to MP3 Cookies", href: "/cookies" },
              { text: "Cookie Management", href: "/cookies#5-managing-cookies" },
              { text: "MP3 Converter Tracking", href: "/cookies" },
              { text: "Types of Cookies", href: "/cookies#4-types-of-cookies-we-use" },
              { text: "Cookie Usage", href: "/cookies#3-how-we-use-cookies" },
              { text: "Browser Settings", href: "/cookies#5-managing-cookies" },
              { text: "Data Collection", href: "/cookies" },
              { text: "YouTube Converter Privacy", href: "/cookies" },
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
                name: "Cookie Policy",
                item: "https://www.y2mat.xyz/cookies",
              },
            ],
          }),
        }}
      />
    </div>
  )
}
