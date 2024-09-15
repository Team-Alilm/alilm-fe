import { style } from '@vanilla-extract/css';

export const layout = style({
  margin: '0 auto',
  maxWidth: '600px',
  width: '100%',
  minHeight: '100vh',
});

export const header = style({
  height: '60px',
});

export const mainContent = style({
  overflow: 'auto', // 내용이 넘칠 경우 스크롤 가능
});
