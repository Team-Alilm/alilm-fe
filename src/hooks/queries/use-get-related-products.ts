import { get } from '@/libs/api/client';
import { type Product } from '@/types/basket';
import { useQuery } from '@tanstack/react-query';

interface RelatedProductsResponse {
  data: {
    similarProductList: {
      productId: number;
      name: string;
      brand: string;
      thumbnailUrl: string;
    }[];
  };
}

export const RELATED_PRODUCT_QUERY_KEY = 'relatedProducts';

export const getRelatedProducts = async (productId: Product['id']) => {
  return await get<RelatedProductsResponse>(`/products/similar/${productId}`);
};

export const useGetRelatedProducts = (productId: Product['id']) => {
  return useQuery({
    queryKey: [RELATED_PRODUCT_QUERY_KEY, productId],
    queryFn: async () => getRelatedProducts(productId),
  });
};
