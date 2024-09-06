import { style } from '@vanilla-extract/css';

export const loginPage = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '32px',
  background: '#FFFFFF',
});

export const title = style({
  fontSize: '24px',
  fontWeight: 'bold',
  marginTop: '72px',
});

export const loginButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});
