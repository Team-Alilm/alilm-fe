<<<<<<< HEAD
<<<<<<< HEAD
import { globalStyle, style } from '@vanilla-extract/css';
=======
import { style, globalStyle } from '@vanilla-extract/css';
>>>>>>> 3e4e0a7 (feat: 쇼핑몰바로가기 드롭다운)
=======
import { style, globalStyle } from '@vanilla-extract/css';
>>>>>>> a41c191 (feat: 쇼핑몰바로가기 드롭다운)

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
<<<<<<< HEAD
<<<<<<< HEAD
  display: 'flex',
  justifyContent: 'flex-end', // 우측 정렬
  width: '90%',
  color: '#FFC400',
  marginTop: '10%',
  marginLeft: '6%',
});

export const header = style({
  textDecoration: 'none',
  fontSize: '1.8rem',
  fontWeight: '600',
  lineHeight: '2.8rem',
  color: '#FFC400',
  cursor: 'pointer',
  all: 'unset',
  font: 'inherit', // 부모 폰트 상속
  selectors: {
    '&:hover': {
      cursor: 'pointer', // hover 시 밑줄 효과(선택)
    },
    '&:focus': {
      outline: 'none', // focus outline 제거 (선택)
    },
  },
=======
=======
>>>>>>> a41c191 (feat: 쇼핑몰바로가기 드롭다운)
});

export const header = style({
  fontSize: '1.8rem',
  fontWeight: '600',
  margin: '3rem 3rem 0.5rem 0',
  textAlign: 'right',
  lineHeight: '2.8rem',
  color: '#FFC400',
<<<<<<< HEAD
  cursor: 'pointer',
>>>>>>> 3e4e0a7 (feat: 쇼핑몰바로가기 드롭다운)
=======
>>>>>>> a41c191 (feat: 쇼핑몰바로가기 드롭다운)
});

export const dropdown = style({
  position: 'absolute',
<<<<<<< HEAD
<<<<<<< HEAD
  marginTop: '7%',
  left: '68%',
=======
  marginTop: '0',
  left: '66%',
>>>>>>> 3e4e0a7 (feat: 쇼핑몰바로가기 드롭다운)
=======
  marginTop: '0',
  left: '66%',
>>>>>>> a41c191 (feat: 쇼핑몰바로가기 드롭다운)
  backgroundColor: 'white',
  marginRight: '3rem',
  border: '1px solid #ccc',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  zIndex: 10,
  padding: '4px 0',
  borderRadius: '8px',
<<<<<<< HEAD
<<<<<<< HEAD
  width: '32%',
=======
  width: '24vh',
>>>>>>> 3e4e0a7 (feat: 쇼핑몰바로가기 드롭다운)
=======
  width: '24vh',
>>>>>>> a41c191 (feat: 쇼핑몰바로가기 드롭다운)
});

export const dropdownItem = style({
  justifyContent: 'space-between',
  alignItems: 'center',
<<<<<<< HEAD
<<<<<<< HEAD
  fontSize: '1.1rem',
=======
>>>>>>> 3e4e0a7 (feat: 쇼핑몰바로가기 드롭다운)
=======
>>>>>>> a41c191 (feat: 쇼핑몰바로가기 드롭다운)
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
