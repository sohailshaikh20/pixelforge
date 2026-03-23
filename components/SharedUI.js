'use client';

export function PrivacyBadge() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center',
      padding: '10px 20px', borderRadius: 10,
      background: 'linear-gradient(135deg, #00C9A710, #00C9A705)',
      border: '1px solid #00C9A725', margin: '0 0 20px 0', flexWrap: 'wrap',
    }}>
      <span style={{ fontSize: 16 }}>🛡️</span>
      <span style={{ color: '#00C9A7', fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>
        Your files never leave your browser
      </span>
      <span style={{ color: '#ffffff40', fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>
        — Everything is processed locally. We never upload, store, or see your images.
      </span>
    </div>
  );
}

export function AdBanner({ position }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1a1a2e22, #16213e22)',
      border: '1px dashed #ffffff15', borderRadius: 8, padding: '14px 20px',
      textAlign: 'center', color: '#ffffff40', fontSize: 11, letterSpacing: 1,
      fontFamily: "'DM Sans', sans-serif",
      margin: position === 'top' ? '0 0 20px 0' : '20px 0 0 0',
    }}>
      {/* Replace this div with your actual Google AdSense code */}
      ADVERTISEMENT SPACE — Google AdSense {position === 'top' ? '728×90 Leaderboard' : '300×250 Medium Rectangle'}
    </div>
  );
}

export function ProBanner({ onClose }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #FF6B35, #FF6F91)', borderRadius: 12,
      padding: '16px 24px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 10,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 20 }}>⭐</span>
        <div>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: 14 }}>Upgrade to Pro — Unlimited processing</div>
          <div style={{ color: '#ffffffcc', fontSize: 12 }}>No ads · Batch processing · HD quality · Priority speed</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button style={{
          background: '#fff', color: '#FF6B35', border: 'none', borderRadius: 8,
          padding: '8px 20px', fontWeight: 700, fontSize: 13, cursor: 'pointer',
        }}>€4.99/mo →</button>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#ffffff99', cursor: 'pointer', fontSize: 18 }}>×</button>
      </div>
    </div>
  );
}

export function LimitReachedBanner() {
  return (
    <div style={{
      padding: '24px', borderRadius: 14, textAlign: 'center',
      background: 'linear-gradient(135deg, #FF6B3515, #FF6F9115)',
      border: '1px solid #FF6B3530', margin: '20px 0',
    }}>
      <div style={{ fontSize: 32, marginBottom: 8 }}>🔒</div>
      <div style={{ color: '#fff', fontWeight: 700, fontSize: 18 }}>Daily free limit reached!</div>
      <div style={{ color: '#ffffff70', fontSize: 13, marginTop: 6 }}>
        You&apos;ve used all 20 free processes today. Upgrade to Pro for unlimited access.
      </div>
      <button style={{
        background: 'linear-gradient(135deg, #FF6B35, #FF6F91)', border: 'none', borderRadius: 10,
        padding: '12px 32px', color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer', marginTop: 14,
      }}>Upgrade to Pro — €4.99/mo</button>
    </div>
  );
}
