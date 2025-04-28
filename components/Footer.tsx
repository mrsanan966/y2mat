import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <img src="/android-chrome-192x192.png" alt="YMP3 Logo" className="h-10 w-10 mr-2" />
                <span className="text-blue-600 text-2xl font-bold">YMP3</span>
              </div>
            </Link>
          </div>
          <p className="mt-2 text-gray-600">Convert YouTube videos to MP3 easily and for free.</p>
          <div className="mt-4">
            <Link
              href="/#hero-heading"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Convert Now
            </Link>
          </div>
        </div>

        <nav className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Music Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/#popular-artists" className="text-gray-600 hover:text-blue-600 transition-colors">
                Popular Artists
              </Link>
            </li>
            <li>
              <Link href="/#music-genres" className="text-gray-600 hover:text-blue-600 transition-colors">
                Music Genres
              </Link>
            </li>
            <li>
              <Link href="/#music-decades" className="text-gray-600 hover:text-blue-600 transition-colors">
                Music Through Decades
              </Link>
            </li>
            <li>
              <Link href="/#music-equipment" className="text-gray-600 hover:text-blue-600 transition-colors">
                Audio Equipment
              </Link>
            </li>
            <li>
              <Link href="/#music-platforms" className="text-gray-600 hover:text-blue-600 transition-colors">
                Music Platforms
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-gray-600 hover:text-blue-600 transition-colors">
                Copyright Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-gray-600 hover:text-blue-600 transition-colors">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/sitemap-page" className="text-gray-600 hover:text-blue-600 transition-colors">
                Sitemap
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} YTMP3 - YouTube to MP3 Converter. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/#popular-artists" className="text-gray-500 hover:text-blue-600 text-sm">
              Artists
            </Link>
            <Link href="/#music-genres" className="text-gray-500 hover:text-blue-600 text-sm">
              Genres
            </Link>
            <Link href="/#trending-topics" className="text-gray-500 hover:text-blue-600 text-sm">
              Trends
            </Link>
            <Link href="/sitemap-page" className="text-gray-500 hover:text-blue-600 text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
