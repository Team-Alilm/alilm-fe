import { keyframes, style } from '@vanilla-extract/css';

const shimmer = keyframes({
  '0%': { backgroundPosition: '-100% 0' },
  '100%': { backgroundPosition: '100% 0' },
});

const fadeIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const productCard = style({
  background: '#F8F9FA',
  borderRadius: '1.6rem',
  padding: '2.4rem',
  marginTop: '2rem',
  border: '1px solid #E9ECEF',
  animation: `${fadeIn} 0.4s ease-out`,
});

export const previewImageWrapper = style({
  width: '100%',
  height: '32rem',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '1.2rem',
  marginBottom: '2rem',
  background: '#FFFFFF',
});

export const previewImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

export const productInfo = style({
  marginBottom: '2.4rem',
  padding: '1.6rem',
  background: '#FFFFFF',
  borderRadius: '1.2rem',
});

export const brand = style({
  fontSize: '1.3rem',
  fontWeight: '600',
  color: '#868E96',
  marginBottom: '0.8rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

export const productName = style({
  fontSize: '1.6rem',
  fontWeight: '600',
  color: '#212529',
  lineHeight: '1.5',
});

export const optionsSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const pending = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.6rem',
  minHeight: '24rem',
  padding: '4rem 0',
});

export const loadingText = style({
  fontSize: '1.6rem',
  fontWeight: '500',
  color: '#868E96',
  textAlign: 'center',
});

export const skeleton = style({
  background: 'linear-gradient(90deg, #F1F3F5 0%, #E9ECEF 50%, #F1F3F5 100%)',
  backgroundSize: '200% 100%',
  animation: `${shimmer} 1.5s infinite`,
  borderRadius: '0.8rem',
});

export const skeletonImage = style({
  width: '100%',
  height: '32rem',
  marginBottom: '2rem',
});

export const skeletonText = style({
  height: '2rem',
  marginBottom: '1.2rem',
});
