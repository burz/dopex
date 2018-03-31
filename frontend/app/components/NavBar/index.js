import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import NavbarLarge from './Navbar.js';
import NavbarSmall from './NavbarSmall.js';

class NavBar extends React.Component {
  render() {
    // Check if we're on the home page - render navbar based on whether you are
    const renderSmall = (this.props.router.location.pathname === '/');

    return (
      <div>{ (renderSmall) ? <NavbarLarge /> : <NavbarSmall /> }</div>
    );
  }
}

NavBar.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(NavBar);
