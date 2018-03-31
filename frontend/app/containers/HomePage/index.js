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
        <Helmet title="Home | Alphonso Boilerplate" />
        <Grid>
          <Row>
            <Col>
              <h1>Alphonso Boilerplate - Home Page Placeholder</h1>
            </Col>
          </Row>
        </Grid>
      </HomePageStyles>
    );
  }
}

export default HomePage;
