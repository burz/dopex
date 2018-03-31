import React from 'react';
import PropTypes from 'prop-types';
import { IconWrapper } from './FooterStyles';

const FooterRight = ({ name, link }) => (
  <IconWrapper>
    <a rel="external" href={link} target="_blank">
      <img src={require(`../../assets/images/${name}.png`)} alt={`${name} icon`} height="30px" />
    </a>
  </IconWrapper>
);

FooterRight.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default FooterRight;
