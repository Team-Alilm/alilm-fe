import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const imageWrapper = recipe({
  base: {
    position: 'relative',
  },
  variants: {
    card: {
      thin: { width: '100%' },
      full: {
        width: '38%',
      },
    },
  },
  defaultVariants: {
    card: 'thin',
  },
});

export const icon = style({
  position: 'absolute',
  top: '4%',
  right: '5%',
  zIndex: '2',
  width: '2rem',
});

export const thumbnailImage = recipe({
  base: {
    borderRadius: '1.2rem',
    objectFit: 'cover',
  },
  variants: {
    card: {
      thin: {
        width: '100%',
        minHeight: '21.8rem',
        maxHeight: '21.8rem',
      },
      full: {
        aspectRatio: '1/1.2',
      },
    },
  },
  defaultVariants: {
    card: 'thin',
  },
});
