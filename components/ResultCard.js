'use client';

import { formatBytes } from './DropZone';

export default function ResultCard({ result, accent, filename }) {
  const download = () => {
    const a = document.createElement('a');
    a.href = result.url;
    a.download = filename;
    a.click();
  };

  return (
    <div style={{ marginTop: 20, padding: 20, borderRadius: 14, background: `${accent}10`, border: `1px solid ${accent}30` }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>✅ Done!</div>
          <div style={{ color: '#ffffff80', fontSize: 12, marginTop: 4 }}>
            {formatBytes(result.originalSize)} → {formatBytes(result.newSize)}
            {result.reduction > 0 && (
              <span style={{ color: '#00C9A7', fontWeight: 700, marginLeft: 8 }}>{result.reduction}% smaller</span>
            )}
            {result.dims && <span style={{ marginLeft: 8 }}>· {result.dims}</span>}
          </div>
        </div>
        <button onClick={download} style={{
          padding: '10px 24px', borderRadius: 12, border: 'none',
          background: accent, color: '#fff', fontWeight: 700,
          fontSize: 15, cursor: 'pointer', transition: 'all 0.2s',
        }}>⬇ Download</button>
      </div>
      <div style={{ marginTop: 14, borderRadius: 10, overflow: 'hidden', maxHeight: 200, background: '#00000030' }}>
        <img src={result.url} alt="result" style={{ width: '100%', maxHeight: 200, objectFit: 'contain' }} />
      </div>
    </div>
  );
}
