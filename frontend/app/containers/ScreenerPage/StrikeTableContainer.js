import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Table } from 'react-bootstrap';

import StrikeTable from 'components/ScreenerPage/StrikeTable';
import { startEventListener } from 'components/ScreenerPage/StrikeTable/listeners';
import * as actions from 'components/ScreenerPage/StrikeTable/actions';
import { StrikeTableStyles } from './style';


class StrikeTableContainer extends React.Component {
  componentWillMount() {

    startEventListener(this.props.receiveStrikeTableData,
                       this.props.receiveStrikeTableData);
    this.props.fetchInitialStrikeTableData();
  }

  render() {
    console.log(data);
    return (
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} className="no-lr-padding">
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} className="no-lr-padding">
        </Col>
      </Row>
    );
  }
}
          // <StrikeTable
          //   data={ this.props.data.filter(el => el.cp === 'C') }
          // />
          // <StrikeTable
          //   data={ this.props.data.filter(el => el.cp === 'P') }
          // />

StrikeTableContainer.propTypes = {
  fetchInitialStrikeTableData: PropTypes.func,
  data: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  data: state.getIn(['strikeTable', 'data']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchInitialStrikeTableData: () => dispatch(actions.fetchInitialStrikeTableData()),
  receiveStrikeTableData: data => dispatch(actions.receiveStrikeTableData(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StrikeTableContainer));
