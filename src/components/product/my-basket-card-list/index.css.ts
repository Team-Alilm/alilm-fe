import { tokens } from '@/styles';
import { style } from '@vanilla-extract/css';

export const cardListHome = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  columnGap: '1vw',
  rowGap: '5vh',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});

export const cardListMypage = style({
  display: 'grid',
  // gridTemplateColumns: 'repeat(1fr)',
  rowGap: '2.4rem',
});

export const infoBox = style({
  width: '100%',
  height: '4.9rem',
  borderRadius: '0.8rem',
  backgroundColor: tokens.colors.background,
  color: '#717171',
  padding: '1.6rem',
  fontSize: '1.4rem',
  marginBottom: '2.4rem',
  display: 'flex',
  gap: '0.8rem',
  alignItems: 'center',
});
