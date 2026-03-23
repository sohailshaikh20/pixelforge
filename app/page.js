'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UsageProvider } from '../components/UsageContext';
import { PrivacyBadge, AdBanner, ProBanner } from '../components/SharedUI';

const TOOLS = [
  { id: 'compress', name: 'Compress Image', desc: 'Reduce file size without losing quality', icon: '⚡', color: '#FF6B35', tag: 'Most Popular', href: '/compress-image' },
  { id: 'resize', name: 'Resize Image', desc: 'Change dimensions to any size you need', icon: '📐', color: '#00C9A7', tag: 'Trending', href: '/resize-image' },
  { id: 'convert', name: 'Convert Format', desc: 'PNG, JPG, WebP — any format instantly', icon: '🔄', color: '#845EC2', tag: 'Fast', href: '/convert-image' },
  { id: 'crop', name: 'Crop Image', desc: 'Cut and frame your images perfectly', icon: '✂️', color: '#FF6F91', tag: 'New', href: '/crop-image' },
  { id: 'watermark', name: 'Add Watermark', desc: 'Protect your images with text watermarks', icon: '💧', color: '#0081CF', tag: 'Pro Fav', href: '/add-watermark' },
  { id: 'rotate', name: 'Rotate & Flip', desc: 'Rotate or mirror images in any direction', icon: '🔃', color: '#FFC75F', tag: 'Quick', href: '/rotate-image' },
];

function HomeContent() {
  const [showPro, setShowPro] = useState(true);

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '30px 20px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 40, marginTop: 10 }}>
          <h1 style={{
            fontFamily: "'Space Mono', monospace", fontSize: 'clamp(28px, 5vw, 46px)',
            fontWeight: 700, margin: 0,
            background: 'linear-gradient(135deg, #FF6B35, #00C9A7, #845EC2)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2,
          }}>
            Every image tool<br />you&apos;ll ever need
          </h1>
          <p style={{ color: '#ffffff70', fontSize: 16, marginTop: 14, maxWidth: 460, marginLeft: 'auto', marginRight: 'auto' }}>
            Compress, resize, convert, watermark — all free, all instant, all in your browser.
          </p>
        </div>

        <PrivacyBadge />
        <AdBanner position="top" />
        {showPro && <ProBanner onClose={() => setShowPro(false)} />}

        {/* Tool Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 14 }}>
          {TOOLS.map((tool) => (
            <Link key={tool.id} href={tool.href}>
              <div
                style={{
                  padding: 22, borderRadius: 14, background: '#ffffff06',
                  border: '1px solid #ffffff0a', cursor: 'pointer',
                  transition: 'all 0.25s ease', position: 'relative', overflow: 'hidden',
                  height: '100%',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${tool.color}12`;
                  e.currentTarget.style.borderColor = `${tool.color}40`;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff06';
                  e.currentTarget.style.borderColor = '#ffffff0a';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  position: 'absolute', top: 10, right: 10, fontSize: 9, fontWeight: 700,
                  color: tool.color, background: `${tool.color}18`, padding: '3px 8px',
                  borderRadius: 6, letterSpacing: 0.5,
                }}>{tool.tag}</div>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{tool.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{tool.name}</div>
                <div style={{ color: '#ffffff60', fontSize: 12, lineHeight: 1.4 }}>{tool.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        <AdBanner position="bottom" />

        {/* Trust / SEO Section */}
        <div style={{
          marginTop: 40, padding: 30, borderRadius: 16,
          background: '#ffffff04', border: '1px solid #ffffff08', textAlign: 'center',
        }}>
          <h2 style={{ fontSize: 13, color: '#ffffff50', fontWeight: 600, letterSpacing: 1, marginBottom: 16 }}>
            WHY PEOPLE LOVE PIXELFORGE
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            {[
              { icon: '🔒', n: '100% Private', l: 'Files never leave your device' },
              { icon: '⚡', n: 'Instant', l: 'Processed in your browser' },
              { icon: '🆓', n: '20 Free/Day', l: 'No signup required' },
              { icon: '🚫', n: 'No Ads', l: 'With Pro plan' },
            ].map((s) => (
              <div key={s.l} style={{ maxWidth: 130 }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 800, fontFamily: "'Space Mono', monospace" }}>{s.n}</div>
                <div style={{ color: '#ffffff50', fontSize: 12, marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Content Section */}
        <div style={{ marginTop: 40, color: '#ffffff40', fontSize: 13, lineHeight: 1.8 }}>
          <h2 style={{ color: '#ffffff60', fontSize: 16, fontWeight: 700, marginBottom: 12 }}>
            Free Online Image Tools — No Download Required
          </h2>
          <p>
            PixelForge is a free online image toolkit that lets you compress, resize, convert, 
            watermark, and rotate images directly in your browser. Unlike other tools, your files 
            never leave your device — all processing happens locally using modern browser technology.
          </p>
          <p style={{ marginTop: 12 }}>
            Whether you need to reduce image file size for your website, resize photos for social 
            media, convert PNG to JPG, add watermarks to protect your work, or quickly rotate an 
            image — PixelForge handles it all instantly and for free. No signup, no downloads, 
            no server uploads. Just drag, drop, and download.
          </p>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default function Home() {
  return (
    <UsageProvider>
      <HomeContent />
    </UsageProvider>
  );
}
