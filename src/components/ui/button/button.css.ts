import { tokens } from '@/styles';
import { style } from '@vanilla-extract/css';

export const buttonStyle = style({
  backgroundColor: tokens.colors.primary,
  color: tokens.colors.surface,
  padding: '12px 24px',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  cursor: 'pointer',
});
