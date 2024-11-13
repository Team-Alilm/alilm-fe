import { style } from '@vanilla-extract/css';

export const myBasketCard = style({
  minWidth: '100%',
  width: '100%',
  display: 'flex',
  flex: '1 2',
  justifyContent: 'flex-start',
  gap: '3.25%',
});

export const thumbnailImage = style({
  maxWidth: '38%',
  maxHeight: '21.8rem',
  aspectRatio: '1/1',
  borderRadius: '1.2rem',
});

export const name = style({
  fontSize: '1.4rem',
  fontWeight: '700',
  marginBottom: '6px',
  cursor: 'pointer',
});

export const options = style({
  height: '1.6rem',
  fontSize: '1.3rem',
  fontWeight: '400',
  marginBottom: '6px',
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

export const deleteBtn = style({
  all: 'unset',
  lineHeight: '1.432rem',
  fontSize: '1.2rem',
  textAlign: 'center',
  padding: '0.4rem',
  marginTop: '0.6rem',
  color: '#9A9A9A',
  border: '0.1rem solid #EEEEEE',
  borderRadius: '0.4rem',
  cursor: 'pointer',
});
