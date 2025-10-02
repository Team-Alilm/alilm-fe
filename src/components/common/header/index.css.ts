import { style } from '@vanilla-extract/css';

export const header = style({
  position: 'fixed',
  zIndex: 3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  minWidth: '32rem',
  maxWidth: '60rem',
  height: '6rem',
  borderBottom: '1px solid #ECECEC',
  background: '#FFFFFF',
  padding: '0 1.2rem',
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
  all: 'unset',
  position: 'relative',
  cursor: 'pointer',
});

export const notificationBadge = style({
  position: 'absolute',
  top: '0',
  right: '0',
  width: '0.8rem',
  height: '0.8rem',
  backgroundColor: '#FF0000',
  borderRadius: '50%',
});

export const loginBtn = style({
  all: 'unset',
  width: '13rem',
  height: '3.3rem',
  backgroundColor: '#333333',
  color: '#FFFFFF',
  borderRadius: '0.4rem',
  fontSize: '1.4rem',
  fontWeight: 700,
  textAlign: 'center',
  cursor: 'pointer',
});
