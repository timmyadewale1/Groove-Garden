import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const videoId = searchParams.get('id')

  if (!videoId) {
    return NextResponse.json({ error: 'Missing video ID' }, { status: 400 })
  }

  try {
    // Fetch the YouTube page to extract metadata from Open Graph tags
    const response = await fetch(`https://www.youtube.com/watch?v=${videoId}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    })

    const html = await response.text()
    
    // Extract Open Graph title
    const titleMatch = html.match(/<meta property="og:title" content="([^"]+)"/)
    const title = titleMatch ? titleMatch[1] : `YouTube Video (${videoId})`
    
    // Extract description
    const descMatch = html.match(/<meta property="og:description" content="([^"]+)"/)
    const description = descMatch ? descMatch[1] : ''

    return NextResponse.json({
      id: videoId,
      title,
      description,
    })
  } catch (error) {
    console.error('Error fetching YouTube metadata:', error)
    return NextResponse.json(
      { error: 'Failed to fetch video metadata' },
      { status: 500 }
    )
  }
}
