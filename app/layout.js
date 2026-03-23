import './globals.css';

export const metadata = {
  metadataBase: new URL('https://pixelforge.vercel.app'),
  title: {
    default: 'PixelForge — Free Online Image Tools | Compress, Resize, Convert',
    template: '%s | PixelForge',
  },
  description: 'Free online image tools — compress, resize, convert, watermark, rotate images instantly in your browser. No uploads to servers. 100% private and free.',
  keywords: [
    'compress image online', 'resize image', 'convert png to jpg',
    'image compressor', 'reduce image size', 'free image tools',
    'online image editor', 'compress jpg', 'resize photo online',
    'png to jpg converter', 'add watermark to image', 'rotate image online',
    'image converter', 'reduce file size', 'compress photo',
    'webp to png', 'jpg to png', 'image resizer',
  ],
  authors: [{ name: 'PixelForge' }],
  creator: 'PixelForge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pixelforge.vercel.app',
    siteName: 'PixelForge',
    title: 'PixelForge — Free Online Image Tools',
    description: 'Compress, resize, convert images instantly in your browser. Free, private, no signup required.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'PixelForge - Free Online Image Tools' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelForge — Free Online Image Tools',
    description: 'Compress, resize, convert images instantly. Free & private.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    // Add your Google Search Console verification code here:
    // google: 'your-verification-code',
  },
};

export default function RootLayout({ children }) {
  // JSON-LD structured data for Google rich results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PixelForge',
    url: 'https://pixelforge.vercel.app',
    description: 'Free online image tools — compress, resize, convert images in your browser.',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Image compression',
      'Image resizing',
      'Format conversion (PNG, JPG, WebP)',
      'Add watermarks',
      'Rotate and flip images',
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://pixelforge.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
