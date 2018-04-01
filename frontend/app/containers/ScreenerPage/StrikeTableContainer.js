import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Table } from 'react-bootstrap';

import StrikeTable from 'components/ScreenerPage/StrikeTable/index.js';
import { startEventListener } from 'components/ScreenerPage/StrikeTable/listeners';
import * as actions from 'components/ScreenerPage/StrikeTable/actions';


class StrikeTableContainer extends React.Component {
  componentWillMount() {
    startEventListener(this.props.receiveStrikeTableData,
                       this.props.receiveStrikeTableData);
  }

  render() {
    return (
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} className="no-lr-padding">
          <h3>Calls</h3>
          <StrikeTable
            data={ this.props.data.filter(el => el.event === 'NewCall') }
          />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} className="no-lr-padding">
          <h3>Puts</h3>
          <StrikeTable
            data={ this.props.data.filter(el => el.event === 'NewPut') }
          />
        </Col>
      </Row>
    );
  }
}


StrikeTableContainer.propTypes = {
  receiveStrikeTableData: PropTypes.func,
  data: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  data: state.getIn(['strikeTable', 'data']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveStrikeTableData: data => dispatch(actions.receiveStrikeTableData(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StrikeTableContainer));
