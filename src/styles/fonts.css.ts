import { style } from '@vanilla-extract/css';

import { tokens } from './colors.css';

const baseTextStyle = {
  color: tokens.color.textPrimary,
};

export const fonts = {
  waitingCount: style({
    fontSize: '1.2rem',
    fontWeight: '500',
    lineHeight: '1.432px',
    ...baseTextStyle,
  }),
  waitingCountStrong: style({
    fontSize: '1.2rem',
    fontWeight: '600',
    lineHeight: '1.432px',
    ...baseTextStyle,
  }),

  categoryText: style({
    fontSize: '1.2rem',
    fontWeight: '700',
    lineHeight: '1.432px',
    ...baseTextStyle,
  }),
};
