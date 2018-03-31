import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';

import HomePageStyles from './style';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomePageStyles>
        <Helmet title="Home | DOPEX" />
        <Grid>
          <Row>
            <Col>
              <h1>DOPEX Front Page</h1>
            </Col>
          </Row>
        </Grid>
      </HomePageStyles>
    );
  }
}

export default HomePage;
