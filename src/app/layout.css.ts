import { tokens } from '@/styles';
import { style } from '@vanilla-extract/css';

export const layout = style({
  margin: '0 auto',
  width: '100%',
  minWidth: '32rem',
  maxWidth: '60rem',
  backgroundColor: tokens.colors.white,
  minHeight: '100vh',
});

export const header = style({
  height: '60px',
});

export const mainContent = style({
  overflow: 'auto', // 내용이 넘칠 경우 스크롤 가능
});
