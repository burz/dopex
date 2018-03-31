import React from 'react';
import { FooterWrapper, FooterLeft, FooterRight } from './FooterStyles';
import FooterRightItem from './FooterRightItem';

const rightList = [
  { name: 'facebook', link: 'https://www.facebook.com/AlphonsoTVdata/' },
  { name: 'twitter', link: 'https://twitter.com/alphonsoinc' },
  { name: 'youtube', link: 'https://www.youtube.com/channel/UCL-CZmc7UvmN0LPTF8Ak1vQ' },
  { name: 'linkedin', link: 'https://www.linkedin.com/company-beta/3100031/' }
];

const Footer = () => (
  <FooterWrapper>

    <FooterLeft>
      <div>© 2017 ALPHONSO INC</div>
      <div>|</div>
      <div className="clickable">Copy Policy</div>
      <div>|</div>
      <div className="clickable">Terms and Conditions</div>
      <div>|</div>
      <div className="clickable">Contact Us</div>
    </FooterLeft>

    <FooterRight>
      {rightList.map(medium => <FooterRightItem key={medium.name} {...medium} />)}
    </FooterRight>

  </FooterWrapper>
);

export default Footer;
