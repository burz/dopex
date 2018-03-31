import React, { PropTypes } from 'react';
import styled from 'styled-components';

export const SubtitleStyle = styled.div`
  font-family: Montserrat, san-serif;
  font-weight: 500;
  font-size: 22px;
  color: #333;
`;

export const Subtitle = (props) => {
  return (
    <SubtitleStyle>
      { props.text }
    </ SubtitleStyle>
  );
};

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};
