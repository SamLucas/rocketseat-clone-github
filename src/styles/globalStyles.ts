import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  html {
    min-height: 100vh;
    background: var(--primary)
  }

  *, input, button {
    outline: 0;
    border: 0;
    background: none;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: var(--black);

    transition: color .2s ease-out;
  }

  ul {
    list-style: none,
  }

  :root {
    ${(props) => {
      const { theme } = props;
      let append = "";

      Object.entries(theme).forEach(([props, value]) => {
        append += `--${props}: ${value};`;
      });

      return append;
    }}
  }
`;
