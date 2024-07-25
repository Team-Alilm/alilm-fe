import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '60px',
  border: '1px solid black',
  background: '#2C2C2D',
  padding: '0 12px',
});

export const alilmIcon = style({
  cursor: 'pointer',
});
