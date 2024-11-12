import { get } from '@/libs/api/client';
import { type Product } from '@/types/basket';
import { useQuery } from '@tanstack/react-query';

type ProductResponse = Omit<Product, 'tab' | 'imageUrl'> & { imageUrlList: string[] };

export const PRODUCT_QUERY_KEY = 'getProductInfo';

export const getProductInfo = async (productId: number) => {
  return await get<ProductResponse>(`/products/${productId}`);
};

export const useGetProductInfo = (productId: number) => {
  return useQuery({
    queryKey: [PRODUCT_QUERY_KEY, productId],
    queryFn: async () => await getProductInfo(productId),
  });
};
