import { style } from '@vanilla-extract/css';

export const select = style({
  fontSize: '15px',
  color: '#3E3E3E',
  height: '54px',
  width: '100%',
  padding: '0 40px 8px 12px',
  background: '#FFFFFF',
  border: '1px solid #CACACA',
  borderRadius: '4px',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

export const label = style({
  fontSize: '14px',
  fontWeight: '600',
});

export const chevronDownIcon = style({
  position: 'absolute',
  right: '10px',
  pointerEvents: 'none',
});
