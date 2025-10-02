import { tokens } from '@/styles';
import { style } from '@vanilla-extract/css';

export const productImage = style({
  width: '100%',
  backgroundColor: '#F8F9FA',
  borderRadius: '0 0 2.4rem 2.4rem',
  overflow: 'hidden',
  boxShadow: '0 0.4rem 1.2rem rgba(0, 0, 0, 0.08)',
});

const baseButton = style({
  all: 'unset',
  height: '5.2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  border: '0.1rem solid #E5E7EB',
  borderRadius: '1.2rem',
  fontSize: '1.6rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  backgroundColor: '#FFFFFF',

  ':hover': {
    backgroundColor: '#F9FAFB',
    borderColor: '#D1D5DB',
    transform: 'translateY(-0.1rem)',
    boxShadow: '0 0.4rem 0.8rem rgba(0, 0, 0, 0.08)',
  },

  ':active': {
    transform: 'translateY(0)',
    boxShadow: '0 0.2rem 0.4rem rgba(0, 0, 0, 0.06)',
  },

  '@media': {
    'screen and (max-width: 768px)': {
      width: '41%',
      fontSize: '1.5rem',
      gap: '0.5rem',
    },
  },
});

export const waitingTogetherBtn = style([baseButton, { width: '26.5%' }]);

export const shareBtn = style([
  baseButton,
  {
    width: 'fit-content',
    padding: '0 1.4rem',
    minWidth: '5.2rem',
  },
]);

export const productInfo = style({
  padding: '2.4rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  backgroundColor: '#FFFFFF',
  margin: '2rem',
  borderRadius: '1.6rem',
  boxShadow: '0 0.2rem 0.8rem rgba(0, 0, 0, 0.06)',
});

const bigTextStyle = {
  fontSize: '2rem',
  lineHeight: '2.387rem',
};

export const productName = style({
  ...bigTextStyle,
  fontWeight: '700',
  color: '#1A1A1A',
});

export const option = style({
  fontSize: '1.4rem',
  lineHeight: '2rem',
  color: '#6B7280',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.4rem',
});

export const price = style({
  ...bigTextStyle,
  fontWeight: '700',
  marginTop: '0.4rem',
  color: '#111827',
  fontSize: '2.4rem',
});

export const buttonSection = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '1.2rem',
  padding: '0 2rem 2rem',

  '@media': {
    'screen and (max-width: 768px)': {
      padding: '0 2rem 2rem',
    },
  },
});

export const listSection = style({
  margin: '4rem 0 6rem',
  backgroundColor: '#FAFAFA',
  padding: '3rem 0',
});

export const listTitle = style({
  fontSize: '1.8rem',
  fontWeight: '700',
  paddingLeft: '2rem',
  paddingBottom: '2rem',
  color: '#1A1A1A',
});

// swiper 페이지네이션 스타일
export const swiperPaginationWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
});

export const swiperPaginationFraction = style({
  width: '6rem',
  height: '3.6rem',
  backgroundColor: 'rgba(17, 24, 39, 0.75)',
  backdropFilter: 'blur(8px)',
  borderRadius: '10rem',
  alignContent: 'right',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '600',
  fontSize: '1.4rem',
  margin: '0 2rem 2rem 0',
  boxShadow: '0 0.2rem 0.8rem rgba(0, 0, 0, 0.15)',
});

export const swiperPaginationCurrent = style({
  color: '#ffffff',
});

export const swiperPaginationTotal = style({
  color: '#979797',
});

export const swiperPaginationSlash = style({
  color: '#979797',
  margin: '0 0.2rem',
});

// 로딩 텍스트 스타일
export const loadingText = style({
  height: '20rem',
  fontSize: '2rem',
  color: tokens.colors.textSecondary,
  textAlign: 'center',
  padding: '8rem 0',
});

export const section = style({
  display: 'flex',
  justifyContent: 'space-between',
});
