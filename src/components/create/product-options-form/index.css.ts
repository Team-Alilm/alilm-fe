import { tokens } from '@/styles';
import { style } from '@vanilla-extract/css';

export const previewImage = style({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  borderRadius: '8px',
  background: '#EAEAEA',
});

export const pending = style({
  height: '20rem',
  fontSize: '2rem',
  color: tokens.colors.textSecondary,
  textAlign: 'center',
  padding: '8rem 0',
});
