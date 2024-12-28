import { tokens } from '@/styles';
import { style } from '@vanilla-extract/css';

export const previewImageWrapper = style({
  width: '100%',
  height: '40vh',
  position: 'relative',
  overflow: 'hidden',
});

export const previewImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  borderRadius: '8px',
  background: '#EAEAEA',
});

export const brand = style({
  fontSize: '1.4rem',
  fontWeight: '600',
  marginBottom: '0.6rem',
});

export const productName = style({
  fontSize: '1.4rem',
});

export const pending = style({
  height: '20rem',
  fontSize: '2rem',
  color: tokens.colors.textSecondary,
  textAlign: 'center',
  padding: '8rem 0',
});
