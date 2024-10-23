import { keyframes, style } from '@vanilla-extract/css';

const modalFadeIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(20px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const background = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '600px',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const modal = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  animation: `${modalFadeIn} 0.5s ease-in-out`,
});
