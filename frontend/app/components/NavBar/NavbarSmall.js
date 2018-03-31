import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import { Body } from '../typography/Body';
import { Description } from '../typography/Description';
import Logo from '../../assets/images/insights_logo.png';
import { NavbarTitle, NavbarContainerSmall } from './NavBarStyles.js';

const NavbarSmall = () => {
  return (
    <NavbarContainerSmall>
      <div className="header-wrapper">
        <div className="navbar-small-wrapper">
          <div id="navbar-small-sidebar">
          </div>

          <Grid>
            <Row className="show-grid">
              <Col sm={12} md={12}>
                <div className="navbar-small">
                  <div className="navbar-small-left">
                    <div className="navbar-small-left-hamburger">

                    </div>
                    <div className="navbar-small-left-logo">
                      <Link to={'/'}>
                        <img className="navbar-insights-logo-img" src={ Logo } alt="Alphonso Insights Logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="navbar-small-right">
                    <div className="navbar-small-right-brand-search">
                    </div>
                    <div className="navbar-small-right-linkedinoauth">
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

          </Grid>

        </div>
      </div>
    </NavbarContainerSmall>
  );
};

export default NavbarSmall;
