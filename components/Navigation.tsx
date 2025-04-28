"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <span className="text-white text-2xl font-bold">YMP3</span>
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop navigation */}
      <div className="hidden md:flex gap-6">
        <Link href="/" className="text-white hover:text-blue-100 transition-colors">
          Home
        </Link>
        <Link href="/#music-genres" className="text-white hover:text-blue-100 transition-colors">
          Music Genres
        </Link>
        <Link href="/#popular-artists" className="text-white hover:text-blue-100 transition-colors">
          Artists
        </Link>
        <Link href="/#faq" className="text-white hover:text-blue-100 transition-colors">
          FAQ
        </Link>
        <Link href="/#about" className="text-white hover:text-blue-100 transition-colors">
          About
        </Link>
        <Link href="/contact" className="text-white hover:text-blue-100 transition-colors">
          Contact
        </Link>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-600 z-50 p-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-white hover:text-blue-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#music-genres"
              className="text-white hover:text-blue-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Music Genres
            </Link>
            <Link
              href="/#popular-artists"
              className="text-white hover:text-blue-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Artists
            </Link>
            <Link
              href="/#faq"
              className="text-white hover:text-blue-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/#about"
              className="text-white hover:text-blue-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-blue-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
