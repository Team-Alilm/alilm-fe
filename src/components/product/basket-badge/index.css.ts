import { tokens } from '@/styles';
import { fonts } from '@/styles/fonts.css';
import { style } from '@vanilla-extract/css';

export const basketBadge = style([
  fonts.categoryText,
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '22px',
    margin: '6px 0',
    padding: '0 8px',

    borderRadius: '2px',
    backgroundColor: tokens.colors.categoryTagBg,
    color: tokens.colors.categoryTagText,
  },
]);
