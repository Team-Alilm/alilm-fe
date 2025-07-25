import { style } from '@vanilla-extract/css';

export const productCardList = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const swiper = style({
  width: '90%',
  justifySelf: 'center',
  padding: '0 1.1rem',
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
  width: '6.7rem',
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

export const sortSelectWrapper = style({
  position: 'relative',
  display: 'flex',
  textAlign: 'center',
});

export const sortSelect = style({
  appearance: 'none', // 브라우저 기본 스타일 제거
  padding: '8px 20px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  backgroundColor: '#fff',
  color: '#333',
  width: '100%',
  cursor: 'pointer',
});
