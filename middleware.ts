import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get("host") || ""
  const currentUrl = request.nextUrl.href

  // Check if the request is for the non-www version
  if (hostname === "y2mat.xyz") {
    // Create the www version URL
    const wwwUrl = currentUrl.replace("://y2mat.xyz", "://www.y2mat.xyz")

    // Return a 301 permanent redirect
    return NextResponse.redirect(wwwUrl, 301)
  }

  // Check if the request is for HTTP instead of HTTPS
  if (currentUrl.startsWith("http://")) {
    // Create the HTTPS version URL
    const httpsUrl = currentUrl.replace("http://", "https://")

    // Return a 301 permanent redirect
    return NextResponse.redirect(httpsUrl, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|android-chrome-192x192.png|android-chrome-512x512.png|apple-touch-icon.png|favicon-16x16.png|favicon-32x32.png|site.webmanifest).*)",
  ],
}
