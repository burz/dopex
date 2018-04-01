import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import { StrikeTableStyles } from './style';


class StrikeTable extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTableBody() {
    return this.props.data.map((el, i) => {
      return (
        <tr key={i}>
          <td className="td-calls-last">{ el.args.strike.toString() }</td>
          <td className="td-calls-last">{ el.args.price.toString() }</td>
          <td className="td-calls-last">{ el.args.size.toString() }</td>
          <td className="td-calls-last">{ 'Dopecoin' }</td>
          <td className="td-calls-last">{ el.args.start.toString() }</td>
          <td className="td-calls-last">{ el.args.period.toString() }</td>
          <td className="td-calls-last">{ el.args.creator }</td>
        </tr>
      );
    }
    );
  }

  render() {
    if (this.props.data.size === 0) return null;
    return (
      <StrikeTableStyles>
        <Table hover responsive>
          <thead>
            <tr>
              <th className="th-calls-last">STRIKE</th>
              <th className="th-calls-last">Price</th>
              <th className="th-calls-last">Size</th>
              <th className="th-calls-last">Token</th>
              <th className="th-calls-last">Start</th>
              <th className="th-calls-last">Period</th>
              <th className="th-calls-last">Creator</th>
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
  data: PropTypes.object,
  // loading: PropTypes.bool,
};

export default StrikeTable;
