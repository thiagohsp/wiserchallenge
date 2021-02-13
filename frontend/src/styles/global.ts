import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FAF5FF;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Montserrat', serif;
    font-size: 16px;
    color: #383E71;
  }

  h1,h2,h3,h4,h5,strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;