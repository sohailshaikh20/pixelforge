export default function Footer() {
  return (
    <footer style={{
      marginTop: 50, paddingTop: 20, borderTop: '1px solid #ffffff0a',
      textAlign: 'center', color: '#ffffff30', fontSize: 11, paddingBottom: 30,
    }}>
      <div style={{ marginBottom: 6, fontWeight: 600 }}>PixelForge — Free Online Image Tools</div>
      <div>Compress images · Resize images · Convert PNG to JPG · Convert JPG to WebP · Add watermarks · Rotate images</div>
      <div style={{ marginTop: 4 }}>Image compressor · Photo resizer · Format converter · All free, all instant, all private</div>
      <div style={{ marginTop: 8, color: '#ffffff20', fontSize: 10 }}>
        🛡️ Your privacy matters — all processing happens in your browser. We never upload, store, or access your files.
      </div>
      <div style={{ marginTop: 6 }}>© 2026 PixelForge. All rights reserved.</div>
    </footer>
  );
}
