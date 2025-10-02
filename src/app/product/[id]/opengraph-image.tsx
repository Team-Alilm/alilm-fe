import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};

interface Props {
  params: { id: string };
}

export default async function OpengraphImage({ params }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api/v1';

  try {
    const response = await fetch(`${baseUrl}/products/${params.id}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }

    const { data: product } = await response.json();

    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'white',
              borderRadius: '24px',
              padding: '60px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: '#333',
                marginBottom: 20,
                textAlign: 'center',
              }}
            >
              {product.name}
            </div>
            <div
              style={{
                fontSize: 32,
                color: '#666',
                marginBottom: 40,
              }}
            >
              {product.brand}
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: '#FFB800',
              }}
            >
              {product.price?.toLocaleString()}원
            </div>
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (error) {
    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ fontSize: 48, fontWeight: 700, color: '#333' }}>알림 - 재입고 알림</div>
        </div>
      ),
      {
        ...size,
      }
    );
  }
}
