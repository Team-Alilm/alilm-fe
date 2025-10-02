import { tokens } from '@/styles';
import { keyframes, style } from '@vanilla-extract/css';

export const basketCard = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  minWidth: '15.8rem',
  maxWidth: '17.6rem',
  height: '100%',
  backgroundColor: '#FFFFFF',
  borderRadius: '1.2rem',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  boxShadow: '0 0.2rem 0.8rem rgba(0, 0, 0, 0.06)',

  ':hover': {
    transform: 'translateY(-0.6rem)',
    boxShadow: '0 0.8rem 2.4rem rgba(0, 0, 0, 0.12)',
  },
});

export const productInfo = style({
  width: '100%',
  cursor: 'pointer',
  padding: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
});

export const brand = style({
  fontSize: '1.2rem',
  fontWeight: '600',
  color: '#6B7280',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

export const name = style({
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#1F2937',
  lineHeight: '1.5',
  minHeight: '4.2rem',

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
  color: '#111827',
  marginTop: '0.2rem',
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

export const waitingInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  padding: '0.8rem 1.2rem',
  backgroundColor: '#F3F4F6',
  borderTop: '1px solid #E5E7EB',
  fontSize: '1.3rem',
  color: '#6B7280',
  fontWeight: '500',
});

export const waitingCount = style({
  fontWeight: '700',
  color: '#F59E0B',
  fontSize: '1.4rem',
});

export const waitTogetherButton = style({
  display: 'flex',
  gap: '0.6rem',
  justifyContent: 'center',
  border: 'none',
  borderRadius: '0',
  height: '4rem',
  alignItems: 'center',
  padding: '0 1.6rem',
  fontSize: '1.3rem',
  fontWeight: '600',
  color: '#FFFFFF',
  background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  transition: 'all 0.2s ease',
  width: '100%',

  ':hover': {
    background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
    transform: 'translateY(-0.1rem)',
  },

  ':active': {
    transform: 'translateY(0)',
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
