import { style } from '@vanilla-extract/css';

export const select = style({
  fontSize: '15px',
  color: '#3E3E3E',
  height: '54px',
  width: '100%',
  padding: '0 20px',
  background: '#FFFFFF',
  border: '1px solid #CACACA',
  borderRadius: '4px',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  cursor: 'pointer',
});

export const label = style({
  fontSize: '14px',
  fontWeight: '600',
});

export const chevronDownIcon = style({
  position: 'absolute',
  right: '20px',
  pointerEvents: 'none',
});
