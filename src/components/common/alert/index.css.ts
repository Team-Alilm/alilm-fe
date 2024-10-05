import { style } from '@vanilla-extract/css';

export const content = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '324px',
  height: '225px',
  background: '#fff',
  borderRadius: '24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0 2%',
});

export const title = style({
  fontSize: '20px',
  textAlign: 'center',
  color: '#333',
  padding: '10% 0 4% 0',
});

export const overlay = style({
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // 반투명 빨간 배경
  position: 'fixed',
  inset: '0', // 화면 전체를 덮음
});

export const button = style({
  all: 'unset',
  width: 'auto',
  cursor: 'pointer',
});
