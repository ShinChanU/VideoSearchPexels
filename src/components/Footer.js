import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const FooterContainer = styled.div`
  width: 100%;
  background: ${oc.teal[2]};
  padding: 0px 30px;
  p {
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright © 2022 ChanWoo and Pexels. All rights reserved.</p>
      <p>
        <i>for more information. tlscksdn963@naver.com</i>
      </p>
    </FooterContainer>
  );
};

export default Footer;
