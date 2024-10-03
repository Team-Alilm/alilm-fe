import { createGlobalTheme } from '@vanilla-extract/css';

export const fonts = createGlobalTheme(':root', {
  font: {
    body: 'Roboto, sans-serif',
    heading: 'Montserrat, sans-serif',
    monospace: 'Source Code Pro, monospace',
  },
});
