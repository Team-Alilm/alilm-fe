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

export const iconWrapper = style({
  position: 'absolute',
  top: '4%',
  right: '6%',
  backgroundColor: 'rgba(233, 229, 245, 0.97)',
  width: '3rem',
  height: '3rem',
  backdropFilter: 'blur(0.4rem)',
  borderRadius: '100%',
  zIndex: '2',
  display: 'flex',
  fontSize: '1.2rem',
  alignItems: 'center',
  padding: '0.5rem',
});

export const iconWrapper1 = style({
  position: 'absolute',
  top: '82%',
  right: '4%',
  backgroundColor: 'rgba(240, 236, 204, 0.97)',
  width: '4rem',
  height: '2.4rem',
  backdropFilter: 'blur(0.4rem)',
  borderRadius: '8px',
  zIndex: '2',
  display: 'flex',
  fontSize: '1.4rem',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  color: 'rgba(227, 154, 8, 0.9)',
});

export const iconBackground = style({
  width: '2.4rem',
  height: '2.4rem',
  borderRadius: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(0.4rem)',
  position: 'absolute',
  top: '4%',
  right: '5%',
  zIndex: '2',
  textAlign: 'center',
});

export const icon = style({
  width: '1.6rem',
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

    borderRadius: {
      rounded: {
        borderRadius: '1.2rem',
      },
      none: {
        borderRadius: '0',
      },
    },
  },
  defaultVariants: {
    card: 'thin',
    borderRadius: 'rounded',
  },
});
