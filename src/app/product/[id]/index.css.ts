import { style } from '@vanilla-extract/css';

export const productImage = style({
  width: '100%',
});

export const waitingTogetherBtn = style({
  all: 'unset',
  width: '26.5%',
  height: '5.1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  border: '0.1rem solid #E6E6E6',
  borderRadius: '0.8rem',
  fontSize: '1.6rem',
  fontWeight: '600',
  cursor: 'pointer',

  '@media': {
    'screen and (max-width: 768px)': {
      width: '41%',
      fontSize: '1.5rem',
      gap: '0.5rem',
    },
  },
});

export const productInfo = style({
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

const bigTextStyle = {
  fontSize: '2rem',
  lineHeight: '2.387rem',
};

export const productName = style(bigTextStyle);
export const option = style({
  fontSize: '1.4rem',
  lineHeight: '1.671rem',
  color: '#303030',
});
export const price = style({
  ...bigTextStyle,
  fontWeight: '600',
  marginTop: '0.4rem',
});

export const buttonSection = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '0.8rem',

  '@media': {
    'screen and (max-width: 768px)': {
      padding: '2rem',
    },
  },
});

export const listSection = style({
  margin: '6rem 0',
});

export const listTitle = style({
  fontSize: '1.6rem',
  fontWeight: '500',
  paddingLeft: '2rem',
  paddingBottom: '1.6rem',
});

// swiper 페이지네이션 스타일
export const swiperPaginationWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
});

export const swiperPaginationFraction = style({
  width: '5.4rem',
  height: '3.5rem',
  backgroundColor: 'rgba(40, 40, 40, 0.6)',
  borderRadius: '6rem',
  alignContent: 'right',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '500',
  margin: '0 2.8rem 2.8rem 0',
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
