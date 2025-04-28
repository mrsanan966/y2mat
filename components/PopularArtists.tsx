"use client"

import { Music, Award, Mic, Radio } from "lucide-react"
import Link from "next/link"

export default function PopularArtists() {
  return (
    <section className="py-16 px-4 bg-white" id="popular-artists" aria-labelledby="popular-artists-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="popular-artists-heading" className="text-3xl font-bold text-center mb-4">
          Popular Artists & Music Personalities
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Discover trending artists and download their music in MP3 format. Our{" "}
          <Link href="/#hero-heading" className="text-blue-600 hover:underline">
            YouTube to MP3 converter
          </Link>{" "}
          makes it easy to create your personal music collection from your favorite artists.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {popularArtists.map((artist, index) => (
            <article key={index} className="p-6 rounded-lg border hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <Music className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
                  <p className="text-gray-600 mb-3">{artist.description}</p>
                  <p className="text-sm text-gray-500">
                    Popular genres:{" "}
                    <Link href="/#music-genres" className="text-blue-600 hover:underline">
                      {artist.genres}
                    </Link>
                  </p>
                  {artist.famousSongs && (
                    <p className="text-sm text-gray-500 mt-2">
                      <span className="font-medium">Famous songs:</span> {artist.famousSongs}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6">Music Categories by Artist Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Mic className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-medium">Solo Artists</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Pop Vocalists</li>
                <li>• Singer-Songwriters</li>
                <li>• Rap Artists</li>
                <li>• Electronic Music Producers</li>
                <li>• Classical Performers</li>
              </ul>
              <p className="mt-4 text-sm">
                <Link href="/#music-platforms" className="text-blue-600 hover:underline">
                  Discover platforms
                </Link>{" "}
                where these artists share their music.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-medium">Bands & Groups</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Rock Bands</li>
                <li>• Pop Groups</li>
                <li>• Boy/Girl Bands</li>
                <li>• Jazz Ensembles</li>
                <li>• Orchestras & Symphonies</li>
              </ul>
              <p className="mt-4 text-sm">
                Learn about{" "}
                <Link href="/#music-decades" className="text-blue-600 hover:underline">
                  music through the decades
                </Link>{" "}
                from these groups.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Radio className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-medium">Emerging Talent</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Viral TikTok Artists</li>
                <li>• YouTube Musicians</li>
                <li>• Independent Artists</li>
                <li>• Podcast Hosts with Music</li>
                <li>• Soundtrack Composers</li>
              </ul>
              <p className="mt-4 text-sm">
                Check out{" "}
                <Link href="/#trending-topics" className="text-blue-600 hover:underline">
                  trending topics
                </Link>{" "}
                to discover new artists.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Convert your favorite artists' YouTube videos to MP3 format and build your personal music collection. Learn
            about{" "}
            <Link href="/#music-equipment" className="text-blue-600 hover:underline">
              audio equipment
            </Link>{" "}
            to enhance your listening experience.
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

const popularArtists = [
  {
    name: "Taylor Swift",
    description:
      "Known for her narrative songwriting and versatile musical style spanning from country to pop and folk.",
    genres: "Pop, Country, Folk",
    famousSongs: "Anti-Hero, Cruel Summer, Blank Space",
  },
  {
    name: "The Weeknd",
    description: "Renowned for his distinctive sound blending R&B, pop and electronic music with dark undertones.",
    genres: "R&B, Pop, Electronic",
    famousSongs: "Blinding Lights, Save Your Tears, Starboy",
  },
  {
    name: "BTS",
    description: "Global K-pop phenomenon known for their synchronized choreography and socially conscious lyrics.",
    genres: "K-pop, Hip-hop, R&B",
    famousSongs: "Dynamite, Butter, Spring Day",
  },
  {
    name: "Bad Bunny",
    description: "Leading figure in Latin trap and reggaeton who has revolutionized Spanish-language music globally.",
    genres: "Reggaeton, Latin Trap, Urbano",
    famousSongs: "Tití Me Preguntó, Me Porto Bonito, Dakiti",
  },
  {
    name: "Billie Eilish",
    description: "Known for her whispery vocals and genre-bending music that often explores dark themes.",
    genres: "Pop, Electropop, Alternative",
    famousSongs: "bad guy, Happier Than Ever, ocean eyes",
  },
  {
    name: "Drake",
    description: "Versatile artist who seamlessly blends singing and rapping across multiple genres.",
    genres: "Hip-hop, R&B, Pop Rap",
    famousSongs: "God's Plan, One Dance, Hotline Bling",
  },
  {
    name: "Doja Cat",
    description: "Innovative artist known for blending genres and creating viral hits with catchy hooks.",
    genres: "Pop, R&B, Hip-hop",
    famousSongs: "Say So, Kiss Me More, Woman",
  },
  {
    name: "Ed Sheeran",
    description: "Singer-songwriter known for his heartfelt lyrics and acoustic-pop sound that resonates globally.",
    genres: "Pop, Folk-pop, R&B",
    famousSongs: "Shape of You, Perfect, Thinking Out Loud",
  },
  {
    name: "Olivia Rodrigo",
    description: "Rising star who gained fame with emotionally raw songs that connect with younger audiences.",
    genres: "Pop, Alternative, Indie",
    famousSongs: "drivers license, good 4 u, vampire",
  },
]
