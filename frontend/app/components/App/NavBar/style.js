import styled from 'styled-components';


export const NavbarStyles = styled.div`
  .nav-header-logo {
    cursor: pointer;
    // margin-left: 0 !important;
    padding-left: 0 !important;
  }

  .navbar {
    border-radius: 0px;
  }

  .navbar-inverse {
    background-color: #C00;
    border: none;

    .navbar-brand, .navbar-nav > li > a {
      color: #f5f5f5;
    }
  }

  .navbar-user-img-item {
    > a {
      padding: 0;
      margin-top: 8px;
      cursor: default;
    }
  }

  .navbar-user-name-item {
    > a {
      cursor: default;
    }
  }

  .navbar-sign-out-item {
    > a:hover {
      color: #CCC !important;
    }

  }

  .navbar-user-img-wrapper {
    img {
      height: 35px;
      width: auto;
      // border-radius: 50%;
    }
  }


  .dashboards-grid > {
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
