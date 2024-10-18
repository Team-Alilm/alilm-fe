import { createGlobalTheme } from '@vanilla-extract/css';

export const tokens = createGlobalTheme(':root', {
  colors: {
    primary: '#6200ee',
    secondary: '#03dac6',
    background: '#f6f6f6',
    surface: '#ffffff',
    error: '#b00020',
    textPrimary: '#000000',
    textSecondary: '#757575',

    productName: '#101010',
    productOptions: '#303030',
    waitingCount: '#303030',

    categoryTagBg: '#EBF0FF',
    categoryTagText: '#456AEB',

    overlay: 'rgba(0, 0, 0, 0.6)',
    border: '#DDDDDD',

    white: '#fff',
    profileBackground: '#F4F4F4',
    mypageText: '#505050',
  },

  // shadows: {}

  // borderRadius: {}

  // zIndex: {}
});
