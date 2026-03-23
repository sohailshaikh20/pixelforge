export default function sitemap() {
  const baseUrl = 'https://pixelforge.vercel.app';

  const tools = [
    { url: '/', priority: 1.0 },
    { url: '/compress-image', priority: 0.9 },
    { url: '/resize-image', priority: 0.9 },
    { url: '/convert-image', priority: 0.9 },
    { url: '/add-watermark', priority: 0.8 },
    { url: '/rotate-image', priority: 0.8 },
    { url: '/crop-image', priority: 0.7 },
  ];

  return tools.map((tool) => ({
    url: `${baseUrl}${tool.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: tool.priority,
  }));
}
