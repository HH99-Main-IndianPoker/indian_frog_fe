import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root {
    background-color: #fffdee;
    /* color */
    --color-main: #5A8900;
    --color-black: #222;
    --color-white: #fff;
    --color-warning: #ff9191;
    --color-grey: #d9d9d9;
    --color-sub: #CD7522;
  }
  *{
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
   font-family: 'Pretendard Regular';
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    cursor: pointer;
    background: none;
    border: none;
  }
  input {
    background: none;
    border: 0;
  }
  input:focus {
    outline: none;
  }
  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
a {
  color: inherit;
  text-decoration: none;
}

  body {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-text-size-adjust: none; /* Chrome, Safari, Opera */
  -ms-text-size-adjust: none; /* IE */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  height: 100%; /* Prevent vertical bounce and set height to full view */
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyles;
