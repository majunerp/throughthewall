import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          position: 'relative',
        }}
      >
        {/* Wall with gap */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
          }}
        >
          {/* Left wall */}
          <div
            style={{
              width: '8px',
              height: '28px',
              background: 'white',
              borderRadius: '2px',
            }}
          />
          {/* Center arrow/person symbol */}
          <div
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#FCD34D',
              display: 'flex',
            }}
          >
            ▶
          </div>
          {/* Right wall */}
          <div
            style={{
              width: '8px',
              height: '28px',
              background: 'white',
              borderRadius: '2px',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
