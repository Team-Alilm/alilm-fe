import { style } from '@vanilla-extract/css';

export const basketCard = style({
  minWidth: '100px',
  width: '25%',
});

export const thumbnailImage = style({
  width: '100%',
  maxHeight: '218px',
  borderRadius: '4px',
});

export const name = style({
  fontSize: '14px',
  fontWeight: '700',
  marginBottom: '6px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis', // Replaces the overflowed content with an ellipsis (...)
});

export const options = style({
  fontSize: '13px',
  fontWeight: '400',
  marginBottom: '12px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
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
  marginTop: '10px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const waitingCount = style({
  fontSize: '14px',
  fontWeight: '400',
  color: '#666',
});
