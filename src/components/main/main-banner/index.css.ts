import { style } from '@vanilla-extract/css';

export const mainBanner = style({
  background: 'none',
  border: 'none',
  padding: 0,
  margin: '0 auto 2rem',
  display: 'flex',
  justifyContent: 'center',
});

export const bannerButton = style({
  all: 'unset',
  display: 'block',
  width: '100%',
  maxWidth: '600px',
  cursor: 'pointer',
});

export const bannerImage = style({
  display: 'block',
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  cursor: 'pointer',
});
