import styled from 'styled-components';

export const FooterWrapper = styled.div`
  position: fixed;
  background: #F1F1F1;
  height: 50px;
  width: 100%;
  bottom: 0;
  padding: 10px 30px;
  line-height: 30px;
  font-family: Montserrat, san-serif;
`;

export const FooterLeft = styled.div`
  float: left;
  
  div {
    display: inline;
    padding-right: 20px;
  }
  
  .clickable:hover {
    cursor: pointer;
    color: #CCCCCC;
  }
`;

export const FooterRight = styled.div`
  float: right;
`;

export const IconWrapper = styled.div`
  display: inline;
  padding: 0 3px;
`;
