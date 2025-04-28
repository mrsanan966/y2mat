import { Search, Download, Music } from "lucide-react"
import Link from "next/link"

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-gray-50" id="how-it-works" aria-labelledby="how-it-works-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="how-it-works-heading" className="text-3xl font-bold text-center mb-12">
          How to Convert YouTube to MP3
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <article className="flex flex-col items-center">
            <Search className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Find Your YouTube Video</h3>
            <p className="text-gray-600">
              Copy the YouTube video or Shorts URL you want to convert to MP3. Find videos from{" "}
              <Link href="/#popular-artists" className="text-blue-600 hover:underline">
                popular artists
              </Link>{" "}
              or{" "}
              <Link href="/#trending-topics" className="text-blue-600 hover:underline">
                trending topics
              </Link>
              .
            </p>
          </article>
          <article className="flex flex-col items-center">
            <Download className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Convert YouTube to MP3</h3>
            <p className="text-gray-600">
              Paste the URL in our{" "}
              <Link href="/#hero-heading" className="text-blue-600 hover:underline">
                converter
              </Link>{" "}
              and click the convert button to extract MP3 audio from any{" "}
              <Link href="/#music-genres" className="text-blue-600 hover:underline">
                music genre
              </Link>
              .
            </p>
          </article>
          <article className="flex flex-col items-center">
            <Music className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enjoy Your MP3 Audio</h3>
            <p className="text-gray-600">
              Download and listen to your MP3 file from YouTube anywhere, anytime. Use with any{" "}
              <Link href="/#music-equipment" className="text-blue-600 hover:underline">
                audio equipment
              </Link>{" "}
              for the best experience.
            </p>
          </article>
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Still have questions? Check our{" "}
            <Link href="/#faq" className="text-blue-600 hover:underline">
              FAQ section
            </Link>{" "}
            for more information.
          </p>
        </div>
      </div>
    </section>
  )
}
