import React, { PropTypes } from 'react';
import styled from 'styled-components';

export const BodyStyle = styled.div`
  font-family: Montserrat, san-serif;
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.color ? props.color : 'black'};
`;

export const Body = (props) => {
  return (
    <BodyStyle color={props.color} >
      { props.text }
    </ BodyStyle>
  );
};

Body.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
