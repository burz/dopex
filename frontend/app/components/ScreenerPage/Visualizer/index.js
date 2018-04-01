import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Image from 'assets/images/image.png';

import * as actions from './actions';
import * as data from './data';

import { VisualizerStyles } from './style';


class Visualizer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // startNewCallListner();
    this.props.fetchInitialVisualizerData();
  }

  renderFakeText() {
    return data.sampleData.map(el => JSON.stringify(el));
  }

  render() {
    return (
      <VisualizerStyles>
        <div className="img-wrapper">
          <img
            src={ Image }
          />
        </div>
      </VisualizerStyles>
    );
  }
}

Visualizer.propTypes = {
  fetchInitialVisualizerData: PropTypes.func,
  data: PropTypes.object,
  // loading: PropTypes.bool,
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
