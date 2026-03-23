import CompressClient from './CompressClient';

export const metadata = {
  title: 'Compress Image Online Free — Reduce Image Size Instantly',
  description: 'Compress JPG, PNG, WebP images online for free. Reduce image file size by up to 90% without losing quality. No upload to servers — 100% private browser processing.',
  keywords: ['compress image', 'image compressor', 'reduce image size', 'compress jpg online', 'compress png', 'reduce file size', 'image compression tool'],
  alternates: { canonical: 'https://pixelforge.vercel.app/compress-image' },
  openGraph: {
    title: 'Compress Image Online Free — PixelForge',
    description: 'Reduce image file size by up to 90% without losing quality. Free, instant, private.',
    url: 'https://pixelforge.vercel.app/compress-image',
  },
};

export default function CompressPage() {
  return <CompressClient />;
}
