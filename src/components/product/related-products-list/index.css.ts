import { style } from '@vanilla-extract/css';

export const cardList = style({
  width: '100%',
});

export const cardWrapper = style({
  selectors: {
    '&.swiper-slide': {
      width: '18rem',
    },
  },
});
