import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Container = styled.div`
  width: 100%;
  background: ${oc.teal[2]};
  padding: 0px 30px;
`;

const Header = styled.header`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  font-size: 25px;
  font-weight: 550;
  justify-content: center;
  padding: 20px 0px;
  align-items: center;
`;

const NavBar = () => {
  return (
    <Container>
      <Header>Video Search Project by Pexels</Header>
    </Container>
  );
};
export default NavBar;
