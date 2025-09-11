import { tokens } from '@/styles';
import { style } from '@vanilla-extract/css';

export const mainPage = style({
  width: '100%',
  height: '100%',
  padding: '0 2rem',
  background: '#FFFFFF',
});

export const firstModule = style({});

export const secondModule = style({
  padding: '0 1rem',
});

export const cardWrapper = style({
  marginRight: '1.2rem',

  selectors: {
    '&.swiper-slide': {
      width: '18rem',
    },
  },
});

export const restock = style({
  fontSize: '2rem',
  padding: '0 0 2.2rem 2rem',
});

export const late1 = style({
  fontSize: '2rem',
  textAlign: 'left',
  paddingLeft: '1rem',
  paddingBottom: '1rem',
});

export const late2 = style({
  fontSize: '1.3rem',
  textAlign: 'left',
  color: 'gray',
  paddingLeft: '1rem',
  paddingBottom: '2.2rem',
});

export const title = style({
  fontSize: '1.5rem',
  textAlign: 'left',
  color: 'black',
  paddingBottom: '0.3rem',
  fontWeight: 'bold',
});

export const title1 = style({
  fontSize: '1.4rem',
  textAlign: 'left',
  color: 'black',
  paddingBottom: '0.3rem',
});

export const iconWrapper = style({
  position: 'absolute',
  top: '62%',
  left: '4%',
  backgroundColor: 'rgba(100, 100, 100, 0.6)',
  boxShadow: '0 0 0 0.5px white',
  borderRadius: '0.3rem',
  width: '90%',
  height: '2.6rem',
  zIndex: '2',
  display: 'flex',
  fontSize: '1.1rem',
  gap: '0.3rem',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgb(255, 255, 255)',
});

export const slideLayout = style({
  display: 'flex',

  width: '100%',

  height: '100%',
});

export const parent = style({
  position: 'relative',
  height: '100%',
  width: '100%',
});

export const rightGrid = style({
  display: 'grid',
  marginLeft: '1rem',
  gap: '1rem',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  objectFit: 'cover',
});

export const topBadge = style({
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: '#FFB600',
  color: '#fff',
  padding: '0.4rem 0.9rem',
  fontSize: '1.1rem',
  fontWeight: 600,
  zIndex: 2,
  cursor: 'pointer',

  borderTopLeftRadius: '0.8rem',
  borderTopRightRadius: '0.4rem',
  borderBottomRightRadius: '0.4rem',
  borderBottomLeftRadius: '0rem',
});

export const topBadge1 = style({
  position: 'absolute',
  top: 5,
  left: 5,
  backgroundColor: 'rgba(240, 236, 204, 0.97)',
  color: '#E08A00',
  padding: '0.4rem 0.9rem',
  fontSize: '1.1rem',
  fontWeight: 600,
  zIndex: 2,
  cursor: 'pointer',

  borderTopLeftRadius: '0.4rem',
  borderTopRightRadius: '0.4rem',
  borderBottomRightRadius: '0.4rem',
  borderBottomLeftRadius: '0.4rem',
});

export const topBadge2 = style({
  position: 'absolute',
  top: 5,
  left: 5,
  backgroundColor: '#FFD000',
  color: '#2D2D2D',
  padding: '0.4rem 0.6rem',
  fontSize: '1.1rem',
  fontWeight: 600,
  zIndex: 2,
  cursor: 'pointer',
  borderTopLeftRadius: '0.4rem',
  borderTopRightRadius: '0.4rem',
  borderBottomRightRadius: '0.4rem',
  borderBottomLeftRadius: '0.4rem',
});

export const name = style({
  fontSize: '1.4rem',
  fontWeight: '700',
  marginTop: '0.2rem',
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
