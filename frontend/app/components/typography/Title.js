import React, { PropTypes } from 'react';
import styled from 'styled-components';

export const TitleStyle = styled.div`
  font-family: Montserrat, san-serif;
  font-weight: bold;
  font-size: 28px;
  color: #333;
`;

export const Title = (props) => {
  return (
    <TitleStyle>
      { props.text }
    </ TitleStyle>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
