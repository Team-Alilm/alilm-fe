import { get } from '@/libs/api/client';
import { useQuery } from '@tanstack/react-query';

export interface Banner {
  id: number;
  title: string;
  imageUrl: string;
  priority: number;
}

interface BannersApiResponse {
  code: string;
  message: string;
  data: {
    banners: Banner[];
  };
}

export const BANNERS_QUERY_KEY = 'getBanners';

export const getBannersResponse = async (): Promise<Banner[]> => {
  const response = await get<BannersApiResponse>('/banners');
  return response.data.banners;
};

export const useGetBanners = () => {
  return useQuery({
    queryKey: [BANNERS_QUERY_KEY],
    queryFn: getBannersResponse,
  });
};
