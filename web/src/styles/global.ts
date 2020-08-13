import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --color-primary: #FF9000;
  --color-secundary: #3E3B47;
  --color-background: #312E38;
  --color-text-lighter: #F4EDE8;
  --color-text-light:  #999591;
  --color-text-dark: #666360;
  --color-button-text: #312E38;
  --color-input-background: #232129;
  --color-box-header: #28262E;

    font-size: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: var(--color-background);
    color: var(--color-text-lighter);
    -webkit-font-smoothing: antialiased;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  button,
  textarea {
    font-family: 'Roboto Slab', serif;
    font: 1.6rem;
  }

  h1, h2, h3, h4, h5, strong {
    font-weight:500;
  }
  button {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
