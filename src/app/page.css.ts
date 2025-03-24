import { style } from '@vanilla-extract/css';

export const mainPage = style({
  width: '100%',
  height: '100%',
  padding: '0 12px',
  background: '#FFFFFF',
});

export const cardWrapper = style({
  selectors: {
    '&.swiper-slide': {
      width: '18rem',
    },
  },
});

export const restock = style({
  fontSize: '2rem',
  textAlign: 'center',
  paddingBottom: '2.2rem',
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

export const iconWrapper = style({
  position: 'absolute',
  top: '80%',
  left: '3%',
  backgroundColor: 'rgba(100, 100, 100, 0.6)',
  boxShadow: '0 0 0 0.5px white',
  borderRadius: '0.3rem',
  width: '94%',
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
  display: 'grid',

  gridTemplateColumns: '1fr 1fr',
  height: '100%',
});

export const leftImage = style({
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
