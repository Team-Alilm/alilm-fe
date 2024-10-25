import { tokens } from '@/styles';
import { createTheme, keyframes, style } from '@vanilla-extract/css';

export const overlay = style({
  backgroundColor: tokens.colors.overlay,
  position: 'fixed',
  inset: '0',
});

export const content = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '32.4rem',
  minHeight: '11.25rem',
  background: tokens.colors.surface,
  borderRadius: '2.4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2.4rem',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: '700',
  textAlign: 'center',
  color: tokens.colors.textPrimary,
  marginBottom: '1.4rem',
  lineHeight: '3rem',
});

export const description = style({
  fontSize: '1.5rem',
  textAlign: 'center',
  color: tokens.colors.textPrimary,
  marginBottom: '3rem',
  whiteSpace: 'pre-line',
});

export const btnContainer = style({
  width: '100%',
  height: '5.1rem',
  display: 'flex',
  gap: 8,
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '1.6rem',
  marginTop: 'auto',
});

const alertBtnStyles = style({
  all: 'unset',
  width: '100%',
  height: '100%',
  padding: '0 2%',
  borderRadius: '0.8rem',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  cursor: 'pointer',
});

export const cancelBtn = style([
  alertBtnStyles,
  {
    backgroundColor: tokens.colors.surface,
    border: '0.1rem solid',
    borderColor: tokens.colors.border,
  },
]);

export const mainBtnText = style([
  alertBtnStyles,
  {
    backgroundColor: '#000',
    color: '#fff',
  },
]);

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

export const theme = themeClass;
