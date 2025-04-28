"use client"

import { Headphones, Radio, Disc, Globe, Guitar, Piano } from "lucide-react"
import Link from "next/link"

export default function MusicGenres() {
  return (
    <section className="py-16 px-4 bg-gray-50" id="music-genres" aria-labelledby="music-genres-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="music-genres-heading" className="text-3xl font-bold text-center mb-4">
          Explore Music Genres
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Discover and download music from various genres using our{" "}
          <Link href="/#hero-heading" className="text-blue-600 hover:underline">
            YouTube to MP3 converter
          </Link>
          . From classical to electronic, find and convert your favorite music styles.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Headphones className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Popular Music</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                • <span className="font-medium">Pop & Contemporary</span> - Catchy melodies with mass appeal
              </li>
              <li>
                • <span className="font-medium">Rock & Alternative</span> - Guitar-driven with various subgenres
              </li>
              <li>
                • <span className="font-medium">Hip-Hop & Rap</span> - Rhythmic vocals over beats
              </li>
              <li>
                • <span className="font-medium">R&B & Soul</span> - Emotional vocals with rhythm and blues roots
              </li>
              <li>
                • <span className="font-medium">Country & Folk</span> - Storytelling with traditional instruments
              </li>
            </ul>
            <p className="mt-4 text-sm">
              Find{" "}
              <Link href="/#popular-artists" className="text-blue-600 hover:underline">
                popular artists
              </Link>{" "}
              in these genres.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Radio className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Electronic Music</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                • <span className="font-medium">EDM & Dance</span> - High-energy beats for clubs and festivals
              </li>
              <li>
                • <span className="font-medium">House & Techno</span> - Repetitive beats with electronic sounds
              </li>
              <li>
                • <span className="font-medium">Trance & Ambient</span> - Atmospheric with layered synthesizers
              </li>
              <li>
                • <span className="font-medium">Dubstep & Drum and Bass</span> - Heavy bass with complex rhythms
              </li>
              <li>
                • <span className="font-medium">Lo-fi & Chillhop</span> - Relaxed beats with jazz influences
              </li>
            </ul>
            <p className="mt-4 text-sm">
              Check out{" "}
              <Link href="/#trending-topics" className="text-blue-600 hover:underline">
                trending topics
              </Link>{" "}
              in electronic music.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Disc className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">World Music</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                • <span className="font-medium">Latin & Reggaeton</span> - Spanish-language with danceable rhythms
              </li>
              <li>
                • <span className="font-medium">K-pop & J-pop</span> - Korean and Japanese pop music
              </li>
              <li>
                • <span className="font-medium">Afrobeats & Amapiano</span> - African rhythms with modern production
              </li>
              <li>
                • <span className="font-medium">Indian & Bollywood</span> - Traditional and film music from India
              </li>
              <li>
                • <span className="font-medium">Arabic & Middle Eastern</span> - Distinctive scales and instruments
              </li>
            </ul>
            <p className="mt-4 text-sm">
              Explore{" "}
              <Link href="/#music-platforms" className="text-blue-600 hover:underline">
                music platforms
              </Link>{" "}
              featuring world music.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Piano className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Classical & Instrumental</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                • <span className="font-medium">Classical Orchestra</span> - Traditional European art music
              </li>
              <li>
                • <span className="font-medium">Piano Compositions</span> - Solo piano works across eras
              </li>
              <li>
                • <span className="font-medium">Film Scores</span> - Orchestral music from movies
              </li>
              <li>
                • <span className="font-medium">Modern Classical</span> - Contemporary classical compositions
              </li>
              <li>
                • <span className="font-medium">Instrumental Covers</span> - Popular songs without vocals
              </li>
            </ul>
            <p className="mt-4 text-sm">
              Learn about{" "}
              <Link href="/#music-decades" className="text-blue-600 hover:underline">
                classical music through the decades
              </Link>
              .
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Guitar className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Alternative & Indie</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                • <span className="font-medium">Indie Rock</span> - Independent rock with unique sounds
              </li>
              <li>
                • <span className="font-medium">Alternative Pop</span> - Pop music with experimental elements
              </li>
              <li>
                • <span className="font-medium">Indie Folk</span> - Acoustic-driven with personal lyrics
              </li>
              <li>
                • <span className="font-medium">Punk & Hardcore</span> - Fast-paced with rebellious themes
              </li>
              <li>
                • <span className="font-medium">Experimental</span> - Pushing boundaries of conventional music
              </li>
            </ul>
            <p className="mt-4 text-sm">
              Find{" "}
              <Link href="/#popular-artists" className="text-blue-600 hover:underline">
                indie artists
              </Link>{" "}
              to add to your collection.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Globe className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Niche & Emerging</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                • <span className="font-medium">Hyperpop</span> - Exaggerated pop with digital elements
              </li>
              <li>
                • <span className="font-medium">Phonk</span> - Memphis rap samples with cowbell rhythms
              </li>
              <li>
                • <span className="font-medium">Vaporwave</span> - Nostalgic sounds with slowed samples
              </li>
              <li>
                • <span className="font-medium">Bedroom Pop</span> - DIY pop music with intimate production
              </li>
              <li>
                • <span className="font-medium">Drill</span> - Trap-influenced with dark themes
              </li>
            </ul>
            <p className="mt-4 text-sm">
              Discover{" "}
              <Link href="/#trending-topics" className="text-blue-600 hover:underline">
                emerging music trends
              </Link>{" "}
              in these genres.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Convert music from any genre on YouTube to MP3 format with our easy-to-use converter. Find the best{" "}
            <Link href="/#music-equipment" className="text-blue-600 hover:underline">
              audio equipment
            </Link>{" "}
            to enjoy your music.
          </p>
          <Link href="#hero-heading" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            Try our YouTube to MP3 converter
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
