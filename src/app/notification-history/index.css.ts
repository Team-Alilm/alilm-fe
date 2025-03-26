import { infoBox } from '@/components/product/my-basket-card-list/index.css';
import { style } from '@vanilla-extract/css';

export const notification = style({
  padding: '1.6rem',
  //   borderBottom: '0.1px solid #e0e0e0',
  transition: 'background 0.2s ease-in-out',
  ':hover': {
    background: '#f5f5f5',
  },
});

export const notificationContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1.2rem',
  cursor: 'pointer',
});

export const readNotification = style({
  background: '#f0f0f0',
  opacity: '0.6',
  cursor: 'default',
  ':hover': {
    background: '#f0f0f0',
  },
});

export const notificationTextWrapper = style({
  flex: 1,
});

export const notificationType = style({
  fontSize: '1.2rem',
  color: '#888',
  marginBottom: '0.8rem',
});

export const brandName = style({
  fontSize: '1.4rem',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '0.2rem',
});

export const notificationProduct = style({
  fontSize: '1.3rem',
  color: '#666',
  marginBottom: '0.2rem',

  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreak: 'break-word',
});

export const notificationOptions = style({
  fontSize: '1.2rem',
  color: '#888',
  marginTop: '0.4rem',
});

export const notificationImage = style({
  width: '5rem',
  height: '5rem',
  borderRadius: '0.8rem',
  objectFit: 'cover',
});

export const info = style([infoBox, { margin: '0' }]);

export const infoWrapper = style({
  padding: '1.6rem',
});

export const readAllBtn = style({
  all: 'unset',
  textDecoration: 'underline',
  cursor: 'pointer',
});

export const infoBoxInner = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});
