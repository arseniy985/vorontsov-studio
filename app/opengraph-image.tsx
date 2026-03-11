import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';
import { loadOgFonts } from '@/lib/og-fonts';

export const alt = 'Vorontsov Labs - сайты, AI и SEO для роста бизнеса';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

function LogoMark() {
  return (
    <div
      style={{
        width: 108,
        height: 108,
        borderRadius: 16,
        background: '#0D0D0D',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '10px auto 10px 56px',
          width: 12,
          background: '#FF3B30',
        }}
      />
      <div
        style={{
          display: 'flex',
          color: '#FFFFFF',
          fontFamily: '"Space Grotesk"',
          fontSize: 48,
          fontWeight: 700,
          letterSpacing: '-0.05em',
          transform: 'translateX(-6px)',
        }}
      >
        V
      </div>
    </div>
  );
}

export default async function OpenGraphImage() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: '#F7F3EE',
          color: '#0D0D0D',
          fontFamily: 'Inter',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top right, rgba(255, 59, 48, 0.12), transparent 22%), radial-gradient(circle at bottom left, rgba(13, 13, 13, 0.08), transparent 30%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -90,
            left: -70,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: 'rgba(255,255,255,0.34)',
            border: '1px solid rgba(13,13,13,0.08)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 560,
            height: '100%',
            background: '#0D0D0D',
            clipPath: 'polygon(0 0, 78% 0, 58% 100%, 0 100%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: '52px 58px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                color: '#FFFFFF',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontFamily: '"Space Grotesk"',
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                }}
              >
                {siteConfig.brandMark}
              </div>
              <div
                style={{
                  display: 'flex',
                  width: 124,
                  height: 4,
                  background: '#FF3B30',
                  borderRadius: 9999,
                }}
              />
            </div>

            <LogoMark />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 52,
              flex: 1,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 620,
                justifyContent: 'center',
                gap: 24,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#FFFFFF',
                  fontFamily: '"Space Grotesk"',
                  fontSize: 78,
                  fontWeight: 700,
                  lineHeight: 0.92,
                  letterSpacing: '-0.06em',
                  textTransform: 'uppercase',
                }}
              >
                <span>Сайты.</span>
                <span>AI.</span>
                <span style={{ color: '#FF3B30' }}>SEO.</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  maxWidth: 470,
                  color: 'rgba(255,255,255,0.82)',
                  fontSize: 26,
                  lineHeight: 1.3,
                }}
              >
                Запускаем интерфейсы, автоматизацию и рост органики в одном визуально точном продукте.
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 360,
                justifyContent: 'flex-end',
                alignItems: 'stretch',
                gap: 18,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  padding: '28px 30px',
                  borderRadius: 16,
                  background: '#FFFFFF',
                  border: '1px solid rgba(13,13,13,0.08)',
                  boxShadow: '0 22px 50px rgba(13,13,13,0.08)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    fontSize: 16,
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#6F6861',
                  }}
                >
                  Vorontsov Labs
                </div>
                <div
                  style={{
                    display: 'flex',
                    fontFamily: '"Space Grotesk"',
                    fontSize: 42,
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: '-0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  Быстрый запуск.
                </div>
                <div
                  style={{
                    display: 'flex',
                    fontSize: 22,
                    lineHeight: 1.35,
                    color: '#3F3A35',
                  }}
                >
                  Разработка, SEO и AI-процессы для компаний, которым нужен не шаблон, а рабочая система роста.
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '22px 26px',
                  borderRadius: 16,
                  background: '#FF3B30',
                  color: '#FFF7F4',
                  boxShadow: '0 18px 40px rgba(255,59,48,0.24)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      fontSize: 15,
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Focus
                  </div>
                  <div style={{ display: 'flex', fontSize: 20, lineHeight: 1.25 }}>
                    Сайт, лидогенерация и цифровая автоматизация.
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    fontFamily: '"Space Grotesk"',
                    fontSize: 54,
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: '-0.06em',
                  }}
                >
                  VL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    },
  );
}
