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

  // renderSampleData() {
  //   return this.props.data.map((line, i) => {
  //     return <div key={i}>{ JSON.stringify(line) }</div>;
  //   });
  // }

  render() {
    return (
      <div>asdasd</div>
    );
  }
}

Visualizer.propTypes = {
  fetchInitialVisualizerData: PropTypes.func,
  data: PropTypes.array,
  // loading: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => ({
  // data: state.getIn(['visualizer', 'data']).toJS(),
  // loading: state.getIn(['videoWall', 'loading']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchInitialVisualizerData: () => dispatch(actions.fetchInitialVisualizerData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Visualizer));
