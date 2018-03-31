import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export const CaptionStyle = styled.div`
  font-family: Montserrat, san-serif;
  font-weight: 300;
  font-size: 14px;
  color: ${props => props.color ? props.color : '#414650'}
`;

export const Caption = (props) => {
  return (
    <CaptionStyle color={ props.color } >
      { props.text }
    </CaptionStyle>
  );
};

Caption.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Caption;
