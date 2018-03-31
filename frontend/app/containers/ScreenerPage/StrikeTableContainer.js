import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Table } from 'react-bootstrap';

import StrikeTable from 'components/ScreenerPage/StrikeTable';
import { startNewCallListner } from 'components/ScreenerPage/StrikeTable/listeners';
import * as actions from 'components/ScreenerPage/StrikeTable/actions';
import { StrikeTableStyles } from './style';


class StrikeTableContainer extends React.Component {
  componentWillMount() {
    // startNewCallListner();
    this.props.fetchInitialStrikeTableData();
  }

  render() {
    return (
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} className="no-lr-padding">
          <StrikeTable
            data={ this.props.data.filter(el => el.cp === 'C') }
          />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} className="no-lr-padding">
          <StrikeTable
            data={ this.props.data.filter(el => el.cp === 'C') }
          />
        </Col>
      </Row>
    );
  }
}

StrikeTableContainer.propTypes = {
  fetchInitialStrikeTableData: PropTypes.func,
  data: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => ({
  data: state.getIn(['strikeTable', 'data']).toJS(),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchInitialStrikeTableData: () => dispatch(actions.fetchInitialStrikeTableData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StrikeTableContainer));
