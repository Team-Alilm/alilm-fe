import { globalStyle } from '@vanilla-extract/css';

const parentElement = [
  'html',
  'body',
  'div',
  'span',
  'applet',
  'object',
  'iframe',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'blockquote',
  'pre',
  'a',
  'abbr',
  'acronym',
  'address',
  'big',
  'cite',
  'code',
  'del',
  'dfn',
  'em',
  'img',
  'ins',
  'kbd',
  'q',
  's',
  'samp',
  'small',
  'strike',
  'strong',
  'sub',
  'sup',
  'tt',
  'var',
  'b',
  'u',
  'i',
  'center',
  'dl',
  'dt',
  'dd',
  'ol',
  'ul',
  'li',
  'fieldset',
  'form',
  'label',
  'legend',
  'table',
  'caption',
  'tbody',
  'tfoot',
  'thead',
  'tr',
  'th',
  'td',
  'article',
  'aside',
  'canvas',
  'details',
  'embed',
  'figure',
  'figcaption',
  'footer',
  'header',
  'hgroup',
  'menu',
  'nav',
  'output',
  'ruby',
  'section',
  'summary',
  'time',
  'mark',
  'audio',
  'video',
];

const blockElements = [
  'article',
  'aside',
  'details',
  'figcaption',
  'figure',
  'footer',
  'header',
  'hgroup',
  'menu',
  'nav',
  'section',
];

globalStyle(`${parentElement.join()}`, {
  padding: 0,
  margin: 0,
  border: 0,
  fontSize: '100%',
  verticalAlign: 'baseline',
});

globalStyle(`${blockElements.join()}`, {
  display: 'block',
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  outline: 'none',
  WebkitTapHighlightColor: 'transparent',
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
});

globalStyle('html, body', {
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0,
  background: '#FAFAFA',
});
