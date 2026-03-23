'use client';

import { useState } from 'react';
import { UsageProvider, useUsage } from '../../components/UsageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ToolPageWrapper from '../../components/ToolPageWrapper';
import DropZone from '../../components/DropZone';
import ResultCard from '../../components/ResultCard';
import { LimitReachedBanner } from '../../components/SharedUI';

function CompressTool() {
  const { isLimitReached, incrementUsage } = useUsage();
  const [file, setFile] = useState(null);
  const [quality, setQuality] = useState(70);
  const [result, setResult] = useState(null);
  const [processing, setProcessing] = useState(false);

  const compress = () => {
    if (!file || isLimitReached) return;
    setProcessing(true);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        setResult({
          blob, url: URL.createObjectURL(blob),
          originalSize: file.size, newSize: blob.size,
          reduction: Math.round((1 - blob.size / file.size) * 100),
        });
        setProcessing(false);
        incrementUsage();
      }, 'image/jpeg', quality / 100);
    };
    img.src = URL.createObjectURL(file);
  };

  if (isLimitReached && !result) return <LimitReachedBanner />;

  return (
    <div>
      <DropZone onFileDrop={(f) => { setFile(f); setResult(null); }} file={file} accent="#FF6B35" />
      {file && !result && (
        <div style={{ marginTop: 20 }}>
          <label style={{ color: '#ffffffbb', fontSize: 13 }}>Quality: {quality}%</label>
          <input type="range" min={10} max={95} value={quality} onChange={(e) => setQuality(Number(e.target.value))}
            style={{ width: '100%', marginTop: 8, accentColor: '#FF6B35' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#ffffff50' }}>
            <span>Smallest file</span><span>Best quality</span>
          </div>
          <button onClick={compress} disabled={processing} style={{
            width: '100%', padding: 14, borderRadius: 12, border: 'none',
            background: processing ? '#ffffff20' : '#FF6B35', color: '#fff', fontWeight: 700,
            fontSize: 15, cursor: processing ? 'not-allowed' : 'pointer', marginTop: 16, transition: 'all 0.2s',
          }}>
            {processing ? 'Compressing...' : '⚡ Compress Image'}
          </button>
        </div>
      )}
      {result && <ResultCard result={result} accent="#FF6B35" filename={`compressed_${file.name}`} />}
    </div>
  );
}

export default function CompressClient() {
  return (
    <UsageProvider>
      <Navbar />
      <ToolPageWrapper icon="⚡" name="Compress Image" desc="Reduce file size without losing quality">
        <CompressTool />
      </ToolPageWrapper>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ marginTop: 30, color: '#ffffff40', fontSize: 13, lineHeight: 1.8 }}>
          <h2 style={{ color: '#ffffff60', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>How to Compress Images Online</h2>
          <p>Upload any JPG, PNG, or WebP image and adjust the quality slider to find the perfect balance between file size and image quality. Our compression tool processes everything in your browser — your images are never uploaded to any server, keeping them 100% private.</p>
          <p style={{ marginTop: 8 }}>Perfect for reducing image sizes for websites, email attachments, social media uploads, and more. Most images can be compressed by 60-90% without noticeable quality loss.</p>
        </div>
        <Footer />
      </div>
    </UsageProvider>
  );
}
