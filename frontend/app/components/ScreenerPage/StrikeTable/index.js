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
    startNewCallListner();
    this.props.fetchInitialStrikeTableData();
  }

  renderSampleData() {
    return this.props.data.map((line, i) => {
      return <div key={i}>{ JSON.stringify(line) }</div>;
    });
  }

  render() {
    return (
      <div>{ this.renderSampleData() }</div>
    );
  }
}

StrikeTable.propTypes = {
  fetchInitialStrikeTableData: PropTypes.func,
  data: PropTypes.array,
  // loading: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => ({
  data: state.getIn(['strikeTable', 'data']).toJS(),
  loading: state.getIn(['videoWall', 'loading']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchInitialStrikeTableData: () => dispatch(actions.fetchInitialStrikeTableData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StrikeTable));
