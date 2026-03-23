'use client';

import Link from 'next/link';
import { useUsage } from './UsageContext';

export default function Navbar() {
  const { usageCount, FREE_LIMIT } = useUsage();
  const progressPct = Math.min((usageCount / FREE_LIMIT) * 100, 100);

  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 28px', borderBottom: '1px solid #ffffff0a', backdropFilter: 'blur(10px)',
      position: 'sticky', top: 0, zIndex: 100, background: '#0B0D17ee',
    }}>
      <Link href="/" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 34, height: 34, borderRadius: 10,
          background: 'linear-gradient(135deg, #FF6B35, #845EC2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
        }}>✦</div>
        <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 18, letterSpacing: -0.5 }}>
          PixelForge
        </span>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{
          color: usageCount >= FREE_LIMIT ? '#FF6B35' : '#ffffff60',
          fontSize: 12, fontWeight: usageCount >= FREE_LIMIT ? 700 : 400,
        }}>
          {usageCount}/{FREE_LIMIT} free today
        </div>
        <div style={{ width: 80, height: 5, borderRadius: 3, background: '#ffffff15', overflow: 'hidden' }}>
          <div style={{
            width: `${progressPct}%`, height: '100%',
            background: usageCount >= FREE_LIMIT ? '#FF6B35' : usageCount >= FREE_LIMIT * 0.7 ? '#FFC75F' : '#00C9A7',
            borderRadius: 3, transition: 'width 0.5s, background 0.3s',
          }} />
        </div>
        <button style={{
          background: 'linear-gradient(135deg, #FF6B35, #FF6F91)', border: 'none', borderRadius: 8,
          padding: '8px 16px', color: '#fff', fontWeight: 700, fontSize: 12, cursor: 'pointer',
          fontFamily: "'DM Sans', sans-serif",
        }}>Go Pro</button>
      </div>
    </nav>
  );
}
