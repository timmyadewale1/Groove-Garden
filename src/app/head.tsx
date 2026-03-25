const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://groovegardenhq.vercel.app'

const TITLE = 'Groove Garden - Groove Till Sunrise, Oye-Ekiti'
const DESCRIPTION =
  "Groove Garden - Oye-Ekiti's premier nightlife experience. Every Monday, groove till sunrise."
const OG_IMAGE = `${SITE_URL}/banners/Groove-Garden-PNG-shadow.png`

export default function Head() {
  return (
    <>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={SITE_URL} />
      <link rel="icon" href={`${SITE_URL}/icon.png`} sizes="any" />
      <link rel="apple-touch-icon" href={`${SITE_URL}/apple-icon.png`} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:site_name" content="Groove Garden" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:secure_url" content={OG_IMAGE} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:type" content="image/png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </>
  )
}
