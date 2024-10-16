import { colors } from '@/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const buttonStyle = style({
  backgroundColor: colors.color.primary,
  color: colors.color.surface,
  padding: '12px 24px',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  cursor: 'pointer',
});
