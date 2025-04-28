"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Dynamically import the YouTubeConverter component with lazy loading
const YouTubeConverter = dynamic(() => import("@/components/YouTubeConverter"), {
  loading: () => <div className="h-32 flex items-center justify-center">Loading converter...</div>,
  ssr: false, // Disable server-side rendering for this component
})

export default function YouTubeConverterWrapper() {
  return (
    <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading converter...</div>}>
      <YouTubeConverter />
    </Suspense>
  )
}
