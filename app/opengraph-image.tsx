import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const alt = 'Vorontsov Labs - сайты, AI и SEO для роста бизнеса';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #0d0d0d 0%, #171717 42%, #f2ede7 42%, #f2ede7 100%)',
          color: '#0d0d0d',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top left, rgba(255,59,48,0.24), transparent 28%), radial-gradient(circle at bottom right, rgba(255,59,48,0.14), transparent 24%)',
          }}
        />
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            padding: '56px 64px',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              width: '56%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              color: '#f2ede7',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
              }}
            >
              {siteConfig.brandMark}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div
                style={{
                  display: 'flex',
                  fontSize: 76,
                  lineHeight: 0.95,
                  fontWeight: 800,
                  textTransform: 'uppercase',
                }}
              >
                Сайты, AI и SEO
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 30,
                  lineHeight: 1.3,
                  color: 'rgba(242,237,231,0.82)',
                  maxWidth: '88%',
                }}
              >
                Цифровые продукты, которые помогают бизнесу запускаться быстрее и получать больше заявок.
              </div>
            </div>
          </div>

          <div
            style={{
              width: '34%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'stretch',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <div
                style={{
                  width: 170,
                  height: 170,
                  borderRadius: 24,
                  background: '#0d0d0d',
                  color: '#f2ede7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 88,
                  fontWeight: 800,
                }}
              >
                V
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                padding: 28,
                borderRadius: 24,
                background: '#ff3b30',
                color: '#f7f1eb',
              }}
            >
              <div style={{ display: 'flex', fontSize: 24, fontWeight: 700, textTransform: 'uppercase' }}>
                Запуск от 24 часов
              </div>
              <div style={{ display: 'flex', fontSize: 22, lineHeight: 1.35 }}>
                Веб-разработка, автоматизация и рост органического трафика в одной студии.
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
