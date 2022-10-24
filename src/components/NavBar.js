import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import oc from 'open-color';

const Container = styled.div`
  width: 100%;
  background: ${oc.red[2]};
  padding: 0px 30px;
`;

const Header = styled.header`
  width: 100%;

  margin: 0 auto;
  display: flex;
  justify-content: end;
  ${(props) =>
    props.user &&
    css`
      justify-content: space-between;
    `}
  max-width: 1300px;
  padding: 10px 0px;
  height: 40px;
  align-items: center;
`;

const TagStyle = css`
  font-size: 20px;
  font-weight: 550;
  margin-left: 20px;
  text-decoration: none;
  color: black;
`;

const LinkDiv = styled(Link)`
  ${TagStyle};
  :hover {
    color: ${oc.indigo[4]};
    transition: 0.3s;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <Header>{/* <LinkDiv to="/football">[NEW] ⚽축구</LinkDiv> */}</Header>
    </Container>
  );
};
export default NavBar;
