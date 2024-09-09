import { style } from '@vanilla-extract/css';

export const basketCard = style({
  minWidth: '100px',
  width: '30%',
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
  whiteSpace: 'nowrap', // Prevents text from wrapping to the next line
  overflow: 'hidden', // Ensures that the overflowed content is hidden
  textOverflow: 'ellipsis', // Replaces the overflowed content with an ellipsis (...)
});

export const brand = style({
  fontSize: '14px',
  fontWeight: '400',
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
  marginTop: '10px',
});

export const basketBadgeList = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  margin: '6px 0',
});

export const waitingCount = style({
  fontSize: '14px',
  fontWeight: '400',
  color: '#666',
});
