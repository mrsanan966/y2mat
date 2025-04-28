import type { Metadata } from "next"
import ContactClient from "./contact-client"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Contact Us - YTMP3 YouTube to MP3 Converter",
  description:
    "Need help with our YouTube to MP3 converter? Contact our support team for assistance with conversions, downloads, or technical issues. We're here to help you get the most out of our free service.",
  keywords: "contact youtube to mp3, youtube converter support, mp3 converter help, youtube to mp3 contact",
  alternates: {
    canonical: "/contact",
  },
}

export default function Contact() {
  const lastModified = new Date().toISOString().split("T")[0] // YYYY-MM-DD format

  return (
    <>
      <ContactClient />

      {/* BreadcrumbList Schema for Contact page */}
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
                name: "Contact",
                item: "https://www.y2mat.xyz/contact",
              },
            ],
          }),
        }}
      />

      {/* WebPage Schema */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Contact YTMP3 - YouTube to MP3 Converter",
            description:
              "Need help with our YouTube to MP3 converter? Contact our support team for assistance with conversions, downloads, or technical issues.",
            url: "https://y2mat.xyz/contact",
            dateModified: lastModified,
            isPartOf: {
              "@type": "WebSite",
              name: "YTMP3",
              url: "https://y2mat.xyz",
            },
          }),
        }}
      />
    </>
  )
}
