import { tokens } from '@/styles';
import { fonts } from '@/styles/fonts.css';
import { style } from '@vanilla-extract/css';

export const waitingCount = style([
  fonts.waitingCount,
  {
    height: '1.6rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    color: tokens.colors.waitingCount,
  },
]);

export const waitingCountStrong = style([
  fonts.waitingCountStrong,
  {
    color: tokens.colors.waitingCount,
  },
]);
