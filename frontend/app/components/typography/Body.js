import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export const BodyStyle = styled.div`
  font-family: Montserrat, san-serif;
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.color ? props.color : 'black'};
  ${props => (props.hoverColor) ? `&:hover { color:${props.hoverColor}; }` : ''}

`;

export const Body = (props) => {
  return (
    <BodyStyle color={props.color} hoverColor={props.hoverColor}>
      { props.text }
    </BodyStyle>
  );
};

Body.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
};

export default Body;
