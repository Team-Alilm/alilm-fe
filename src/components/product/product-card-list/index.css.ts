import { style } from '@vanilla-extract/css';

export const productCardList = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const sectionHeader = style({
  width: '100%',
  padding: '0 2rem',
  textAlign: 'left',
});

export const sectionTitle = style({
  fontSize: '2.4rem',
  fontWeight: '700',
  color: '#333',
  marginBottom: '0.8rem',
});

export const sectionSubtitle = style({
  fontSize: '1.4rem',
  fontWeight: '400',
  color: '#999',
});

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
