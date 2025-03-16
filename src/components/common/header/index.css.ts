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
  gap: '1.2rem',
});

export const notificationWrapper = style({
  position: 'relative',
  cursor: 'pointer',
});

export const notificationBadge = style({
  position: 'absolute',
  top: '-0.4rem',
  right: '-0.4rem',
  minWidth: '1.6rem',
  height: '1.6rem',
  backgroundColor: 'red',
  color: 'white',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  borderRadius: '99.9rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 0.4rem',
  lineHeight: '1',
  whiteSpace: 'nowrap',
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
