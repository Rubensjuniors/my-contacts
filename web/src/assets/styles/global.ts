import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  body {
    background: ${({ theme }) => theme.backgroundColor};
    font-size: 1rem;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialised;
    max-width: 100vw;
    max-height: 100vh;
  }

  button {
    cursor: pointer;
    border: 0;
    background: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    border: 0;
    background: transparent;
  }
`
