import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import { startNewCallListner } from './listeners';
import * as actions from './actions';
import { StrikeTableStyles } from './style';


class StrikeTable extends React.Component {
  renderSampleData() {
    return this.props.data.map((line, i) => {
      return <div key={i}>{ JSON.stringify(line) }</div>;
    });
  }

  renderTableBody() {
    return this.props.data.map((el, i) =>
      <tr key={i}>
        <td className="td-calls-last">{ el.strike }</td>
        <td className="td-calls-last">{ el.price }</td>
        <td className="td-calls-last">{ el.size }</td>
        <td className="td-calls-last">{ 'Dopecoin' }</td>
        <td className="td-calls-last">{ el.sec }</td>
        <td className="td-calls-last">{ el.start }</td>
        <td className="td-calls-last">{ el.period }</td>
        <td className="td-calls-last">{ el.creator }</td>
        <td className="td-calls-last">{ el.owner }</td>
      </tr>
    );
  }

  // #56BEEC
  // #333


  render() {
    return (
      <StrikeTableStyles>
        <Table hover responsive>
          <thead>
            <tr>
              <th className="th-calls-last">STRIKE</th>
              <th className="th-calls-last">Price</th>
              <th className="th-calls-last">Size</th>
              <th className="th-calls-last">Token</th>
              <th className="th-calls-last">Security</th>
              <th className="th-calls-last">Start</th>
              <th className="th-calls-last">End</th>
              <th className="th-calls-last">Creator</th>
              <th className="th-calls-last">Owner</th>
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
  data: PropTypes.array,
  // loading: PropTypes.bool,
};

export default StrikeTable;
