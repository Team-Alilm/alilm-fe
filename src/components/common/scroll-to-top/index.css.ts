import { style } from '@vanilla-extract/css';

export const scrollButton = style({
  position: 'fixed',
  bottom: '9rem',
  right: '2rem',
  width: '5rem',
  height: '5rem',
  borderRadius: '50%',
  backgroundColor: '#FFC814',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s ease',
  opacity: 0,
  visibility: 'hidden',
  transform: 'translateY(10px)',
  zIndex: 999,
  color: '#fff',

  ':hover': {
    backgroundColor: '#FFB800',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
  },

  ':active': {
    transform: 'translateY(0)',
  },
});

export const visible = style({
  opacity: 1,
  visibility: 'visible',
  transform: 'translateY(0)',
});
