import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export const PlaceholderStyle = styled.div`
  font-family: Montserrat, san-serif;
  font-weight: 400;
  font-size: 14px;
  color: #e5e4e2;
`;

export const Placeholder = (props) => {
  return (
    <PlaceholderStyle>
      { props.text }
    </PlaceholderStyle>
  );
};

Placeholder.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Placeholder;
