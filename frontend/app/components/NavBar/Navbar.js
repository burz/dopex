import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Description } from '../typography/Description';
import Logo from '../../assets/images/insights_logo.png';
import { NavbarContainer, NavbarTitle } from './NavBarStyles.js';

const NavbarLarge = () => {
  return (
    <div>
      <NavbarContainer>
        <Grid>
          <section className="navbar-top-row">
            <div className="navbar-auth">
            </div>
          </section>
          <Row className="show-grid">
            <Col sm={12} md={12}>
              <section className="navbar-insights">
                <div className="navbar-insights-center">
                  <div>
                    <img className="navbar-insights-logo-img" src={ Logo } alt="Alphonso Insights Logo" />
                  </div>
                  <NavbarTitle>
                    <div>TV Advertising Insights</div>
                  </NavbarTitle>

                  <div className="navbar-search-container">
                    <div>
                    </div>
                    <div className="navbar-search-or">
                      <Description text="or" />
                    </div>
                    <div className="navbar-explore">
                    </div>
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Grid>

      </NavbarContainer>
    </div>
  );
};

export default NavbarLarge;
