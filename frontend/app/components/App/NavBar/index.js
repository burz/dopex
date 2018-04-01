import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// import Button from 'components/Reusable/SimpleButton';

// import { logoutUser } from 'containers/App/actions';
import { NavbarStyles } from './style';


class NavBar extends React.Component {
  render() {
    return (
      <NavbarStyles >
        <Navbar inverse collapseOnSelect className="dashboards-grid">
          <Navbar.Header className="dashboards-grid">
            <Navbar.Brand>
              <div className="nav-header-logo">DOPEX</div>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">{ 'Account: 0x627306090abab3a6e1400e9345bc60c78a8bef57' }</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </NavbarStyles>
    );
  }
}

NavBar.propTypes = {
  // history: PropTypes.object,
  // logoutUser: PropTypes.func,
  // loggedIn: PropTypes.bool,
  // name: PropTypes.string,
  // userImg: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
  // name: state.getIn(['session', 'user', 'givenName']),
  // loggedIn: state.getIn(['session', 'loggedIn']),
  // userImg: state.getIn(['session', 'user', 'imageUrl'])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // logoutUser: () => dispatch(logoutUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBar));
