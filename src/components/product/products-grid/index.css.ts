import { keyframes, style } from '@vanilla-extract/css';

const skeletonShimmer = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '0.2rem',
  width: '100%',
  margin: '0 auto',

  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '0.3rem',
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '0.4rem',
    },
  },
});

export const gridItem = style({
  position: 'relative',
  aspectRatio: '1',
  overflow: 'hidden',
  backgroundColor: '#e0e0e0',
  backgroundImage: 'linear-gradient(90deg, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%)',
  backgroundSize: '200% 100%',
  animation: `${skeletonShimmer} 1.5s infinite ease-in-out`,
});
