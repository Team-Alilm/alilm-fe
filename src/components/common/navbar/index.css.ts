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
  alignItems: 'center',
  justifyContent: 'center', // 텍스트 중앙
  textAlign: 'center',
  fontSize: '14px',
  color: '#555',
  textDecoration: 'none',
  selectors: {
    '&:hover': { color: 'orange' },
  },
});

export const active = style({
  color: 'gray',
  fontWeight: 'bold',
});
