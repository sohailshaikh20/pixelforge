'use client';

import { UsageProvider } from '../../components/UsageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ToolPageWrapper from '../../components/ToolPageWrapper';

export default function CropClient() {
  return (
    <UsageProvider>
      <Navbar />
      <ToolPageWrapper icon="✂️" name="Crop Image" desc="Cut and frame your images perfectly">
        <div style={{ padding: 40, textAlign: 'center', borderRadius: 12, background: '#FF6F9110', border: '1px solid #FF6F9130' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🚧</div>
          <div style={{ color: '#FF6F91', fontWeight: 700, fontSize: 20 }}>Coming Soon</div>
          <div style={{ color: '#ffffff60', fontSize: 14, marginTop: 8, maxWidth: 400, margin: '8px auto 0' }}>
            Our crop tool is launching next week with precision controls, aspect ratio presets, and social media templates.
          </div>
        </div>
      </ToolPageWrapper>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 20px' }}>
        <Footer />
      </div>
    </UsageProvider>
  );
}
