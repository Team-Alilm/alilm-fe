import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  maxWidth: '100%',
  margin: '0 auto',
  padding: 0,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1.6rem',
});

export const title = style({
  fontSize: '2.4rem',
  fontWeight: '700',
  color: '#1a1a1a',
});
