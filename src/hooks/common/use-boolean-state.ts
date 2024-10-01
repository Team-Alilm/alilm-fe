import { useCallback, useState } from 'react';

export default function useBooleanState() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const open = useCallback(() => setIsVisible(true), [setIsVisible]);

  const close = useCallback(() => setIsVisible(false), [setIsVisible]);

  const toggle = useCallback(() => setIsVisible(prev => !prev), [setIsVisible]);

  return { isVisible, open, close, toggle };
}
