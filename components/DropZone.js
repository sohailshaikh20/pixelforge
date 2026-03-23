'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export { formatBytes };

export default function DropZone({ onFileDrop, file, accent }) {
  const inputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewUrl(null);
    }
  }, [file]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer?.files?.[0] || e.target?.files?.[0];
    if (f && f.type.startsWith('image/')) onFileDrop(f);
  }, [onFileDrop]);

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      style={{
        border: `2px dashed ${dragOver ? accent : '#ffffff20'}`, borderRadius: 16,
        padding: file ? '20px' : '50px 20px', textAlign: 'center', cursor: 'pointer',
        background: dragOver ? `${accent}10` : '#ffffff05', transition: 'all 0.3s ease',
      }}
    >
      <input ref={inputRef} type="file" accept="image/*" onChange={handleDrop} style={{ display: 'none' }} />
      {file && previewUrl ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <img src={previewUrl} alt="preview" style={{ maxWidth: 120, maxHeight: 90, borderRadius: 8, objectFit: 'cover' }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>{file.name}</div>
            <div style={{ color: '#ffffff70', fontSize: 12, marginTop: 4 }}>
              {formatBytes(file.size)} · {file.type.split('/')[1].toUpperCase()}
            </div>
            <div style={{ color: accent, fontSize: 12, marginTop: 6 }}>Click to change file</div>
          </div>
        </div>
      ) : (
        <>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📁</div>
          <div style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>Drop your image here</div>
          <div style={{ color: '#ffffff60', fontSize: 13, marginTop: 6 }}>
            or <span style={{ color: accent, textDecoration: 'underline' }}>browse files</span> · PNG, JPG, WebP, GIF
          </div>
        </>
      )}
    </div>
  );
}
