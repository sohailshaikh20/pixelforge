import ResizeClient from './ResizeClient';

export const metadata = {
  title: 'Resize Image Online Free — Change Image Dimensions Instantly',
  description: 'Resize images online for free. Change width and height, use presets for HD, Instagram, Twitter. No upload to servers — 100% private browser processing.',
  keywords: ['resize image', 'image resizer', 'resize photo online', 'change image size', 'resize for instagram', 'photo resizer free'],
  alternates: { canonical: 'https://pixelforge.vercel.app/resize-image' },
  openGraph: {
    title: 'Resize Image Online Free — PixelForge',
    description: 'Change image dimensions instantly with presets for social media. Free & private.',
    url: 'https://pixelforge.vercel.app/resize-image',
  },
};

export default function ResizePage() {
  return <ResizeClient />;
}
