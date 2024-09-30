import { keyframes, style } from '@vanilla-extract/css';

const modalFadeIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(20px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const background = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '600px',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const onboardingModal = style({
  width: '65%',
  height: 'auto',
  padding: '8% 4%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '32px',
  backgroundColor: '#242424',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // 부드러운 그림자 효과
  animation: `${modalFadeIn} 0.5s ease-in-out`,

  '@media': {
    'screen and (max-width: 768px)': {
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

export const nextButton = style({
  all: 'unset',
  padding: '12px 24px', // 더 넉넉한 여백
  // backgroundColor: '#000000',
  color: '#fff',
  border: 'none',
  borderRadius: '8px', // 더 둥근 모서리
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: '600', // 굵은 글씨로 강조
  zIndex: 10,

  ':hover': {
    transform: 'scale(1.1)', // 좀 더 자연스러운 호버 색상
  },
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '0.9rem',
    },
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '64%',
  height: '100%',
  // marginBottom: '30px',
  textAlign: 'center', // 텍스트 가운데 정렬
});
