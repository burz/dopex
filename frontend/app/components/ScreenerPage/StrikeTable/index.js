import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table } from 'react-bootstrap';

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

  renderTableBody() {
  //   return this.props.data.map((airing, idx) =>
  //     <AdAiringsTableItem
  //       key={ `${airing.aired_ads_id}` }
  //       airing={ airing }
  //       debug={ this.props.debug }
  //       openVideoPopup={ this.props.openVideoPopup(airing.mp4_clip, airing.thumbnail) }
  //       new={ airing.new }
  //     />
  //   );
  }

  // #56BEEC
  // #333


  render() {
    return (
      <StrikeTableStyles>
        <Table hover responsive>
          <thead>
            <tr>
              <th className="th-calls-last">Last</th>
              <th className="th-calls-last">Size</th>
              <th className="th-calls-last">Bid</th>
              <th className="th-calls-last">Ask</th>
              <th className="th-calls-last">Size</th>
              <th className="th-calls-last">Vol</th>
              <th className="th-calls-last">Delta</th>
              <th className="th-calls-last"></th>
              <th className="th-calls-last">Last</th>
              <th className="th-calls-last">Size</th>
              <th className="th-calls-last">Bid</th>
              <th className="th-calls-last">Ask</th>
              <th className="th-calls-last">Size</th>
              <th className="th-calls-last">Vol</th>
              <th className="th-calls-last">Delta</th>
            </tr>
          </thead>
          <tbody>
            { this.renderTableBody() }
          </tbody>
        </Table>
      </StrikeTableStyles>
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
