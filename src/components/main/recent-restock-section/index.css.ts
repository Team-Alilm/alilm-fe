import { style } from '@vanilla-extract/css';

export const firstModule = style({
  padding: '2rem 0',
  background: '#FFF9E6',
  margin: '2rem 0',
  borderRadius: '0.8rem',
  overflow: 'hidden',
});

export const sectionHeader = style({
  padding: '0 2rem',
  marginBottom: '1.5rem',
});

export const sectionSubtitle = style({
  fontSize: '1.4rem',
  fontWeight: '400',
  color: '#999',
  paddingLeft: '0rem',
});

export const cardWrapper = style({
  marginRight: '1.2rem',
  transition: 'transform 0.2s ease',
  background: '#FFFFFF',
  overflow: 'hidden',
  borderRadius: '0.6rem',

  selectors: {
    '&.swiper-slide': {
      width: '17rem',
    },
    '&:hover': {
      transform: 'translateY(-0.3rem)',
    },
  },
});

export const restock = style({
  fontSize: '2.4rem',
  fontWeight: '700',
  color: '#333',
  padding: '0 0 0.8rem 2rem',
  marginBottom: '0rem',
});

export const topBadge = style({
  position: 'absolute',
  top: '1rem',
  left: '1rem',
  background: '#FFB800',
  color: '#7A4800',
  padding: '0.5rem 0.9rem',
  fontSize: '1.2rem',
  fontWeight: 700,
  zIndex: 2,
  borderRadius: '0.4rem',
});

export const productInfo = style({
  padding: '1rem',
  textAlign: 'left',
});

export const brandName = style({
  fontSize: '1.2rem',
  fontWeight: '500',
  color: '#999',
  marginBottom: '0.6rem',
});

export const productName = style({
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#333',
  lineHeight: '1.4',
  marginBottom: '0.8rem',

  // 2줄까지만 보여주고 나머지는 생략
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const price = style({
  fontSize: '1.6rem',
  fontWeight: '700',
  color: '#333',
});
