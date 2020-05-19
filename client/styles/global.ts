import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import { mixin } from "./mixin";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    ${mixin.fontMain()};
    font-style: normal;
    word-spacing: normal;
  }

  body {
    font-size: 14px;
    *word-break: break-all;
    -ms-word-break: break-all;
    white-space: nowrap;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  form,
  fieldset,
  p,
  button,
  input {
    word-spacing: normal;
    line-height: 1;
    margin: 0;
    padding: 0;
  }

  body,
  input,
  button {
    word-spacing: normal;
    color: ${colors.common.text};
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${colors.common.title};
  }

  img,
  fieldset,
  iframe {
    padding: 0;
    border: 0 none;
  }

  img {
    width: 100%;
    height: auto;
    vertical-align: top;
  }

  li {
    list-style: none;
  }

  input,
  select,
  button {
    vertical-align: middle;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  i,
  em,
  address {
    font-style: normal;
  }

  label,
  button {
    cursor: pointer;
  }

  button {
    margin: 0;
    padding: 0;
  }

  button * {
    position: relative;
  }

  button img {
    *left: auto;
  }

  a {
    word-spacing: normal;
    text-decoration: none;
    color: ${colors.common.text};
  }

  a:hover {
    text-decoration: none;
  }

  option {
    padding-right: 6px;
  }

  hr {
    display: none;
  }

  legend {
    *width: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  nav,
  menu,
  section,
  summary {
    display: block;
  }

  *,
  header,
  footer,
  section,
  article,
  aside,
  nav,
  hgroup,
  details,
  menu,
  figure,
  figcaption {
    margin: 0;
    padding: 0;
  }

  input,
  button {
    border: 0 none;
    -moz-border: 0 none;
    -webkit-border: 0 none;
    -o-border: 0 none;
    background-color: transparent;
    -moz-background-color: transparent;
    -webkit-background-color: transparent;
    -o-background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input::-ms-clear {
    display: none;
  }

  input,textarea,select,button {
    ${mixin.fontMain()};
  }

  .center {
    width: 1200px;
    margin: 0 auto;
  }

  @media all and (max-width:1200px) {
    .center{
      width: 100%;
    }
  }
`;

export default GlobalStyle;
