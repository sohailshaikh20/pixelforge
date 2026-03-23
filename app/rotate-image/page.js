import RotateClient from './RotateClient';

export const metadata = {
  title: 'Rotate Image Online Free — Rotate & Flip Photos Instantly',
  description: 'Rotate images 90°, 180°, 270° or flip horizontally online for free. Instant rotation in your browser. No upload to servers — 100% private.',
  keywords: ['rotate image', 'flip image', 'rotate photo online', 'rotate image 90 degrees', 'mirror image', 'flip photo'],
  alternates: { canonical: 'https://pixelforge.vercel.app/rotate-image' },
  openGraph: {
    title: 'Rotate Image Online Free — PixelForge',
    description: 'Rotate and flip images instantly. Free & private.',
    url: 'https://pixelforge.vercel.app/rotate-image',
  },
};

export default function RotatePage() {
  return <RotateClient />;
}
