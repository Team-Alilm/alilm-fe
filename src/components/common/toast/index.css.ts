import { tokens } from '@/styles';
import { keyframes, style } from '@vanilla-extract/css';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

export const toastContainer = style({
  width: '100%',
  height: '4.6rem',
  padding: '1.6rem 2rem',
  backgroundColor: tokens.colors.toast,
  borderRadius: '0.4rem',
  color: tokens.colors.white,
  fontSize: '1.4rem',
  animation: `${fadeIn} 300ms ease-out`,
  selectors: {
    '&[data-state="closed"]': {
      animation: `${fadeOut} 300ms ease-in`,
    },
  },
});

export const toastViewPort = style({
  position: 'fixed',
  top: '15%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '52.5rem',
  '@media': {
    'screen and (max-width: 480px)': {
      width: '90%',
    },
  },
});
