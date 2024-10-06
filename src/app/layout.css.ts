import { style } from '@vanilla-extract/css';

export const layout = style({
  margin: '0 auto',
  maxWidth: '60prem',
  width: '100%',
  minWidth: '32rem',
  backgroundColor: '#ffffff',
  minHeight: '100vh',
});

export const header = style({
  height: '60px',
});

export const mainContent = style({
  overflow: 'auto', // 내용이 넘칠 경우 스크롤 가능
});
