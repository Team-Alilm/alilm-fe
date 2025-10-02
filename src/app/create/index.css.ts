import { globalStyle, keyframes, style } from '@vanilla-extract/css';

const fadeIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const createPage = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  minHeight: 'calc(100vh - 8rem)',
  padding: '0',
  background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
});

export const container = style({
  maxWidth: '56rem',
  width: '100%',
  padding: '4rem 2rem',
  animation: `${fadeIn} 0.6s ease-out`,
});

export const header = style({
  textAlign: 'center',
  marginBottom: '4rem',
});

export const title = style({
  fontSize: '3.2rem',
  fontWeight: '700',
  marginBottom: '1.2rem',
  background: 'linear-gradient(135deg, #FFB800 0%, #FFC814 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  lineHeight: '1.4',
});

export const subtitle = style({
  fontSize: '1.6rem',
  fontWeight: '400',
  color: '#666',
  lineHeight: '1.6',
});

export const shopLinksWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '1.2rem',
  marginBottom: '3rem',
  flexWrap: 'wrap',
});

export const shopLink = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '1.2rem 2rem',
  background: '#FFFFFF',
  borderRadius: '1.2rem',
  textDecoration: 'none',
  color: '#333',
  fontSize: '1.4rem',
  fontWeight: '500',
  border: '2px solid #F0F0F0',
  transition: 'all 0.3s ease',
  selectors: {
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
      borderColor: '#FFB800',
    },
  },
});

export const wrapper = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
});

export const dropdownToggle = style({
  all: 'unset',
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#FFB800',
  cursor: 'pointer',
  padding: '0.8rem 1.6rem',
  borderRadius: '0.8rem',
  transition: 'all 0.2s ease',
  selectors: {
    '&:hover': {
      background: '#FFF9E6',
    },
  },
});

export const dropdown = style({
  position: 'absolute',
  top: '100%',
  right: '2rem',
  marginTop: '0.8rem',
  backgroundColor: 'white',
  border: '1px solid #E0E0E0',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
  zIndex: 10,
  borderRadius: '1.2rem',
  overflow: 'hidden',
  minWidth: '18rem',
});

export const dropdownItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  padding: '1.2rem 1.6rem',
  fontSize: '1.4rem',
  fontWeight: '500',
  textDecoration: 'none',
  color: '#333',
  transition: 'all 0.2s ease',
  selectors: {
    '&:hover': {
      backgroundColor: '#FFF9E6',
    },
  },
});

export const logoImage = style({
  objectFit: 'contain',
  borderRadius: '0.6rem',
});

globalStyle(`${dropdown} a`, {
  display: 'block',
  textDecoration: 'none',
  color: '#333',
  transition: 'background-color 0.2s',
});

globalStyle(`${dropdown} a:hover`, {
  backgroundColor: '#FFF9E6',
});

export const createForm = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  width: '100%',
  background: '#FFFFFF',
  padding: '3.2rem',
  borderRadius: '2rem',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
});

export const urlInputSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const inputLabel = style({
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#333',
  marginBottom: '0.4rem',
});

export const buttonDescription = style({
  fontSize: '1.3rem',
  color: '#666',
  textAlign: 'center',
  marginTop: '0.8rem',
});

export const logoImageWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '1.6rem',
  margin: '2rem 0',
});
