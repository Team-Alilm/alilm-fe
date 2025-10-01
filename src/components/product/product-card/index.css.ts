import { tokens } from '@/styles';
import { keyframes, style } from '@vanilla-extract/css';

export const basketCard = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  minWidth: '15.8rem',
  maxWidth: '17.6rem',
  height: '100%',
  transition: 'transform 0.2s ease',

  ':hover': {
    transform: 'translateY(-0.4rem)',
  },
});

export const productInfo = style({
  width: '100%',
  cursor: 'pointer',
  marginTop: '1.2rem',
});

export const brand = style({
  fontSize: '1.2rem',
  fontWeight: '500',
  color: '#999',
  marginBottom: '0.6rem',
});

export const name = style({
  fontSize: '1.4rem',
  fontWeight: '600',
  marginBottom: '0.8rem',
  color: '#333',
  lineHeight: '1.4',

  // 2줄까지만 보여주고 나머지는 생략
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const price = style({
  fontSize: '1.6rem',
  fontWeight: '700',
  color: '#333',
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
  display: 'flex',
  gap: '0.6rem',
  justifyContent: 'center',
  border: '1px solid #FFB800',
  borderRadius: '0.6rem',
  height: '3.6rem',
  alignItems: 'center',
  padding: '0 1.6rem',
  fontSize: '1.3rem',
  fontWeight: '600',
  color: '#CC7A00',
  background: '#FFF9E6',
  cursor: 'pointer',
  marginTop: '1rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  transition: 'all 0.2s ease',

  ':hover': {
    background: '#FFB800',
    color: '#7A4800',
    transform: 'scale(1.02)',
  },
});

const skeletonShimmer = keyframes({
  '0%': { backgroundPosition: '-100rem 0' },
  '100%': { backgroundPosition: '100rem 0' },
});

// 기본 스켈레톤 스타일
export const skeletonBase = style({
  backgroundColor: '#e0e0e0',
  backgroundImage: 'linear-gradient(to right, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100rem 100%',
  animation: `${skeletonShimmer} 2s infinite linear`,
});

export const skeletonThumbnailImage = style([
  skeletonBase,
  {
    width: '100%',
    minHeight: '21.8rem',
    height: '21.8rem',
    maxHeight: '21.8rem',
    borderRadius: '1.2rem',
  },
]);

export const skeletonBadge = style([
  skeletonBase,
  {
    width: '3.7rem',
    height: '2.2rem',
    borderRadius: '0.2rem',
    marginTop: '1rem',
    marginBottom: '0.6rem',
  },
]);

export const skeletonName = style([
  skeletonBase,
  {
    width: '60%',
    height: '1.4rem',
    marginBottom: '0.6rem',
    borderRadius: '0.2rem',
  },
]);

export const skeletonOptions = style([
  skeletonBase,
  {
    width: '80%',
    height: '1.8rem',
    marginBottom: '1.2rem',
    borderRadius: '0.2rem',
  },
]);

export const skeletonWaitingCount = style([
  skeletonBase,
  {
    width: '50%',
    height: '1.8rem',
    marginBottom: '1rem',
    borderRadius: '0.2rem',
  },
]);

export const skeletonButton = style([
  skeletonBase,
  {
    width: '70%',
    height: '3.3rem',
    borderRadius: '0.4rem',
  },
]);
