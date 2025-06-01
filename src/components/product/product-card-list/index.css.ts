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
  display: 'inline-block',
  textAlign: 'left',
});

export const sortButton = style({
  display: 'flex',
  alignItems: 'center',

  backgroundColor: '#fff',
  border: '1px solid #ccc',
  cursor: 'pointer',
  fontSize: '0.875rem',
  color: '#333',

  ':hover': {
    borderColor: '#888',
  },
});

export const dropdown = style({
  position: 'absolute',

  right: 0,
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '6px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  zIndex: 10,
});

export const dropdownItem = style({
  display: 'flex',
  alignItems: 'center',

  width: '100%',
  background: 'transparent',
  border: 'none',
  textAlign: 'left',
  fontSize: '0.875rem',
  color: '#333',
  cursor: 'pointer',
  transition: 'background-color 0.2s',

  selectors: {
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
});
