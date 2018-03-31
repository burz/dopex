import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from 'components/Reusable/SimpleButton/style';


class SimpleButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ButtonWrapper>
        <button className="button-inner" onClick={ this.props.onClick }>
          { this.props.text }
        </button>
      </ButtonWrapper>
    );
  }
}

SimpleButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

SimpleButton.defaultProps = {
  onClick: () => {}
};

export default SimpleButton;
