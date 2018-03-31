import styled from 'styled-components';


export const NavbarStyles = styled.div`
  .nav-header-logo {
    cursor: pointer;
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
`;
