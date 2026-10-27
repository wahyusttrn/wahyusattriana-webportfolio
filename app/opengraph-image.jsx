import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { profile } from '@/data/profile';

// Link preview shown on LinkedIn, WhatsApp, Slack and others
export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Static Archivo instances (OFL), since the image renderer can't use the site's variable font
const font = (file) => readFile(join(process.cwd(), 'assets', file));

export default async function OpengraphImage() {
  const [regular, display] = await Promise.all([font('archivo-500.ttf'), font('archivo-expanded-800.ttf')]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#121212',
          color: '#efede6',
          fontFamily: 'Archivo'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '64px 72px 0' }}>
          <div style={{ fontSize: 28, color: '#8f8c84' }}>{`${profile.title} · Bali, Indonesia`}</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 44,
              fontFamily: 'Archivo Expanded',
              fontSize: 118,
              lineHeight: 0.9,
              letterSpacing: -2
            }}
          >
            <span>WAHYU</span>
            <span style={{ display: 'flex' }}>
              SATTRIANA<span style={{ color: '#ff5722', marginLeft: -14 }}>.</span>
            </span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            padding: '28px 72px',
            background: '#ff5722',
            color: '#121212',
            fontSize: 30
          }}
        >
          <span style={{ fontFamily: 'Archivo Expanded', fontSize: 26 }}>AVAILABLE</span>
          <span>{profile.availability.join(' · ')}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Archivo', data: regular, weight: 500, style: 'normal' },
        { name: 'Archivo Expanded', data: display, weight: 800, style: 'normal' }
      ]
    }
  );
}
