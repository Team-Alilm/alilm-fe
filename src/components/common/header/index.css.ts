import { tokens } from '@/styles';
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

export const rightHeaderWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const loginBtn = style({
  all: 'unset',
  width: '13rem',
  height: '3.3rem',
  backgroundColor: tokens.colors.surface,
  borderRadius: '0.4rem',
  fontSize: '1.4rem',
  fontWeight: 700,
  textAlign: 'center',
  cursor: 'pointer',
});
