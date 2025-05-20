import { style } from '@vanilla-extract/css';

export const productCardList = style({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '18px',
  rowGap: '40px',
});

export const swiper = style({
  width: '90%',
  justifySelf: 'center',
});

export const swiperSlide = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '1rem 0',
  minHeight: '18rem',
  justifyContent: 'center',
  alignItems: 'center',
});

export const category = style({
  all: 'unset',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.4rem',
  fontSize: '1.2rem',
  cursor: 'pointer',
});

export const noProducts = style({
  width: '100%',
  minHeight: '35.4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
