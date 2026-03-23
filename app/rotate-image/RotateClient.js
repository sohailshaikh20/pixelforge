'use client';

import { useState } from 'react';
import { UsageProvider, useUsage } from '../../components/UsageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ToolPageWrapper from '../../components/ToolPageWrapper';
import DropZone from '../../components/DropZone';
import ResultCard from '../../components/ResultCard';
import { LimitReachedBanner } from '../../components/SharedUI';

const presetBtn = {
  padding: '6px 14px', borderRadius: 8, border: '1px solid #ffffff15',
  background: '#ffffff08', color: '#ffffff60', fontSize: 12, cursor: 'pointer', fontWeight: 600,
};

function RotateTool() {
  const { isLimitReached, incrementUsage } = useUsage();
  const [file, setFile] = useState(null);
  const [rotation, setRotation] = useState(90);
  const [flipH, setFlipH] = useState(false);
  const [result, setResult] = useState(null);
  const [processing, setProcessing] = useState(false);

  const apply = () => {
    if (!file || isLimitReached) return;
    setProcessing(true);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const rad = (rotation * Math.PI) / 180;
      const sin = Math.abs(Math.sin(rad));
      const cos = Math.abs(Math.cos(rad));
      canvas.width = Math.round(img.width * cos + img.height * sin);
      canvas.height = Math.round(img.width * sin + img.height * cos);
      const ctx = canvas.getContext('2d');
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rad);
      if (flipH) ctx.scale(-1, 1);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);
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
      <DropZone onFileDrop={(f) => { setFile(f); setResult(null); }} file={file} accent="#FFC75F" />
      {file && !result && (
        <div style={{ marginTop: 20 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[90, 180, 270].map((d) => (
              <button key={d} onClick={() => setRotation(d)} style={{
                ...presetBtn,
                borderColor: rotation === d ? '#FFC75F' : '#ffffff15',
                color: rotation === d ? '#FFC75F' : '#ffffff60',
              }}>{d}°</button>
            ))}
            <button onClick={() => setFlipH(!flipH)} style={{
              ...presetBtn,
              borderColor: flipH ? '#FFC75F' : '#ffffff15',
              color: flipH ? '#FFC75F' : '#ffffff60',
            }}>↔ Flip</button>
          </div>
          <button onClick={apply} disabled={processing} style={{
            width: '100%', padding: 14, borderRadius: 12, border: 'none',
            background: processing ? '#ffffff20' : '#FFC75F', color: '#fff', fontWeight: 700,
            fontSize: 15, cursor: processing ? 'not-allowed' : 'pointer', marginTop: 16, transition: 'all 0.2s',
          }}>
            {processing ? 'Processing...' : '🔃 Apply'}
          </button>
        </div>
      )}
      {result && <ResultCard result={result} accent="#FFC75F" filename={`rotated_${file.name}`} />}
    </div>
  );
}

export default function RotateClient() {
  return (
    <UsageProvider>
      <Navbar />
      <ToolPageWrapper icon="🔃" name="Rotate & Flip" desc="Rotate or mirror images in any direction">
        <RotateTool />
      </ToolPageWrapper>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ marginTop: 30, color: '#ffffff40', fontSize: 13, lineHeight: 1.8 }}>
          <h2 style={{ color: '#ffffff60', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>How to Rotate Images Online</h2>
          <p>Upload your image, select a rotation angle (90°, 180°, or 270°) or flip it horizontally with one click. Perfect for fixing sideways photos from your phone or creating mirror effects.</p>
        </div>
        <Footer />
      </div>
    </UsageProvider>
  );
}
