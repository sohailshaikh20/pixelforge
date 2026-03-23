import WatermarkClient from './WatermarkClient';

export const metadata = {
  title: 'Add Watermark to Image Online Free — Protect Your Photos',
  description: 'Add text watermarks to images online for free. Protect your photos and artwork with custom watermarks. No upload to servers — 100% private browser processing.',
  keywords: ['add watermark', 'watermark image', 'watermark photo online', 'text watermark', 'protect images', 'watermark tool free'],
  alternates: { canonical: 'https://pixelforge.vercel.app/add-watermark' },
  openGraph: {
    title: 'Add Watermark to Image Online Free — PixelForge',
    description: 'Protect your photos with custom text watermarks. Free & private.',
    url: 'https://pixelforge.vercel.app/add-watermark',
  },
};

export default function WatermarkPage() {
  return <WatermarkClient />;
}
