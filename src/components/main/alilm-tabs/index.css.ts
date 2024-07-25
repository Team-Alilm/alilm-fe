import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const alilmTabs = style({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
});

export const alilmTab = recipe({
  base: {
    fontSize: '20px',
    fontWeight: '700',
    paddingBottom: '2px',
    background: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  variants: {
    isActive: {
      true: {
        color: '#111111',
        borderBottom: '2px solid #111111',
      },
      false: {
        color: '#BDBDBD',
        borderBottom: '2px solid transparent',
      },
    },
  },
});
