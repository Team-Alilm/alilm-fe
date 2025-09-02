import { put } from '@/libs/api/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { NOTIFICATION_HISTORY_QUERY_KEY } from '../queries/use-get-notifications';
import { READ_N_COUNT_QUERY_KEY } from '../queries/use-get-read-n-count';

const patchAlilmReadAll = async () => {
  await put('/notifications/read-all');
};

export const usePatchAlilmReadAll = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchAlilmReadAll,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [NOTIFICATION_HISTORY_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [READ_N_COUNT_QUERY_KEY] });
    },
  });
};
