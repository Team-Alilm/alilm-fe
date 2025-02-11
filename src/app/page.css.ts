import { style } from '@vanilla-extract/css';

export const mainPage = style({
  width: '100%',
  height: '100%',
  padding: '0 12px',
  background: '#FFFFFF',
});

export const cardWrapper = style({
  selectors: {
    '&.swiper-slide': {
      width: '20rem',
    },
  },
});

export const restock = style({
  fontSize: '2rem',
  textAlign: 'center',
  paddingBottom: '2.2rem',
});
