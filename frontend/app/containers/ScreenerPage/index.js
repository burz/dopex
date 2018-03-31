import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';

import StrikeTable from 'components/ScreenerPage/StrikeTable';
import ScreenerPageStyles from './style';


class ScreenerPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScreenerPageStyles>
        <Helmet title="Home | DOPEX" />
        <Grid>
          <Row>
            <Col>
              <h1>DOPEX Front Page</h1>
              <StrikeTable />
            </Col>
          </Row>
        </Grid>
      </ScreenerPageStyles>
    );
  }
}

export default ScreenerPage;
