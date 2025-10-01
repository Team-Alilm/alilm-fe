import { style } from '@vanilla-extract/css';

export const swiper = style({
  width: '90%',
  minHeight: '15rem',
  justifySelf: 'center',
  padding: '0 1.1rem',
  marginTop: '0.5rem',
});

export const swiperSlide = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '0.25rem 0',
  minHeight: '13rem',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const category = style({
  all: 'unset',
  width: '6rem',
  minWidth: '6rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.3rem',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'opacity 0.3s ease',
  ':hover': {
    opacity: 0.7,
  },
});

export const categoryText = style({
  fontSize: '1rem',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
  lineHeight: '1.2',
});
