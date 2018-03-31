import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';

import NotFoundPageStyles from './style';
import messages from './messages';


class NotFoundPage extends React.Component {
  render() {
    return (
      <NotFoundPageStyles>
        <Helmet title="Not Found | Alphonso Internal Dashboards" />
        <Grid>
          <Row>
            <Col>
              <h1>Page Not Found</h1>
            </Col>
          </Row>
        </Grid>
      </NotFoundPageStyles>
    );
  }
}

export default NotFoundPage;
