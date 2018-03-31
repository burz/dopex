import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export const SubtitleStyle = styled.div`
  font-family: Montserrat, san-serif;
  font-weight: 500;
  font-size: 22px;
  color: #333;
`;

export const Subtitle = (props) => {
  return (
    <SubtitleStyle id="sub-title">
      { props.text }
    </SubtitleStyle>
  );
};

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Subtitle;
