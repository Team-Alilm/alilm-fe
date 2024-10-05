import { tokens } from '@/styles';
import { style } from '@vanilla-extract/css';

export const overlay = style({
  backgroundColor: tokens.colors.overlay,
  position: 'fixed',
  inset: '0',
});

export const content = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '32.4rem',
  minHeight: '11.25rem',
  background: tokens.colors.surface,
  borderRadius: '2.4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2.4rem',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: '700',
  textAlign: 'center',
  color: tokens.colors.textPrimary,
  marginBottom: '1.4rem',
  lineHeight: '3rem',
});

export const description = style({
  fontSize: '1.5rem',
  textAlign: 'center',
  color: tokens.colors.textPrimary,
  marginBottom: '3rem',
});

export const btnContainer = style({
  width: '100%',
  height: '5.1rem',
  display: 'flex',
  gap: 8,
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '1.6rem',
  marginTop: 'auto',
});

const alertBtnStyles = style({
  all: 'unset',
  width: '100%',
  height: '100%',
  padding: '0 2%',
  borderRadius: '0.8rem',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  cursor: 'pointer',
});

export const cancelBtn = style([
  alertBtnStyles,
  {
    backgroundColor: tokens.colors.surface,
    border: '0.1rem solid',
    borderColor: tokens.colors.border,
  },
]);

export const confirmBtn = style([
  alertBtnStyles,
  {
    backgroundColor: '#000',
    color: '#fff',
  },
]);
