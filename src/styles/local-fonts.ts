import localFont from 'next/font/local';

// font
export const Pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-SemiBold.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--Pretendard',
});

// const fonts=  {
//   base: style({
//     fontSize: ''
//   })
// }
