import { style } from '@vanilla-extract/css';

export const myBasketCard = style({
  position: 'relative',
  minWidth: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '3.25%',
});

export const productInfo = style({
  width: '60%',
});

export const name = style({
  fontSize: '1.4rem',
  fontWeight: '700',
  marginBottom: '6px',
  cursor: 'pointer',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: '1.2',
});

export const options = style({
  width: '100%',
  height: '1.6rem',
  fontSize: '1.3rem',
  fontWeight: '400',
  marginBottom: '6px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

export const myBasketBadgeList = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  margin: '6px 0',
});

export const price = style({
  fontSize: '16px',
  fontWeight: '700',
  color: '#333',
});
