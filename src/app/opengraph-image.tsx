import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };
export const alt = 'BuyerRelay - AI-Powered Lead Conversion for Real Estate';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: '#0F172A',
          position: 'relative',
        }}
      >
        {/* Gradient accent strip at top */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '6px',
            background: 'linear-gradient(90deg, #0066FF, #7C3AED)',
          }}
        />

        {/* Main content area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            padding: '60px 80px',
          }}
        >
          {/* Logo text */}
          <div
            style={{
              display: 'flex',
              fontSize: '64px',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
              marginBottom: '24px',
            }}
          >
            BuyerRelay
          </div>

          {/* Tagline */}
          <div
            style={{
              display: 'flex',
              fontSize: '28px',
              fontWeight: 500,
              color: '#94A3B8',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            AI-Powered Lead Conversion for Real Estate
          </div>

          {/* Stat badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(0, 102, 255, 0.15)',
              borderRadius: '999px',
              padding: '12px 28px',
              border: '1px solid rgba(0, 102, 255, 0.3)',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: '20px',
                fontWeight: 700,
                color: '#0066FF',
              }}
            >
              Book 20-50% More Appointments
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '4px',
            background: 'linear-gradient(90deg, #7C3AED, #0066FF)',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
