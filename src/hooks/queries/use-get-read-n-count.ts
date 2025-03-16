import { get } from '@/libs/api/client';
import { useQuery } from '@tanstack/react-query';

interface ReadNCount {
  readNCount: number;
}

export const READ_N_COUNT_QUERY_KEY = 'getReadNCount';

export const getReadNCount = async () => {
  const data = await get<ReadNCount>('/member/my-alilm-history/read-n-count');

  return data;
};

export const useGetReadNCount = () => {
  return useQuery({
    queryKey: [READ_N_COUNT_QUERY_KEY],
    queryFn: getReadNCount,
  });
};
