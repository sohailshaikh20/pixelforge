export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://pixelforge.vercel.app/sitemap.xml',
  };
}
