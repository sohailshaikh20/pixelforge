'use client';

import { useState } from 'react';
import { UsageProvider, useUsage } from '../../components/UsageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ToolPageWrapper from '../../components/ToolPageWrapper';
import DropZone from '../../components/DropZone';
import ResultCard from '../../components/ResultCard';
import { LimitReachedBanner } from '../../components/SharedUI';

function WatermarkTool() {
  const { isLimitReached, incrementUsage } = useUsage();
  const [file, setFile] = useState(null);
  const [text, setText] = useState('© My Brand');
  const [result, setResult] = useState(null);
  const [processing, setProcessing] = useState(false);

  const apply = () => {
    if (!file || isLimitReached) return;
    setProcessing(true);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.font = `bold ${Math.max(img.width / 15, 20)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const step = img.width / 2.5;
      for (let y = 0; y < img.height + step; y += step) {
        for (let x = 0; x < img.width + step; x += step) {
          ctx.save(); ctx.translate(x, y); ctx.rotate(-Math.PI / 6); ctx.fillText(text, 0, 0); ctx.restore();
        }
      }
      canvas.toBlob((blob) => {
        setResult({ blob, url: URL.createObjectURL(blob), originalSize: file.size, newSize: blob.size, reduction: 0 });
        setProcessing(false);
        incrementUsage();
      }, 'image/png');
    };
    img.src = URL.createObjectURL(file);
  };

  if (isLimitReached && !result) return <LimitReachedBanner />;

  return (
    <div>
      <DropZone onFileDrop={(f) => { setFile(f); setResult(null); }} file={file} accent="#0081CF" />
      {file && !result && (
        <div style={{ marginTop: 20 }}>
          <label style={{ color: '#ffffffbb', fontSize: 12, display: 'block', marginBottom: 4 }}>Watermark text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} style={{
            width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #ffffff20',
            background: '#ffffff08', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box',
          }} />
          <button onClick={apply} disabled={processing} style={{
            width: '100%', padding: 14, borderRadius: 12, border: 'none',
            background: processing ? '#ffffff20' : '#0081CF', color: '#fff', fontWeight: 700,
            fontSize: 15, cursor: processing ? 'not-allowed' : 'pointer', marginTop: 16, transition: 'all 0.2s',
          }}>
            {processing ? 'Applying...' : '💧 Add Watermark'}
          </button>
        </div>
      )}
      {result && <ResultCard result={result} accent="#0081CF" filename={`watermarked_${file.name}`} />}
    </div>
  );
}

export default function WatermarkClient() {
  return (
    <UsageProvider>
      <Navbar />
      <ToolPageWrapper icon="💧" name="Add Watermark" desc="Protect your images with text watermarks">
        <WatermarkTool />
      </ToolPageWrapper>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ marginTop: 30, color: '#ffffff40', fontSize: 13, lineHeight: 1.8 }}>
          <h2 style={{ color: '#ffffff60', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>How to Add Watermarks Online</h2>
          <p>Upload your image, enter your custom watermark text (like your brand name, copyright notice, or website URL), and click apply. The watermark is tiled diagonally across the entire image for maximum protection against unauthorized use.</p>
        </div>
        <Footer />
      </div>
    </UsageProvider>
  );
}
