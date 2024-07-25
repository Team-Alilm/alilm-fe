import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const button = recipe({
  base: {
    width: '100%',
    height: '54px',
    padding: '0 24px',
    fontSize: '16px',
    fontWeight: '700',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  variants: {
    disabled: {
      true: {
        color: '#FFFFFF',
        background: '#A9A9A9',
      },
      false: {
        color: '#FFFFFF',
        background: '#222222',
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const description = style({
  marginTop: '12px',
});
