import Link from "next/link"
import { Tag } from "lucide-react"

interface RelatedLink {
  title: string
  href: string
  description?: string
}

interface RelatedKeyword {
  text: string
  href: string
}

interface RelatedContentProps {
  title?: string
  links: RelatedLink[]
  keywords: RelatedKeyword[]
}

export default function RelatedContent({ title = "Related Content", links, keywords }: RelatedContentProps) {
  return (
    <section className="py-8 px-4 bg-gray-50 rounded-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>

        {links.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">You might also be interested in:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {links.map((link, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
                  <Link href={link.href} className="text-blue-600 hover:underline font-medium">
                    {link.title}
                  </Link>
                  {link.description && <p className="text-gray-600 text-sm mt-1">{link.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {keywords.length > 0 && (
          <div>
            <div className="flex items-center mb-4">
              <Tag className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Related Keywords:</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <Link
                  key={index}
                  href={keyword.href}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
                >
                  {keyword.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
