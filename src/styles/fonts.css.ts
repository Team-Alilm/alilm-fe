import { style } from '@vanilla-extract/css';

import { tokens } from './colors.css';

const baseTextStyle = {
  color: tokens.color.textPrimary,
};

export const fonts = {
  waitingCount: style({
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '14.32px',
    ...baseTextStyle,
  }),
  waitingCountStrong: style({
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '14.32px',
    ...baseTextStyle,
  }),

  categoryText: style({
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '14.32px',
    ...baseTextStyle,
  }),
};
