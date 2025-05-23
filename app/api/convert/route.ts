import { NextResponse } from "next/server"
import axios from "axios"

// Simple in-memory cache
const cache: { [key: string]: { data: any; timestamp: number } } = {}
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

const getDownloadUrl = async (videoUrl: string) => {
  const options = {
    method: "GET",
    url: "https://youtube-mp310.p.rapidapi.com/download/mp3",
    params: {
      url: videoUrl,
    },
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.RAPIDAPI_HOST || "youtube-mp310.p.rapidapi.com",
    },
  }

  try {
    // Fetch the MP3 download information (including downloadUrl)
    const response = await axios.request(options)
    const { downloadUrl } = response.data

    console.log("First response received, download URL:", downloadUrl)
    return downloadUrl
  } catch (error) {
    console.error("Error fetching download URL:", error.message)
    throw error
  }
}

export async function POST(req: Request) {
  console.log("Received POST request to /api/convert")
  try {
    const { videoId } = await req.json()
    console.log("Received conversion request for video ID:", videoId)

    if (!videoId) {
      console.error("Video ID is missing")
      return NextResponse.json({ error: "Video ID is required" }, { status: 400 })
    }

    // Check cache
    if (cache[videoId] && Date.now() - cache[videoId].timestamp < CACHE_DURATION) {
      console.log("Returning cached result for video ID:", videoId)
      return NextResponse.json(cache[videoId].data)
    }

    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`
    const downloadUrl = await getDownloadUrl(videoUrl)

    const responseData = {
      link: downloadUrl,
      status: "completed",
      message: "Conversion complete. You can now download your MP3.",
    }

    // Cache the result
    cache[videoId] = { data: responseData, timestamp: Date.now() }

    return NextResponse.json(responseData)
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}
