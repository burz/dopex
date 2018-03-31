import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { startNewCallListner } from './listeners';
import * as actions from './actions';
import { StrikeTableStyles } from './style';


class StrikeTable extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('yooo');
    startNewCallListner();
    this.props.fetchInitialStrikeTableData();
  }

  render() {
    return (
      <div>Strike Table</div>
    );
  }
}

StrikeTable.propTypes = {
  fetchInitialStrikeTableData: PropTypes.func,
  // data: PropTypes.array,
  // loading: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => ({
  // data: state.getIn(['videoWall', 'data']).toJS(),
  // loading: state.getIn(['videoWall', 'loading']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchInitialStrikeTableData: () => dispatch(actions.fetchInitialStrikeTableData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StrikeTable));