import React from 'react';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';

import StrikeTable from 'components/ScreenerPage/StrikeTable';

import ScreenerPageStyles from './style';
import saga from './sagas';


class ScreenerPage extends React.Component {
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

const withSaga = injectSaga({ key: 'screenerPage', saga, mode: DAEMON });

export default compose(
  withSaga,
)(ScreenerPage);
