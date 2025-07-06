import { style, globalStyle } from '@vanilla-extract/css';

export const createPage = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: '32px',
  background: '#FFFFFF',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: '600',
  marginBottom: '40px',
  textAlign: 'center',
  lineHeight: '2.8rem',
});

export const wrapper = style({
  position: 'relative',
});

export const header = style({
  fontSize: '1.8rem',
  fontWeight: '600',
  margin: '3rem 3rem 0.5rem 0',
  textAlign: 'right',
  lineHeight: '2.8rem',
  color: '#FFC400',
  cursor: 'pointer',
});

export const dropdown = style({
  position: 'absolute',
  marginTop: '0',
  left: '66%',
  backgroundColor: 'white',
  marginRight: '3rem',
  border: '1px solid #ccc',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  zIndex: 10,
  padding: '4px 0',
  borderRadius: '8px',
  width: '24vh',
});

export const dropdownItem = style({
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
  textDecoration: 'none',
  color: 'inherit',
  borderRadius: '6px',
  selectors: {
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
});

export const logoImage = style({
  objectFit: 'contain',
  marginRight: '8%',
  borderRadius: '100%',
});

// ✅ dropdown 내 a 태그 스타일은 globalStyle로 설정
globalStyle(`${dropdown} a`, {
  display: 'block',
  padding: '8px 16px',
  textDecoration: 'none',
  color: '#000',
  transition: 'background-color 0.2s',
});

globalStyle(`${dropdown} a:hover`, {
  backgroundColor: '#f5f5f5',
});

export const createForm = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '100%',
});

export const buttonDescription = style({
  fontSize: '13px',
  color: '#3E3E3E',
  textAlign: 'center',
});

export const logoImageWrapper = style({
  display: 'flex',
  gap: '1.2rem',
  margin: '1.6rem 0',
});
