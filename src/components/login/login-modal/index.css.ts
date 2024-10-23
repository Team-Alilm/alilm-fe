import { tokens } from '@/styles';
import { style } from '@vanilla-extract/css';

export const loginModal = style({
  width: '32.4rem',
  height: '34.2rem',
  padding: '2.4rem',
  backgroundColor: tokens.colors.surface,
  borderRadius: '3.2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1.2rem',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
});

export const closeModalBtn = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingBottom: '2rem',
});

export const textSection = style({
  textAlign: 'center',
});

export const loginTitle = style({
  fontSize: '2.8rem',
  fontWeight: 700,
  lineHeight: '4rem',
  whiteSpace: 'pre-line',
  color: '#101010',
});

export const loginDescription = style({
  fontSize: '1.5rem',
  fontWeight: 500,
  color: '#101010',
  lineHeight: '4.2rem',
});
