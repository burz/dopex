import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
    // color: #EEE;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .dashboards-grid {
      @media (min-width: 0px) {
        &.container-fluid, &.container {
          padding-right: 25px;
          padding-left: 25px;
        }
      }

      @media (min-width: 769px) {
        &.container-fluid, &.container {
          padding-right: 8px;
          padding-left: 8px;
        }
      }


      @media (min-width: 1136px) {
        &.container-fluid, &.container {
          width: 1112px
        }
      }

      @media (min-width: 1200px) {
        &.container-fluid, &.container {
          width: 1164px;
        }
      }

      @media (min-width: 1600px) {
        &.container-fluid, &.container {
          width: 1552px;
        }
      }
    }
`;
