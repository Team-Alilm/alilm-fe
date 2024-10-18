import { style } from '@vanilla-extract/css';

export const profile = style({
  width: '100%',
  height: '4.4rem',
  margin: '2.4rem 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  // flexDirection: 'column',
  // gap: '0.4rem',
});

export const nameText = style({
  fontSize: '2rem',
  fontWeight: '600',
});

export const emailText = style({
  fontSize: '1.2rem',
  fontWeight: '500',
});

export const logoutBtn = style({
  all: 'unset',
  height: '1.5rem',
  paddingTop: '1.6rem',
  marginRight: '1rem',
  fontSize: '1.2rem',
  fontWeight: '500',
  color: '#818181',
  borderBottom: '0.1rem solid #818181',
  cursor: 'pointer',
});
