'use client';

import { type ReactElement, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }: { children: ReactElement | null }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  if (!mounted || typeof window === 'undefined') return null;

  const modalRoot = document.getElementById('modal-root');

  return modalRoot && children ? createPortal(children, modalRoot) : null;
};

export default Portal;
