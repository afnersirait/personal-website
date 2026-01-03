import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 90,
          background: 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: '-2px',
          borderRadius: '20%',
        }}
      >
        AS
      </div>
    ),
    {
      ...size,
    }
  );
}
