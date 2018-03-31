import React from 'react';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';

import Visualizer from 'components/ScreenerPage/Visualizer';
import StrikeTableContainer from 'containers/ScreenerPage/StrikeTableContainer.js';

import ScreenerPageStyles from './style';
import saga from './sagas';


class ScreenerPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScreenerPageStyles>
        <Helmet title="Home | DOPEX" />
        <Grid className="dashboards-grid">
          <Row>
            <Col>
              <Visualizer />
            </Col>
          </Row>
          <StrikeTableContainer />
        </Grid>
      </ScreenerPageStyles>
    );
  }
}

const withSaga = injectSaga({ key: 'screenerPage', saga, mode: DAEMON });

export default compose(
  withSaga,
)(ScreenerPage);
