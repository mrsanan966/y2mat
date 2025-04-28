import Link from "next/link"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import BreadcrumbNav from "@/components/BreadcrumbNav"
// Removed SecondaryNavigation import

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#0066FF]">
        <Navigation />
        {/* Removed SecondaryNavigation component */}
        <BreadcrumbNav items={[{ label: "Not Found", href: "#", isCurrent: true }]} />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-center">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="bg-[#0066FF] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Return to Home
        </Link>
      </main>

      <Footer />
    </div>
  )
}
