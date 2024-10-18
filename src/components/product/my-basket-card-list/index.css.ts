import { style } from '@vanilla-extract/css';

export const cardListHome = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  columnGap: '1vw',
  rowGap: '5vh',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});

export const cardListMypage = style({
  display: 'grid',
  // gridTemplateColumns: 'repeat(1fr)',
  rowGap: '2.4rem',
});
