import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Ann Yu — Product Manager'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  // Fetch Playfair Display bold from Google Fonts at request time
  let fontData: ArrayBuffer | null = null
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700',
      {
        headers: {
          // Request the legacy CSS1 format so satori gets a usable font URL
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
      }
    ).then((res) => res.text())

    const fontUrl = css.match(
      /url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/
    )?.[1]

    if (fontUrl) {
      fontData = await fetch(fontUrl).then((res) => res.arrayBuffer())
    }
  } catch {
    // Falls back to Georgia / serif below
  }

  const serif = fontData ? 'Playfair Display' : 'Georgia, serif'

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          background: '#111110',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Primary blue orb — top-right, mirrors the hero */}
        <div
          style={{
            position: 'absolute',
            top: '-140px',
            right: '-140px',
            width: '640px',
            height: '640px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.30) 0%, rgba(59,130,246,0.10) 45%, transparent 70%)',
          }}
        />

        {/* Secondary soft glow — bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(123,147,255,0.12) 0%, transparent 65%)',
          }}
        />

        {/* Subtle bottom border line */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '1px',
            background:
              'linear-gradient(to right, transparent, rgba(123,147,255,0.4), transparent)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '96px',
            paddingRight: '96px',
            maxWidth: '860px',
          }}
        >
          {/* Name — small label above headline */}
          <div
            style={{
              fontFamily: serif,
              fontSize: '18px',
              fontWeight: 700,
              color: '#7B93FF',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}
          >
            Ann Yu
          </div>

          {/* Headline */}
          <div
            style={{
              fontFamily: serif,
              fontSize: '40px',
              fontWeight: 700,
              color: '#F0EDE8',
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
              marginBottom: '36px',
            }}
          >
            {"I'm Ann, a former healthcare professional now applying systems thinking to Product Management, to empower and engage."}
          </div>

          {/* Domain subtext */}
          <div
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '17px',
              fontWeight: 400,
              color: '#6B6762',
              letterSpacing: '0.06em',
            }}
          >
            ann-yu.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [
            {
              name: 'Playfair Display',
              data: fontData,
              weight: 700,
              style: 'normal',
            },
          ]
        : [],
    }
  )
}
