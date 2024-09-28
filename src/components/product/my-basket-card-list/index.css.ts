import { style } from '@vanilla-extract/css';

export const myBasketCardList = style({
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
