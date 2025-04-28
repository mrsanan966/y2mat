import { Clock, Star, Sparkles } from "lucide-react"
import Link from "next/link"

export default function MusicDecades() {
  return (
    <section className="py-16 px-4 bg-white" id="music-decades" aria-labelledby="music-decades-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="music-decades-heading" className="text-3xl font-bold text-center mb-4">
          Music Through the Decades
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Explore iconic music from different eras and convert classic YouTube videos to MP3. From the golden oldies to
          modern hits, our{" "}
          <Link href="/#hero-heading" className="text-blue-600 hover:underline">
            converter
          </Link>{" "}
          helps you build a timeless music collection.
        </p>

        <div className="space-y-12">
          <div>
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold">Classic Eras</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {classicEras.map((era, index) => (
                <article key={index} className="border rounded-lg overflow-hidden">
                  <div className="p-6">
                    <h4 className="text-xl font-medium mb-3">{era.decade}</h4>
                    <p className="text-gray-600 mb-4">{era.description}</p>
                    <div>
                      <h5 className="font-medium mb-2">Iconic Artists:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {era.artists.map((artist, i) => (
                          <li key={i}>• {artist}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="mt-4 text-sm">
                      <Link href="/#popular-artists" className="text-blue-600 hover:underline">
                        Discover more artists
                      </Link>{" "}
                      from this era.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold">Modern Eras</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {modernEras.map((era, index) => (
                <article key={index} className="border rounded-lg overflow-hidden">
                  <div className="p-6">
                    <h4 className="text-xl font-medium mb-3">{era.decade}</h4>
                    <p className="text-gray-600 mb-4">{era.description}</p>
                    <div>
                      <h5 className="font-medium mb-2">Defining Trends:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {era.trends.map((trend, i) => (
                          <li key={i}>• {trend}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="mt-4 text-sm">
                      Explore{" "}
                      <Link href="/#music-genres" className="text-blue-600 hover:underline">
                        music genres
                      </Link>{" "}
                      that emerged during this time.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold">Current & Emerging</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-medium mb-3">2020s & Beyond</h4>
              <p className="text-gray-600 mb-4">
                The 2020s have been defined by genre-blending, the continued rise of streaming platforms, and music
                discovery through social media. Artists are increasingly independent, releasing music directly to fans
                and building communities online.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-medium mb-2">Current Trends:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• TikTok-driven music discovery and viral hits</li>
                    <li>• Genre-fluid artists breaking traditional boundaries</li>
                    <li>• Nostalgic revivals of sounds from previous decades</li>
                    <li>• AI-assisted music creation and production</li>
                    <li>• Immersive audio experiences and spatial sound</li>
                  </ul>
                  <p className="mt-4 text-sm">
                    See{" "}
                    <Link href="/#trending-topics" className="text-blue-600 hover:underline">
                      trending topics
                    </Link>{" "}
                    in today's music.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Rising Movements:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Global fusion incorporating diverse cultural elements</li>
                    <li>• Bedroom pop and DIY production becoming mainstream</li>
                    <li>• Sustainability and eco-consciousness in music</li>
                    <li>• Web3 and blockchain applications for artists</li>
                    <li>• Mental health awareness and vulnerability in lyrics</li>
                  </ul>
                  <p className="mt-4 text-sm">
                    Learn about{" "}
                    <Link href="/#music-platforms" className="text-blue-600 hover:underline">
                      platforms
                    </Link>{" "}
                    where these movements thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-6">
            Use our{" "}
            <Link href="/#hero-heading" className="text-blue-600 hover:underline">
              YouTube to MP3 converter
            </Link>{" "}
            to build a collection spanning all these musical eras. Find the best{" "}
            <Link href="/#music-equipment" className="text-blue-600 hover:underline">
              audio equipment
            </Link>{" "}
            to enjoy your music library.
          </p>
        </div>
      </div>
    </section>
  )
}

const classicEras = [
  {
    decade: "1960s - The Revolutionary Era",
    description:
      "A transformative decade that saw the British Invasion, psychedelic rock, and the birth of many subgenres that would influence music for generations.",
    artists: ["The Beatles", "The Rolling Stones", "Jimi Hendrix", "Aretha Franklin", "Bob Dylan"],
  },
  {
    decade: "1970s - The Diverse Decade",
    description:
      "From disco to punk rock, the 70s embraced musical diversity with the rise of album-oriented rock, funk, and early electronic music.",
    artists: ["Led Zeppelin", "David Bowie", "Donna Summer", "The Ramones", "Fleetwood Mac"],
  },
  {
    decade: "1980s - The Synth Revolution",
    description:
      "Characterized by new wave, synth-pop, and the rise of MTV, the 80s brought visual aesthetics to the forefront of music culture.",
    artists: ["Michael Jackson", "Madonna", "Prince", "Queen", "Whitney Houston"],
  },
]

const modernEras = [
  {
    decade: "1990s - Alternative & Digital",
    description:
      "The 90s saw the mainstream success of alternative rock, grunge, and hip-hop, alongside the early digitization of music production.",
    trends: [
      "Grunge and alternative rock domination",
      "Golden age of hip-hop",
      "Rise of boy bands and girl groups",
      "Electronic dance music entering mainstream",
      "CD format at its peak",
    ],
  },
  {
    decade: "2000s - Digital Revolution",
    description:
      "The 2000s witnessed the shift from physical to digital music consumption, with file sharing, iPods, and the early days of streaming.",
    trends: [
      "MP3 players and digital downloads",
      "Reality TV creating pop stars",
      "Emo and pop-punk popularity",
      "Auto-Tune becoming widespread",
      "Indie music gaining mainstream attention",
    ],
  },
  {
    decade: "2010s - Streaming Era",
    description:
      "Streaming platforms revolutionized music distribution, while trap, EDM, and pop collaborations dominated the charts.",
    trends: [
      "Streaming becoming the primary consumption method",
      "Trap influence in hip-hop and pop",
      "EDM festival culture boom",
      "K-pop global expansion",
      "Social media marketing for artists",
    ],
  },
]
