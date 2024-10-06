import { tokens } from '@/styles';
import { fonts } from '@/styles/fonts.css';
import { style } from '@vanilla-extract/css';

export const basketCard = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  minWidth: '100px',
  margin: 'auto',
  width: '90%',
  height: '100%',
});

export const imageWrapper = style({});

export const thumbnailImage = style({
  width: '100%',
  minHeight: '21.8rem',
  height: '21.8rem',
  maxHeight: '21.8rem',

  // height: 'clamp(21.8rem, 21.8rem, 21.8rem)',
  objectFit: 'cover',
  borderRadius: '1.2rem',
});

export const name = style({
  fontSize: '1.4rem',
  fontWeight: '700',
  marginBottom: '0.6rem',
  color: tokens.colors.productName,

  // 2줄까지만 보여주고 나머지는 생략
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: '1.2',
  maxHeight: 'calc(14rem * 1.2 * 2)',
});

export const options = style({
  fontSize: '1.3rem',
  fontWeight: '400',
  marginBottom: '1.2rem',
  color: tokens.colors.productOptions,

  // 2줄까지만 보여주고 나머지는 생략
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: '1.2',
  maxHeight: 'calc(1.3rem * 1.2 * 2)',
});

export const waitTogetherButton = style({
  border: '1px solid #EEEEEE',
  borderRadius: '0.4rem',
  height: '33px',
  padding: '0 1.4rem',
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#101010',
  background: '#FFFFFF',
  cursor: 'pointer',
  marginTop: '1rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const waitingCount = style([
  fonts.waitingCount,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: tokens.colors.waitingCount,
  },
]);

export const waitingCountStrong = style([
  fonts.waitingCountStrong,
  {
    color: tokens.colors.waitingCount,
  },
]);
