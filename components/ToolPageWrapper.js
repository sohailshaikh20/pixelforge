'use client';

import Link from 'next/link';
import { PrivacyBadge, AdBanner } from './SharedUI';

export default function ToolPageWrapper({ icon, name, desc, children }) {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '30px 20px' }}>
      <Link href="/" style={{
        background: 'none', color: '#ffffff60', fontSize: 13,
        cursor: 'pointer', display: 'inline-block', marginBottom: 16,
      }}>← Back to all tools</Link>

      <PrivacyBadge />
      <AdBanner position="top" />

      <div style={{ padding: 28, borderRadius: 18, background: '#ffffff06', border: '1px solid #ffffff0a' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ fontSize: 30 }}>{icon}</div>
          <div>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>{name}</h1>
            <div style={{ color: '#ffffff50', fontSize: 13 }}>{desc}</div>
          </div>
        </div>
        {children}
      </div>

      <AdBanner position="bottom" />
    </div>
  );
}
