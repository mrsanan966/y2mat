import { TrendingUp, Zap, Bookmark } from "lucide-react"
import Link from "next/link"

export default function TrendingTopics() {
  return (
    <section className="py-16 px-4 bg-white" id="trending-topics" aria-labelledby="trending-topics-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="trending-topics-heading" className="text-3xl font-bold text-center mb-4">
          Trending Music Topics
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Stay updated with the latest music trends and convert trending YouTube videos to MP3 format. Our{" "}
          <Link href="/#hero-heading" className="text-blue-600 hover:underline">
            converter
          </Link>{" "}
          helps you keep up with viral music content.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <article className="border rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Viral TikTok Songs</h3>
              </div>
              <p className="text-gray-600 mb-4">
                The latest songs going viral on TikTok that you can convert to MP3 using our{" "}
                <Link href="/#hero-heading" className="text-blue-600 hover:underline">
                  YouTube converter
                </Link>
                . Perfect for creating your own TikTok content.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Trending dance challenges</li>
                <li>• Viral sound clips</li>
                <li>• Popular remix versions</li>
              </ul>
              <p className="mt-4 text-sm">
                Find the best{" "}
                <Link href="/#music-equipment" className="text-blue-600 hover:underline">
                  mobile devices
                </Link>{" "}
                for TikTok music.
              </p>
            </div>
          </article>

          <article className="border rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">New Music Releases</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Stay updated with the newest music releases from your favorite artists. Convert the latest YouTube music
                videos to MP3 format.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Weekly new releases</li>
                <li>• Album drops and singles</li>
                <li>• Exclusive premieres</li>
              </ul>
              <p className="mt-4 text-sm">
                Discover{" "}
                <Link href="/#popular-artists" className="text-blue-600 hover:underline">
                  popular artists
                </Link>{" "}
                with recent releases.
              </p>
            </div>
          </article>

          <article className="border rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Bookmark className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Music for Content Creators</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Find and convert background music for your videos, podcasts, and other content. Our{" "}
                <Link href="/#hero-heading" className="text-blue-600 hover:underline">
                  YouTube to MP3 converter
                </Link>{" "}
                makes it easy.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Royalty-free background music</li>
                <li>• Podcast intro/outro sounds</li>
                <li>• Sound effects and ambience</li>
              </ul>
              <p className="mt-4 text-sm">
                Explore{" "}
                <Link href="/#music-genres" className="text-blue-600 hover:underline">
                  music genres
                </Link>{" "}
                perfect for content creation.
              </p>
            </div>
          </article>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-6">
            Keep up with the latest music trends by using our{" "}
            <Link href="/#hero-heading" className="text-blue-600 hover:underline">
              YouTube to MP3 converter
            </Link>
            . Check our{" "}
            <Link href="/#faq" className="text-blue-600 hover:underline">
              FAQ section
            </Link>{" "}
            for more information on how to convert trending music.
          </p>
        </div>
      </div>
    </section>
  )
}
