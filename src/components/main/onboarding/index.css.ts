import { globalStyle, keyframes, style } from '@vanilla-extract/css';

const bulletGrow = keyframes({
  '0%': { width: '1%' },
  '100%': { width: '16%' },
});

export const modal = style({
  width: '65%',
  height: 'auto',
  padding: '5% 1% 3.5% 1%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '3.2rem',
  backgroundColor: '#242424',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',

  '@media': {
    'screen and (max-width: 480px)': {
      width: '84%',
    },
  },
});

export const slide = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#242424',
});

export const imageContainer = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const buttonContainer = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'right',
  padding: '4% 4% 0 0',
});

export const nextButton = style({
  width: '18%',
  padding: '3.5% 0',
  backgroundColor: '#E6E6E6',
  color: '#303030',
  border: 'none',
  borderRadius: '100px',
  cursor: 'pointer',
  fontSize: '1.1rem',
  fontWeight: '700',
  zIndex: 10,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '64%',
  height: '100%',
});

globalStyle('.swiper-pagination-bullet.swiper-pagination-bullet-active', {
  width: '16%',
  borderRadius: '1rem',
  animation: `${bulletGrow} 0.2s ease-in-out`,
  backgroundColor: '#B9B9B9',
  height: '0.6vh',
});

globalStyle('.swiper-pagination-bullet:not(.swiper-pagination-bullet-active)', {
  backgroundColor: '#fff',
  height: '0.6vh',
  width: '0.6vh',
});

globalStyle('.swiper-pagination-bullets', {
  bottom: '0.2% !important',
});
