import { createGlobalStyle } from 'styled-components';

const colors = {
  darkBlue: '#0B0D17',
  lightBlue: '#D0D6F9',
  white: '#fff'
}

const fonts = {
  textFont: 'Barlow Condensed',
  titleFont: 'Bellefair',
}
 
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Barlow Condensed';
    src: url('/fonts/BarlowCondensed.eot');
    src: url('/fonts/BarlowCondensed.eot?#iefix') format('embedded-opentype'),
        url('/fonts/BarlowCondensed.woff2') format('woff2'),
        url('/fonts/BarlowCondensed.woff') format('woff'),
        url('/fonts/BarlowCondensed.ttf') format('truetype'),
        url('/fonts/BarlowCondensed.svg#BarlowCondensed') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bellefair';
    src: url('/fonts/Bellefair-Regular.eot');
    src: url('/fonts/Bellefair-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Bellefair-Regular.woff2') format('woff2'),
        url('/fonts/Bellefair-Regular.woff') format('woff'),
        url('/fonts/Bellefair-Regular.ttf') format('truetype'),
        url('/fonts/Bellefair-Regular.svg#Bellefair-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  html {
    overflow-x: hidden;
    position: relative;

    body {
      color: ${colors.white};
      background: ${colors.darkBlue};
      font-family: ${fonts.textFont};
      overflow-x: hidden;
      position: relative;
      width: 100vw;

      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      ul,
      li,
      a,
      button,
      input,
      textarea {
        color: inherit;
        margin: 0;
        padding: 0;
      }

      p,
      blockquote,
      ul,
      li,
      a,
      button,
      input,
      textarea {
        font-size: 18px;
        line-height: 32px;
      }

      h1,
      h2,
      h3,
      h4 {
        color: ${colors.white};
        font-family: 'Bellefair'
      }

      h1 {
        font-size: 150px;
      }

      h2 {
        font-size: 100px;
      }

      h3 {
        font-size: 56px;
      }

      h4 {
        font-size: 32px;
      }

      h5 {
        font-family: {fonts.textFont};
        font-size: 28px;
        letter-spacing: 4.75px;
      }

      ul,
      li {
        list-style: none;
      }

      a {
        text-decoration: none;
      }

      button {
        appearance: button;
        background: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        overflow: visible;
        text-transform: none;
      }

      input,
      textarea {
        background: transparent;
        border: none;
        outline: none;
        resize: none;
      }
    }
  }
`;
 
export default GlobalStyle;
