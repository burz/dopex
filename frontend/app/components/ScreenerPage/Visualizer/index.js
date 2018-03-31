import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from './actions';


class Visualizer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // startNewCallListner();
    this.props.fetchInitialVisualizerData();
  }

  render() {
    return (
      <div>Visualizer { this.props.data }</div>
    );
  }
}

Visualizer.propTypes = {
  fetchInitialVisualizerData: PropTypes.func,
  data: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => ({
  data: state.getIn(['visualizer', 'data']),
  loading: state.getIn(['videoWall', 'loading']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchInitialVisualizerData: () => dispatch(actions.fetchInitialVisualizerData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Visualizer));
