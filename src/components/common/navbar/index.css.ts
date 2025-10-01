import { style } from '@vanilla-extract/css';

export const navbar = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  minWidth: '32rem',
  maxWidth: '60rem',
  height: '60px',
  backgroundColor: '#fff',
  borderTop: '1px solid #e5e7eb',
  display: 'flex',
  justifyContent: 'space-evenly', // 균등 간격
  alignItems: 'center',
  zIndex: 50,
});

export const navItem = style({
  flex: 1, // 각 항목 동일 너비
  height: '100%',
  display: 'flex',
  flexDirection: 'column', // 세로 배치
  alignItems: 'center', // 가로 중앙 정렬
  justifyContent: 'center', // 세로 중앙 정렬
  textAlign: 'center',
  fontSize: '11px', // 텍스트 크기 조금 줄임
  color: '#555',
  textDecoration: 'none',
  gap: '2px', // 아이콘과 텍스트 사이 간격
  selectors: {
    '&:hover': { color: 'orange' },
  },
});

export const active = style({
  color: 'gray',
  fontWeight: 'bold',
});

export const centerButton = style({
  position: 'relative',
  width: '6rem',
  height: '6rem',
  borderRadius: '50%',
  backgroundColor: '#FFB600',
  border: '3px solid #FFB600',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transform: 'translateY(-15px)', // Navbar 위쪽으로 15px 올라감
  selectors: {
    '&:hover': {
      transform: 'translateY(-12px) scale(1.05)',
    },
    '&:active': {
      transform: 'translateY(-12px) scale(0.95)',
    },
  },
});

export const centerButtonIcon = style({
  width: '24px',
  height: '24px',
  fill: '#FFB600',
  color: '#ffffff', // SVG fill도 흰색으로
});
