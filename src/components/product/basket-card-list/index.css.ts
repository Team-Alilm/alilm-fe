import { style } from '@vanilla-extract/css';

export const basketCardList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  columnGap: '1.8rem',
  rowGap: '5vh',
  padding: '0 2rem',
  '@media': {
    'screen and (max-width: 576px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});
