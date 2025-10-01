import { style } from '@vanilla-extract/css';

export const basketCardList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  columnGap: '1.6rem',
  rowGap: '3.2rem',
  padding: '0 2rem',
  '@media': {
    'screen and (max-width: 529px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    'screen and (min-width: 360px) and (max-width: 403px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '1.2rem',
      paddingLeft: 'calc(max((100vw - 2 * 17.6rem - 1.2rem) / 2, 1.6rem))',
      paddingRight: 'calc(max((100vw - 2 * 17.6rem - 1.2rem) / 2, 1.6rem))',
    },
  },
});
