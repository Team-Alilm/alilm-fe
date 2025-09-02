import { tokens } from '@/styles';
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

export const basketCard = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  minWidth: '15.8rem',
  maxWidth: '17.6rem',

  height: '100%',
});

export const name = style({
  fontSize: '1.4rem',
  fontWeight: '700',
  marginBottom: '0.6rem',
  color: tokens.colors.productName,

  // 2줄까지만 보여주고 나머지는 생략
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: '1.2',
  maxHeight: 'calc(14rem * 1.2 * 2)',
});

export const productInfo = style({
  width: '100%',
  cursor: 'pointer',
});

export const options = style({
  fontSize: '1.3rem',
  fontWeight: '400',
  marginBottom: '1.2rem',
  color: tokens.colors.productOptions,

  // 2줄까지만 보여주고 나머지는 생략
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: '1.2',
  maxHeight: 'calc(1.3rem * 1.2 * 2)',
});
