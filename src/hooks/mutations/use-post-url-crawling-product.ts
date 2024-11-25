import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { type UseMutationCustomOptions } from '../api-types/types';

export interface UsePostUrlCrawlingProductResponse {
  number: number;
  name: string;
  brand: string;
  thumbnailUrl: string;
  imageUrlList: string[];
  category: string;
  firstCategory: string;
  secondCategory: string;
  price: number;
  store: string;
  firstOptions: string[];
  secondOptions: string[];
  thirdOptions: string[];
}

interface UsePostUrlCrawlingProductParams {
  url: string;
}

/**
 * next-server /api/products 에 POST 요청을 보내어 상품 정보를 크롤링하는 mutation
 * @param options
 * @returns
 */
export default function usePostUrlCrawlingProduct(
  options?: UseMutationCustomOptions<
    UsePostUrlCrawlingProductResponse,
    UsePostUrlCrawlingProductParams
  >
) {
  const mutationKey = '/api/products';
  const mutationFn = async ({
    url,
  }: UsePostUrlCrawlingProductParams): Promise<UsePostUrlCrawlingProductResponse> => {
    const response = await axios.post<UsePostUrlCrawlingProductResponse>(mutationKey, { url });

    return response.data;
  };

  return useMutation({
    mutationKey: [mutationKey],
    mutationFn,
    ...options,
  });
}
