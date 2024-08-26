import { style } from '@vanilla-extract/css';

export const createPage = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: '32px',
  background: '#FFFFFF',
});

export const title = style({
  fontSize: '22px',
  fontWeight: '600',
  marginBottom: '40px',
});

export const createForm = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '100%',
});

export const buttonDescription = style({
  fontSize: '13px',
  color: '#3E3E3E',
  textAlign: 'center',
});
