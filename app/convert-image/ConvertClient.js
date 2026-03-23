'use client';

import { useState } from 'react';
import { UsageProvider, useUsage } from '../../components/UsageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ToolPageWrapper from '../../components/ToolPageWrapper';
import DropZone from '../../components/DropZone';
import ResultCard from '../../components/ResultCard';
import { LimitReachedBanner } from '../../components/SharedUI';

function ConvertTool() {
  const { isLimitReached, incrementUsage } = useUsage();
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState('image/png');
  const [result, setResult] = useState(null);
  const [processing, setProcessing] = useState(false);

  const formats = [
    { type: 'image/png', label: 'PNG', ext: 'png' },
    { type: 'image/jpeg', label: 'JPG', ext: 'jpg' },
    { type: 'image/webp', label: 'WebP', ext: 'webp' },
  ];

  const convert = () => {
    if (!file || isLimitReached) return;
    setProcessing(true);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (format === 'image/jpeg') { ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 0, canvas.width, canvas.height); }
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        const sel = formats.find((f) => f.type === format);
        setResult({
          blob, url: URL.createObjectURL(blob),
          originalSize: file.size, newSize: blob.size,
          reduction: Math.round((1 - blob.size / file.size) * 100), ext: sel.ext,
        });
        setProcessing(false);
        incrementUsage();
      }, format);
    };
    img.src = URL.createObjectURL(file);
  };

  if (isLimitReached && !result) return <LimitReachedBanner />;

  return (
    <div>
      <DropZone onFileDrop={(f) => { setFile(f); setResult(null); }} file={file} accent="#845EC2" />
      {file && !result && (
        <div style={{ marginTop: 20 }}>
          <label style={{ color: '#ffffffbb', fontSize: 12, marginBottom: 8, display: 'block' }}>Convert to:</label>
          <div style={{ display: 'flex', gap: 10 }}>
            {formats.map((f) => (
              <button key={f.type} onClick={() => setFormat(f.type)} style={{
                flex: 1, padding: '12px', borderRadius: 10,
                border: `2px solid ${format === f.type ? '#845EC2' : '#ffffff15'}`,
                background: format === f.type ? '#845EC220' : '#ffffff08',
                color: format === f.type ? '#845EC2' : '#ffffff80',
                fontWeight: 700, fontSize: 14, cursor: 'pointer', transition: 'all 0.2s',
              }}>
                .{f.ext.toUpperCase()}
              </button>
            ))}
          </div>
          <button onClick={convert} disabled={processing} style={{
            width: '100%', padding: 14, borderRadius: 12, border: 'none',
            background: processing ? '#ffffff20' : '#845EC2', color: '#fff', fontWeight: 700,
            fontSize: 15, cursor: processing ? 'not-allowed' : 'pointer', marginTop: 16, transition: 'all 0.2s',
          }}>
            {processing ? 'Converting...' : '🔄 Convert Image'}
          </button>
        </div>
      )}
      {result && <ResultCard result={result} accent="#845EC2" filename={`${file.name.split('.')[0]}.${result.ext}`} />}
    </div>
  );
}

export default function ConvertClient() {
  return (
    <UsageProvider>
      <Navbar />
      <ToolPageWrapper icon="🔄" name="Convert Format" desc="PNG, JPG, WebP — any format instantly">
        <ConvertTool />
      </ToolPageWrapper>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ marginTop: 30, color: '#ffffff40', fontSize: 13, lineHeight: 1.8 }}>
          <h2 style={{ color: '#ffffff60', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>How to Convert Image Formats Online</h2>
          <p>Upload any image and choose your target format — PNG for transparency, JPG for smaller file sizes, or WebP for modern web optimization. The conversion happens instantly in your browser with zero quality loss.</p>
          <p style={{ marginTop: 8 }}>WebP images are up to 30% smaller than JPG while maintaining the same visual quality, making them ideal for websites and apps.</p>
        </div>
        <Footer />
      </div>
    </UsageProvider>
  );
}
