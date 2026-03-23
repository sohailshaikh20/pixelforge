import CropClient from './CropClient';

export const metadata = {
  title: 'Crop Image Online Free — Cut & Frame Photos Instantly',
  description: 'Crop images online for free. Cut and frame your photos to any size. Coming soon to PixelForge — 100% private browser processing.',
  keywords: ['crop image', 'crop photo online', 'image cropper', 'cut image', 'trim photo free'],
  alternates: { canonical: 'https://pixelforge.vercel.app/crop-image' },
  openGraph: {
    title: 'Crop Image Online Free — PixelForge',
    description: 'Crop and frame your photos instantly. Coming soon!',
    url: 'https://pixelforge.vercel.app/crop-image',
  },
};

export default function CropPage() {
  return <CropClient />;
}
