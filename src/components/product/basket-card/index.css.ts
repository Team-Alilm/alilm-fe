import { style } from '@vanilla-extract/css';

export const basketCard = style({
  minWidth: '100px',
  width: '30%',
  cursor: 'pointer',
});

export const thumbnailImage = style({
  width: '100%',
  maxHeight: '218px',
  borderRadius: '4px',
});

export const description = style({
  fontSize: '14px',
  fontWeight: '700',
  marginBottom: '6px',
});

export const options = style({
  fontSize: '13px',
  fontWeight: '400',
  marginBottom: '12px',
});

export const waitTogetherButton = style({
  border: '1px solid #EEEEEE',
  borderRadius: '4px',
  height: '33px',
  padding: '0 14px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#101010',
  background: '#FFFFFF',
  cursor: 'pointer',
});

export const basketBadgeList = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  margin: '6px 0',
});

export const basketBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '22px',
  padding: '0 8px',
  color: '#456AEB',
  background: '#EBF0FF',
  fontSize: '12px',
  fontWeight: '700',
});
