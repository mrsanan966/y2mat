import { Globe, Youtube, Music, Radio, Smartphone } from "lucide-react"
import Link from "next/link"

export default function MusicPlatforms() {
  return (
    <section className="py-16 px-4 bg-white" id="music-platforms" aria-labelledby="music-platforms-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="music-platforms-heading" className="text-3xl font-bold text-center mb-4">
          Music Platforms & Distribution
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Explore the various platforms where music is shared and distributed. Our{" "}
          <Link href="/#hero-heading" className="text-blue-600 hover:underline">
            YouTube to MP3 converter
          </Link>{" "}
          helps you save your favorite music from these platforms for offline listening.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <article className="border rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Youtube className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">YouTube Music</h3>
              </div>
              <p className="text-gray-600 mb-4">
                YouTube hosts millions of music videos, live performances, and user-generated content. It's one of the
                largest music discovery platforms globally.
              </p>
              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Official music videos from artists</li>
                <li>• Live performances and concerts</li>
                <li>• Cover songs and remixes</li>
                <li>• Music tutorials and lessons</li>
                <li>• User-generated music content</li>
              </ul>
              <p className="mt-4 text-sm">
                Convert YouTube videos to MP3 with our{" "}
                <Link href="/#hero-heading" className="text-blue-600 hover:underline">
                  converter
                </Link>
                .
              </p>
            </div>
          </article>

          <article className="border rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Music className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Streaming Services</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Dedicated music streaming platforms offer vast libraries of songs with various subscription models and
                features for discovering new music.
              </p>
              <h4 className="font-medium mb-2">Popular Platforms:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Spotify - Known for playlists and recommendations</li>
                <li>• Apple Music - Integrated with Apple ecosystem</li>
                <li>• Amazon Music - Tied to Prime membership</li>
                <li>• Tidal - Focused on high-quality audio</li>
                <li>• Deezer - Global platform with local content</li>
              </ul>
              <p className="mt-4 text-sm">
                Find{" "}
                <Link href="/#popular-artists" className="text-blue-600 hover:underline">
                  popular artists
                </Link>{" "}
                on these platforms.
              </p>
            </div>
          </article>

          <article className="border rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Independent Platforms</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Platforms that cater to independent artists and specific music communities, often with direct
                artist-to-fan relationships.
              </p>
              <h4 className="font-medium mb-2">Notable Platforms:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Bandcamp - Direct support for artists</li>
                <li>• SoundCloud - Community-focused platform</li>
                <li>• Audiomack - Popular for emerging artists</li>
                <li>• Mixcloud - Specialized in DJ mixes and radio shows</li>
                <li>• DistroKid - Distribution service for independent artists</li>
              </ul>
              <p className="mt-4 text-sm">
                Discover{" "}
                <Link href="/#music-genres" className="text-blue-600 hover:underline">
                  niche genres
                </Link>{" "}
                on these platforms.
              </p>
            </div>
          </article>

          <article className="border rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Smartphone className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Social Media Music</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Social media platforms have become important channels for music discovery, with short-form content and
                viral trends driving popularity.
              </p>
              <h4 className="font-medium mb-2">Key Platforms:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• TikTok - Short clips driving music trends</li>
                <li>• Instagram Reels - Music-focused short videos</li>
                <li>• Snapchat - Music integration in stories</li>
                <li>• Facebook - Music sharing and artist pages</li>
                <li>• Twitter - Music promotion and discussion</li>
              </ul>
              <p className="mt-4 text-sm">
                Follow{" "}
                <Link href="/#trending-topics" className="text-blue-600 hover:underline">
                  trending topics
                </Link>{" "}
                from these platforms.
              </p>
            </div>
          </article>

          <article className="border rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Radio className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Traditional Media</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Despite digital transformation, traditional media channels still play a significant role in music
                distribution and discovery.
              </p>
              <h4 className="font-medium mb-2">Media Channels:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Radio stations - Both terrestrial and internet radio</li>
                <li>• Television - Music channels and performances</li>
                <li>• Film and TV soundtracks - Introducing music to new audiences</li>
                <li>• Live venues - Concerts and performances</li>
                <li>• Physical media - Vinyl, CDs, and cassettes revival</li>
              </ul>
              <p className="mt-4 text-sm">
                Explore{" "}
                <Link href="/#music-decades" className="text-blue-600 hover:underline">
                  music through the decades
                </Link>{" "}
                on these channels.
              </p>
            </div>
          </article>

          <article className="border rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Music className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Emerging Technologies</h3>
              </div>
              <p className="text-gray-600 mb-4">
                New technologies are creating innovative ways for artists to distribute music and connect with fans.
              </p>
              <h4 className="font-medium mb-2">Future Trends:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Web3 music platforms - Blockchain-based ownership</li>
                <li>• NFT music releases - Unique digital collectibles</li>
                <li>• Virtual concerts - Immersive digital performances</li>
                <li>• AI-generated music - New creative possibilities</li>
                <li>• Spatial audio - 3D immersive listening experiences</li>
              </ul>
              <p className="mt-4 text-sm">
                Find the best{" "}
                <Link href="/#music-equipment" className="text-blue-600 hover:underline">
                  audio equipment
                </Link>{" "}
                for these new formats.
              </p>
            </div>
          </article>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            With our{" "}
            <Link href="/#hero-heading" className="text-blue-600 hover:underline">
              YouTube to MP3 converter
            </Link>
            , you can save your favorite music from these platforms for offline listening on your preferred devices.
            Check our{" "}
            <Link href="/#faq" className="text-blue-600 hover:underline">
              FAQ
            </Link>{" "}
            for more information.
          </p>
        </div>
      </div>
    </section>
  )
}
