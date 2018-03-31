import styled from 'styled-components';


const ScreenerPageStyles = styled.div`
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

export default ScreenerPageStyles;
