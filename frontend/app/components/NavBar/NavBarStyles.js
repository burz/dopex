import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  font: normal 14px/1.5  'Montserrat', sans-serif;
  width: 100%;
  background: #f1f1f1;

  .navbar-top-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 20px;
  }

  .navbar-insights {
    padding: 80px 0px 200px;
  }

  .navbar-insights-logo-img {
    width: 145px;
    height: auto;
  }

  .navbar-search-container {
    display: flex;
    flex-direction: row;
  }

  .navbar-search-or {
    padding: 10px 15px;
  }
`;

export const NavbarTitle = styled.div`
  font-family: Montserrat, san-serif;
  font-weight: 600;
  font-size: 40px;
  color: #333;
`;

export const NavbarContainerSmall = styled.div`
  background: white;

  .navbar-small-wrapper {
    width: 100%;
    border-bottom: 1px solid #cccccc;
    background: white;
    z-index: 10;
  }

  .navbar-small {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;
    padding: 10px 5px;
    height: 62px;
  }

  .navbar-small-left {
    display: flex;
    flex-direction: row;
  }

  .navbar-small-right {
    display: flex;
    flex-direction: row;
  }

  .navbar-small-left-logo img{
    height: 42px;
    width: auto;
  }

  .navbar-small-right-linkedinoauth {
    margin-left: 20px;
    margin-top: 10px;
  }

  .header-wrapper {
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%
  }
`;
