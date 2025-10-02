import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  padding: '0 1.6rem',
});

export const searchForm = style({
  display: 'flex',
  gap: '0.8rem',
  width: '100%',
});

export const searchInput = style({
  flex: 1,
  padding: '1.2rem 1.6rem',
  fontSize: '1.4rem',
  border: '1px solid #e0e0e0',
  borderRadius: '0.8rem',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  ':focus': {
    borderColor: '#FFC814',
  },
});

export const searchButton = style({
  padding: '1.2rem 2.4rem',
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#fff',
  backgroundColor: '#FF9800',
  border: 'none',
  borderRadius: '0.8rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: '#F57C00',
    transform: 'translateY(-2px)',
  },
  ':active': {
    transform: 'translateY(0)',
  },
});

export const filterSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const filterWrapper = style({
  position: 'relative',
});

export const categoryFilter = style({
  display: 'flex',
  gap: '0.8rem',
  overflowX: 'auto',
  overflowY: 'hidden',
  paddingBottom: '0.8rem',
  WebkitOverflowScrolling: 'touch',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const categoryButton = style({
  padding: '0.8rem 1.6rem',
  fontSize: '1.3rem',
  fontWeight: '500',
  color: '#666',
  backgroundColor: '#f5f5f5',
  border: '1px solid #e0e0e0',
  borderRadius: '2rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  ':hover': {
    backgroundColor: '#ececec',
  },
});

export const sortFilter = style({
  display: 'flex',
  gap: '0.8rem',
  overflowX: 'auto',
  overflowY: 'hidden',
  paddingBottom: '0.8rem',
  WebkitOverflowScrolling: 'touch',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const sortButton = style({
  padding: '0.8rem 1.4rem',
  fontSize: '1.3rem',
  fontWeight: '500',
  color: '#666',
  backgroundColor: '#fff',
  border: '1px solid #e0e0e0',
  borderRadius: '0.6rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  ':hover': {
    backgroundColor: '#f9f9f9',
  },
});

export const active = style({
  color: '#fff',
  backgroundColor: '#FF9800',
  borderColor: '#FF9800',
  fontWeight: '600',
  ':hover': {
    backgroundColor: '#F57C00',
  },
});

export const gradient = style({
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: '0.8rem',
  width: '4rem',
  background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.95))',
  pointerEvents: 'none',
});
