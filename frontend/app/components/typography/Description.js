import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export const DescriptionStyle = styled.div`
  font-family: Montserrat, san-serif;
  font-weight: 500;
  font-size: 14px;
  color: #474a51;
`;

export const Description = (props) => {
  return (
    <DescriptionStyle>
      { props.text }
    </DescriptionStyle>
  );
};

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Description;
