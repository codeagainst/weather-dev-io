import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: rgba(16,14,30,1);
    --color-blue: rgba(30, 33, 58, 1);
    --color-blue-light: rgba(60, 71, 233, 1);
    --color-gray: rgba(110, 112, 122, 1);
    --color-gray-dark: rgba(97, 100, 117, 1);
    --color-text-primary: rgba(231, 231, 235, 1);
    --color-text-secondary: rgba(136, 134, 157, 1);
    --color-text-gray: rgba(160, 159, 177, 1);

    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--color-background);
  }
  *,
  input {
    border: 0;
    background: none;
    font-family: 'Raleway', sans-serif;
    color: var(--color-text-primary);
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    list-style:none;
  }

`;