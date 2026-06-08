import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = "I'm Ann, a former healthcare professional now applying systems thinking to Product Management, to empower and engage."
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Fetch a single Google Fonts variant and return its binary data
async function loadFont(cssUrl: string): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(cssUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    }).then((r) => r.text())
    const url = css.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)?.[1]
    return url ? fetch(url).then((r) => r.arrayBuffer()) : null
  } catch {
    return null
  }
}

export default async function Image() {
  // Load both weights in parallel
  const [semiboldData, blackItalicData] = await Promise.all([
    loadFont('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600'),
    loadFont('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900'),
  ])

  const fonts: {
    name: string
    data: ArrayBuffer
    weight: 400 | 600 | 700 | 800 | 900
    style: 'normal' | 'italic'
  }[] = [
    ...(semiboldData
      ? [{ name: 'Playfair Display', data: semiboldData, weight: 600 as const, style: 'normal' as const }]
      : []),
    ...(blackItalicData
      ? [{ name: 'Playfair Display', data: blackItalicData, weight: 900 as const, style: 'italic' as const }]
      : []),
  ]

  // ── Shared style tokens ──────────────────────────────────────────
  const FS = 58 // headline font size
  const LH = 1.1 // line height
  const LS = '-0.025em' // letter spacing (tracking-tight)

  const base = {
    fontFamily: 'Playfair Display',
    fontSize: `${FS}px`,
    lineHeight: LH,
    letterSpacing: LS,
    color: '#1A1A1A',
  }

  const reg = { ...base, fontWeight: 600, fontStyle: 'normal' } as const
  const em = { ...base, fontWeight: 900, fontStyle: 'italic' } as const

  // ── Row helper (each manual line) ────────────────────────────────
  const row = { display: 'flex', alignItems: 'baseline' } as const

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          background: '#F9F8F6',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── Blue orb — top-left corner, replicating the hero blur orb ── */}
        {/*    satori has no filter:blur, so we fake it with a wide radial  */}
        <div
          style={{
            position: 'absolute',
            top: '-240px',
            left: '-240px',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(192,214,245,0.88) 0%, rgba(192,214,245,0.55) 35%, rgba(192,214,245,0.18) 60%, transparent 78%)',
          }}
        />

        {/* ── Main content ─────────────────────────────────────────────── */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '88px',
            paddingTop: '80px',
          }}
        >
          {/* ── Headline — hard-coded line breaks to match the hero ───── */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0px',
              marginBottom: '38px',
            }}
          >
            {/* Line 1 */}
            <div style={row}>
              <span style={reg}>{"I'm Ann, a former"}</span>
            </div>

            {/* Line 2 */}
            <div style={row}>
              <span style={reg}>{'healthcare professional'}</span>
            </div>

            {/* Line 3: normal + [systems ← italic starts] */}
            <div style={row}>
              <span style={reg}>{'now applying '}</span>
              <span style={em}>{'systems'}</span>
            </div>

            {/* Line 4: [thinking] + normal + [Product ← italic continues] */}
            <div style={row}>
              <span style={em}>{'thinking'}</span>
              <span style={reg}>{' to '}</span>
              <span style={em}>{'Product'}</span>
            </div>

            {/* Line 5: [Management,] + normal */}
            <div style={row}>
              <span style={em}>{'Management,'}</span>
              <span style={reg}>{' to'}</span>
            </div>

            {/* Line 6: all italic */}
            <div style={row}>
              <span style={em}>{'empower and engage.'}</span>
            </div>
          </div>

          {/* ── Subtext ──────────────────────────────────────────────── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              color: '#666666',
              letterSpacing: '0.01em',
            }}
          >
            <span>{'2+ years in healthcare management'}</span>
            <span style={{ margin: '0 12px', color: '#999999' }}>{'•'}</span>
            <span>{'Currently a grad student @ UC Berkeley'}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  )
}
