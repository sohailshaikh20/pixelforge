'use client';

import { useState, useEffect } from 'react';
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

function ResizeTool() {
  const { isLimitReached, incrementUsage } = useUsage();
  const [file, setFile] = useState(null);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [keepRatio, setKeepRatio] = useState(true);
  const [origDims, setOrigDims] = useState(null);
  const [result, setResult] = useState(null);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!file) return;
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      setOrigDims({ w: img.width, h: img.height });
      setWidth(String(img.width));
      setHeight(String(img.height));
    };
    img.src = url;
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleWidth = (v) => {
    setWidth(v);
    if (keepRatio && origDims && v) setHeight(String(Math.round((Number(v) / origDims.w) * origDims.h)));
  };
  const handleHeight = (v) => {
    setHeight(v);
    if (keepRatio && origDims && v) setWidth(String(Math.round((Number(v) / origDims.h) * origDims.w)));
  };

  const resize = () => {
    if (!file || !width || !height || isLimitReached) return;
    setProcessing(true);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = Number(width);
      canvas.height = Number(height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        setResult({
          blob, url: URL.createObjectURL(blob),
          originalSize: file.size, newSize: blob.size,
          reduction: Math.round((1 - blob.size / file.size) * 100),
          dims: `${width} × ${height}`,
        });
        setProcessing(false);
        incrementUsage();
      }, file.type || 'image/png');
    };
    img.src = URL.createObjectURL(file);
  };

  if (isLimitReached && !result) return <LimitReachedBanner />;

  const inputStyle = {
    width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #ffffff20',
    background: '#ffffff08', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box',
  };

  return (
    <div>
      <DropZone onFileDrop={(f) => { setFile(f); setResult(null); }} file={file} accent="#00C9A7" />
      {file && origDims && !result && (
        <div style={{ marginTop: 20 }}>
          <div style={{ color: '#ffffff70', fontSize: 12, marginBottom: 10 }}>
            Original: {origDims.w} × {origDims.h}px
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              <label style={{ color: '#ffffffbb', fontSize: 12, display: 'block', marginBottom: 4 }}>Width (px)</label>
              <input value={width} onChange={(e) => handleWidth(e.target.value)} style={inputStyle} />
            </div>
            <div onClick={() => setKeepRatio(!keepRatio)} style={{ cursor: 'pointer', color: keepRatio ? '#00C9A7' : '#ffffff40', fontSize: 20, marginTop: 18 }}>
              {keepRatio ? '🔗' : '🔓'}
            </div>
            <div>
              <label style={{ color: '#ffffffbb', fontSize: 12, display: 'block', marginBottom: 4 }}>Height (px)</label>
              <input value={height} onChange={(e) => handleHeight(e.target.value)} style={inputStyle} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
            {[
              { l: 'HD', w: 1280, h: 720 }, { l: 'Full HD', w: 1920, h: 1080 },
              { l: 'Instagram', w: 1080, h: 1080 }, { l: 'Twitter', w: 1200, h: 675 },
            ].map((p) => (
              <button key={p.l} onClick={() => { setWidth(String(p.w)); setHeight(String(p.h)); setKeepRatio(false); }} style={presetBtn}>
                {p.l}
              </button>
            ))}
          </div>
          <button onClick={resize} disabled={processing} style={{
            width: '100%', padding: 14, borderRadius: 12, border: 'none',
            background: processing ? '#ffffff20' : '#00C9A7', color: '#fff', fontWeight: 700,
            fontSize: 15, cursor: processing ? 'not-allowed' : 'pointer', marginTop: 16, transition: 'all 0.2s',
          }}>
            {processing ? 'Resizing...' : '📐 Resize Image'}
          </button>
        </div>
      )}
      {result && <ResultCard result={result} accent="#00C9A7" filename={`resized_${file.name}`} />}
    </div>
  );
}

export default function ResizeClient() {
  return (
    <UsageProvider>
      <Navbar />
      <ToolPageWrapper icon="📐" name="Resize Image" desc="Change dimensions to any size you need">
        <ResizeTool />
      </ToolPageWrapper>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ marginTop: 30, color: '#ffffff40', fontSize: 13, lineHeight: 1.8 }}>
          <h2 style={{ color: '#ffffff60', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>How to Resize Images Online</h2>
          <p>Upload your image and enter custom dimensions or use our social media presets for Instagram (1080×1080), Twitter (1200×675), HD (1280×720), or Full HD (1920×1080). Toggle the aspect ratio lock to maintain proportions or resize freely.</p>
        </div>
        <Footer />
      </div>
    </UsageProvider>
  );
}
