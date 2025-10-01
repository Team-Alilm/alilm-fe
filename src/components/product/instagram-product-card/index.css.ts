import { style } from '@vanilla-extract/css';

export const card = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '1',
  overflow: 'hidden',
  cursor: 'pointer',
  backgroundColor: '#fafafa',
  transition: 'opacity 0.2s ease',

  ':hover': {
    opacity: 0.85,
  },
});

export const imageWrapper = style({
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const image = style({
  objectFit: 'cover',
  transition: 'transform 0.3s ease',

  ':hover': {
    transform: 'scale(1.05)',
  },
});

export const overlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.2s ease',

  ':hover': {
    opacity: 1,
  },
});

export const waitingInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  color: '#fff',
  fontSize: '1.6rem',
  fontWeight: '600',
});

export const waitingCount = style({
  fontSize: '1.6rem',
  fontWeight: '600',
});
