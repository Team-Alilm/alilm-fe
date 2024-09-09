import { style } from '@vanilla-extract/css';

export const myBasketCard = style({
  minWidth: '100px',
  width: '30%',
  cursor: 'pointer',
});

export const thumbnailImage = style({
  width: '100%',
  maxHeight: '218px',
  borderRadius: '4px',
});

export const description = style({
  fontSize: '14px',
  fontWeight: '700',
  marginBottom: '6px',
});

export const options = style({
  fontSize: '13px',
  fontWeight: '400',
  marginBottom: '12px',
});

export const myBasketBadgeList = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  margin: '6px 0',
});
