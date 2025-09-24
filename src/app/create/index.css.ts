import { globalStyle, style } from '@vanilla-extract/css';

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
  display: 'flex',
  justifyContent: 'flex-end', // 우측 정렬
  width: '90%',
  color: '#FFC400',
  marginTop: '10%',
  marginLeft: '6%',
});

export const header = style({
  all: 'unset', // 버튼 기본 스타일 제거
  textDecoration: 'none',
  fontSize: '1.8rem',
  fontWeight: '600',
  lineHeight: '2.8rem',
  color: '#FFC400',
  cursor: 'pointer',
  font: 'inherit', // 부모 폰트 상속
  selectors: {
    '&:hover': {
      cursor: 'pointer', // hover 시 밑줄 효과(선택)
    },
    '&:focus': {
      outline: 'none', // focus outline 제거 (선택)
    },
  },
});

export const dropdown = style({
  position: 'absolute',
  marginTop: '7%',
  left: '68%',
  backgroundColor: 'white',
  marginRight: '3rem',
  border: '1px solid #ccc',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  zIndex: 10,
  padding: '4px 0',
  borderRadius: '8px',
  width: '32%',
});

export const dropdownItem = style({
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '1.1rem',
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
