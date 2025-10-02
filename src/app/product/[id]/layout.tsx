import { type Metadata } from 'next';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api/v1';

  try {
    const response = await fetch(`${baseUrl}/products/${params.id}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }

    const { data: product } = await response.json();

    const title = `${product.name} - ${product.brand} | 알림`;
    const description = `${product.brand}의 ${product.name} 재입고 알림을 받아보세요. 가격: ${product.price?.toLocaleString()}원`;
    const url = `https://alilm.com/product/${params.id}`;

    return {
      title,
      description,
      keywords: [
        product.name,
        product.brand,
        product.firstOption,
        product.secondOption,
        product.thirdOption,
        '재입고 알림',
        '재입고',
        '알림',
        product.store,
      ].filter(Boolean),
      openGraph: {
        title,
        description,
        url,
        siteName: '알림 - 재입고 알림 서비스',
        images: [
          {
            url: product.thumbnailUrl || '/images/empty-image.webp',
            width: 1200,
            height: 630,
            alt: product.name,
          },
        ],
        locale: 'ko_KR',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [product.thumbnailUrl || '/images/empty-image.webp'],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      alternates: {
        canonical: url,
      },
    };
  } catch (error) {
    return {
      title: '알림 - 재입고 알림 서비스',
      description: '무신사, 29CM, 지그재그 상품의 재입고 알림을 간편하게 받아보세요',
    };
  }
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
