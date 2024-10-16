import { style } from '@vanilla-extract/css';

export const profile = style({
  width: '100%',
  height: '4.4rem',
  margin: '2.4rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const nameText = style({
  fontSize: '2rem',
  fontWeight: '600',
});

export const emailText = style({
  fontSize: '1.2rem',
  fontWeight: '500',
});
