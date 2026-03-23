import ConvertClient from './ConvertClient';

export const metadata = {
  title: 'Convert Image Format Online Free — PNG to JPG, WebP Converter',
  description: 'Convert images between PNG, JPG, and WebP formats online for free. Instant format conversion in your browser. No upload to servers — 100% private.',
  keywords: ['convert png to jpg', 'image converter', 'jpg to png', 'webp converter', 'png to webp', 'image format converter'],
  alternates: { canonical: 'https://pixelforge.vercel.app/convert-image' },
  openGraph: {
    title: 'Convert Image Format Online Free — PixelForge',
    description: 'Convert between PNG, JPG, and WebP instantly. Free & private.',
    url: 'https://pixelforge.vercel.app/convert-image',
  },
};

export default function ConvertPage() {
  return <ConvertClient />;
}
