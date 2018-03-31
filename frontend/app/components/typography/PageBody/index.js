import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Subtitle } from 'components/typography/Subtitle';
import { PageBodyTitleWrapper } from './style';

export const PageBodyWrapper = styled.div`
  margin-top: 30px;
  .brand-detail-page-title > div:first-child {
    display: inline-block
  }
`;

export const PageBodyTitle = (props) => {
  return (
    <PageBodyTitleWrapper>
      <Subtitle text={ props.text } />
    </PageBodyTitleWrapper>
  );
};

PageBodyTitle.propTypes = {
  text: PropTypes.string.isRequired
};
