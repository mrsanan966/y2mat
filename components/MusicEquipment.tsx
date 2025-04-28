import { Headphones, Speaker, Smartphone, Laptop, Disc } from "lucide-react"
import Link from "next/link"

export default function MusicEquipment() {
  return (
    <section className="py-16 px-4 bg-gray-50" id="music-equipment" aria-labelledby="music-equipment-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="music-equipment-heading" className="text-3xl font-bold text-center mb-4">
          Audio Equipment for MP3 Listening
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Discover the best devices and equipment to enjoy your MP3 files converted from YouTube. From headphones to
          speakers, find the perfect setup for your{" "}
          <Link href="/#hero-heading" className="text-blue-600 hover:underline">
            YouTube to MP3
          </Link>{" "}
          music experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Headphones className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Headphones & Earbuds</h3>
            <p className="text-gray-600 mb-4">
              Personal audio devices that deliver your MP3 music directly to your ears with varying levels of sound
              quality, noise isolation, and comfort.
            </p>
            <h4 className="font-medium mb-2">Popular Types:</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>
                • <span className="font-medium">Over-ear headphones</span> - Full-sized with maximum sound quality
              </li>
              <li>
                • <span className="font-medium">On-ear headphones</span> - Compact with good sound isolation
              </li>
              <li>
                • <span className="font-medium">In-ear monitors (IEMs)</span> - Professional-grade earbuds
              </li>
              <li>
                • <span className="font-medium">True wireless earbuds</span> - Completely wire-free convenience
              </li>
              <li>
                • <span className="font-medium">Bone conduction</span> - For awareness of surroundings
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              Perfect for listening to{" "}
              <Link href="/#popular-artists" className="text-blue-600 hover:underline">
                popular artists
              </Link>{" "}
              you've converted to MP3.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Speaker className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Speakers & Sound Systems</h3>
            <p className="text-gray-600 mb-4">
              Fill your space with music from your MP3 collection with various speaker options ranging from portable to
              high-fidelity systems.
            </p>
            <h4 className="font-medium mb-2">Speaker Options:</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>
                • <span className="font-medium">Bluetooth speakers</span> - Portable and wireless convenience
              </li>
              <li>
                • <span className="font-medium">Smart speakers</span> - Voice-controlled with streaming capabilities
              </li>
              <li>
                • <span className="font-medium">Bookshelf speakers</span> - Compact with quality sound for small spaces
              </li>
              <li>
                • <span className="font-medium">Soundbars</span> - Space-efficient for TV and music
              </li>
              <li>
                • <span className="font-medium">Hi-Fi systems</span> - Premium audio quality for enthusiasts
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              Great for enjoying{" "}
              <Link href="/#music-genres" className="text-blue-600 hover:underline">
                different music genres
              </Link>{" "}
              in your collection.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Smartphone className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Mobile Devices</h3>
            <p className="text-gray-600 mb-4">
              Smartphones and dedicated music players that let you take your MP3 library anywhere with varying storage
              capacities and audio quality.
            </p>
            <h4 className="font-medium mb-2">Device Types:</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>
                • <span className="font-medium">Smartphones</span> - All-in-one convenience for casual listening
              </li>
              <li>
                • <span className="font-medium">Dedicated MP3 players</span> - Focused on music with better battery life
              </li>
              <li>
                • <span className="font-medium">Hi-Res audio players</span> - Premium sound quality for audiophiles
              </li>
              <li>
                • <span className="font-medium">Tablets</span> - Larger screens for music management
              </li>
              <li>
                • <span className="font-medium">Smartwatches</span> - Ultra-portable for exercise
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              Perfect for listening to{" "}
              <Link href="/#trending-topics" className="text-blue-600 hover:underline">
                trending music
              </Link>{" "}
              on the go.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Laptop className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Computers & Software</h3>
            <p className="text-gray-600 mb-4">
              Desktop and laptop computers offer powerful platforms for organizing, editing, and playing your MP3
              collection with specialized software.
            </p>
            <h4 className="font-medium mb-2">Software Solutions:</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>
                • <span className="font-medium">Media players</span> - Dedicated software for music playback
              </li>
              <li>
                • <span className="font-medium">Music libraries</span> - Organize and manage your MP3 collection
              </li>
              <li>
                • <span className="font-medium">Audio editors</span> - Modify and enhance your MP3 files
              </li>
              <li>
                • <span className="font-medium">Streaming apps</span> - Combine local MP3s with streaming services
              </li>
              <li>
                • <span className="font-medium">DJ software</span> - Mix and create playlists from your MP3s
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              Learn about{" "}
              <Link href="/#music-platforms" className="text-blue-600 hover:underline">
                music platforms
              </Link>{" "}
              that integrate with these tools.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Disc className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Accessories & Enhancements</h3>
            <p className="text-gray-600 mb-4">
              Additional equipment to improve your MP3 listening experience, from DACs to amplifiers and specialized
              cables.
            </p>
            <h4 className="font-medium mb-2">Audio Enhancements:</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>
                • <span className="font-medium">Digital-to-Analog Converters (DACs)</span> - Improve digital audio
                quality
              </li>
              <li>
                • <span className="font-medium">Headphone amplifiers</span> - Drive high-impedance headphones
              </li>
              <li>
                • <span className="font-medium">Equalizers</span> - Customize frequency response
              </li>
              <li>
                • <span className="font-medium">Audio interfaces</span> - Professional connections for equipment
              </li>
              <li>
                • <span className="font-medium">Bluetooth transmitters</span> - Add wireless capability to wired devices
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              Perfect for enjoying{" "}
              <Link href="/#music-decades" className="text-blue-600 hover:underline">
                music from different decades
              </Link>{" "}
              with enhanced quality.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            After converting YouTube videos to MP3 with our{" "}
            <Link href="/#hero-heading" className="text-blue-600 hover:underline">
              converter tool
            </Link>
            , enjoy your music on any of these devices for the best listening experience.
          </p>
        </div>
      </div>
    </section>
  )
}
