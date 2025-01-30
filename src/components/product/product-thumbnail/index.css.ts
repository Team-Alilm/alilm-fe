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
  top: '80%',
  right: '8%',
  backgroundColor: 'rgba(233, 226, 168, 0.97)',
  width: '4rem',
  height: '2.4rem',
  backdropFilter: 'blur(0.4rem)',
  borderRadius: '8px',
  zIndex: '2',
  display: 'flex',
  justifyContent: 'space-around',
  fontSize: '1.4rem',
  alignItems: 'center',
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
  },
  defaultVariants: {
    card: 'thin',
  },
});
