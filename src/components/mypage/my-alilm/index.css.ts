import { tokens } from '@/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
});

export const myAlilm = style({
  width: '100%',
  //   height: '101px',
  borderRadius: '1.6rem',
  padding: '7% 0',
  backgroundColor: tokens.colors.profileBackground,
});

export const alilmInfo = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  gap: '0.4rem',
});

export const alilmNum = style({
  fontSize: '2.8rem',
  fontWeight: '700',
  color: tokens.colors.mypageText,
});

export const alilmText = style({
  fontSize: '1.3rem',
  fontWeight: '500',
  color: tokens.colors.textSecondary,
});
