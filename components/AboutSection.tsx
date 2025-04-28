import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-white" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="about-heading" className="text-3xl font-bold text-center mb-8">
          About Our YouTube to MP3 Converter
        </h2>
        <div className="space-y-6 text-gray-700">
          <p>
            YMP3 is your ultimate destination for converting YouTube videos to high-quality MP3 format. Our cutting-edge{" "}
            <Link href="/#hero-heading" className="text-blue-600 hover:underline">
              YouTube to MP3 converter
            </Link>{" "}
            offers a seamless, user-friendly experience for extracting premium audio from your favorite YouTube content,
            catering to music aficionados, podcast enthusiasts, and content creators alike.
          </p>
          <p>
            Whether you're curating a personal music playlist from{" "}
            <Link href="/#popular-artists" className="text-blue-600 hover:underline">
              popular artists
            </Link>
            , archiving a podcast for offline listening, or sourcing audio for educational purposes, our YouTube to MP3
            converter delivers fast, reliable conversion services entirely free of charge. Our state-of-the-art
            technology guarantees the highest quality MP3 audio output while preserving the original sound fidelity from
            YouTube videos.
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Key Features of Our YouTube to MP3 Converter:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Lightning-fast YouTube to MP3 conversion speed for rapid downloads - see our{" "}
              <Link href="/#features" className="text-blue-600 hover:underline">
                features
              </Link>
            </li>
            <li>
              Premium MP3 audio quality with bitrates up to 320kbps - perfect for all{" "}
              <Link href="/#music-genres" className="text-blue-600 hover:underline">
                music genres
              </Link>
            </li>
            <li>No registration required - start converting YouTube videos to MP3 instantly</li>
            <li>
              Cross-platform compatibility - our YouTube to MP3 converter works on{" "}
              <Link href="/#music-equipment" className="text-blue-600 hover:underline">
                desktop, tablet, and mobile devices
              </Link>
            </li>
            <li>Secure and private conversion process to safeguard your data</li>
            <li>24/7 availability for round-the-clock YouTube to MP3 conversion</li>
            <li>
              Support for YouTube Shorts conversion to MP3 format - great for{" "}
              <Link href="/#trending-topics" className="text-blue-600 hover:underline">
                trending music
              </Link>
            </li>
            <li>
              Simple interface designed for ease of use - learn{" "}
              <Link href="/#how-it-works" className="text-blue-600 hover:underline">
                how it works
              </Link>
            </li>
          </ul>
          <p className="mt-6">
            Have questions? Check our{" "}
            <Link href="/#faq" className="text-blue-600 hover:underline">
              FAQ section
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              contact us
            </Link>{" "}
            for assistance.
          </p>
        </div>
      </div>
    </section>
  )
}
