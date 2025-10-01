import { tokens } from '@/styles';
import { style } from '@vanilla-extract/css';

export const mainPage = style({
  width: '100%',
  height: '100%',
  padding: '0 2rem',
  background: '#FFFFFF',
});

export const mainBanner = style({
  background: 'none',
  border: 'none',
  padding: 0,
  margin: '0 auto 2rem',
  display: 'flex',
  justifyContent: 'center',
});

export const bannerButton = style({
  all: 'unset',
  display: 'block',
  width: '100%',
  maxWidth: '60rem',
  cursor: 'pointer',
});

export const bannerImage = style({
  display: 'block',
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  cursor: 'pointer',
});

export const firstModule = style({
  padding: '2rem 0',
  background: 'linear-gradient(135deg, #FFF6CC 0%, #ffffff 100%)',
  borderRadius: '1.6rem',
  margin: '1rem',
  boxShadow: '0 4px 20px rgba(255, 182, 0, 0.1)',
});

export const secondModule = style({
  padding: '0 1rem',
});

export const cardWrapper = style({
  marginRight: '1.2rem',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',

  selectors: {
    '&.swiper-slide': {
      width: '18rem',
    },
    '&:hover': {
      transform: 'translateY(-0.5rem)',
      boxShadow: '0 8px 25px rgba(255, 182, 0, 0.2)',
    },
  },
});

export const restock = style({
  fontSize: '2.2rem',
  fontWeight: '700',
  color: '#935C00',
  padding: '0 0 2rem 2rem',
  marginBottom: '1rem',
  position: 'relative',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',

  '::after': {
    content: '""',
    position: 'absolute',
    bottom: '1rem',
    left: '2rem',
    width: '4rem',
    height: '0.3rem',
    background: 'linear-gradient(135deg, #FFDC66 0%, #FFB600 100%)',
    borderRadius: '0.15rem',
  },
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
  top: '1rem',
  left: '1rem',
  background: 'linear-gradient(135deg, #FFB600 0%, #EDA600 100%)',
  color: '#7A4800',
  padding: '0.6rem 1rem',
  fontSize: '1rem',
  fontWeight: 700,
  borderRadius: '2rem',
  boxShadow: '0 4px 12px rgba(255, 182, 0, 0.4)',
  zIndex: 2,
  cursor: 'pointer',
  transform: 'scale(1)',
  transition: 'transform 0.2s ease',

  selectors: {
    '&:hover': {
      transform: 'scale(1.05)',
      background: 'linear-gradient(135deg, #FFCD3F 0%, #FFB600 100%)',
    },
  },
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

export const productInfo = style({
  padding: '1rem',
  textAlign: 'left',
});

export const brandName = style({
  fontSize: '1.2rem',
  fontWeight: '500',
  color: '#935C00',
  marginBottom: '0.4rem',
});

export const productName = style({
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#333',
  lineHeight: '1.3',

  // 2줄까지만 보여주고 나머지는 생략
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
