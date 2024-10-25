import { createTheme, keyframes, style } from '@vanilla-extract/css';

// 색상 테마 설정
const [themeClass, vars] = createTheme({
  colors: {
    background: '#d1d8e0',
    button: '#3867d6',
    buttonText: '#fff',
    buttonBorder: '#26de81',
  },
});

// 애니메이션 정의
const fadeIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale(0.9)',
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1)',
  },
});

// Flex 스타일
export const flex = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// Scene 스타일
export const scene = style({
  backgroundColor: vars.colors.background,
  height: '100vh',
});

// 버튼 스타일
export const button = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  ':focus': {
    outline: 'none',
  },
});

// 버튼 텍스트 스타일
export const buttonText = style({
  backgroundColor: vars.colors.button,
  color: vars.colors.buttonText,
  padding: '1em 3em',
  borderRadius: '3em',
  fontSize: '1rem',
  fontWeight: 600,
  lineHeight: 1,
  fontFamily: 'Lato, sans-serif',
  whiteSpace: 'nowrap',
  position: 'relative',
  zIndex: 1,
  letterSpacing: '0.075em',
  border: `3px solid transparent`,
  textTransform: 'uppercase',
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'scale(1.05)',
  },
});

// Confetti 스타일
export const confetti = style({
  position: 'relative',
});

// Confetti Image 스타일
export const confettiImage = style({
  position: 'absolute',
  width: '400px',
  height: '400px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

// Modal 스타일
export const modal = style({
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '2rem',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  animation: `${fadeIn} 0.3s ease-out`,
});

// Overlay 스타일 (모달 배경)
export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
});

export const theme = themeClass;
