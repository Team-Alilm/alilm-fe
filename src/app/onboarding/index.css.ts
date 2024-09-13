import { style } from '@vanilla-extract/css';

export const onboardingPage = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: '32px',
});

export const swiperContainer = style({
  width: '100%',
  height: '100%',
});

export const slideContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});
