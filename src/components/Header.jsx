import React from 'react';
import styled from 'styled-components';
import { spin } from '../theme/animations';
import {
  mainColor, white, lSize, sSize,
} from '../theme/variables';
import logo from '../logo.svg';

const Wrapper = styled.header`
  width: 100%;
  padding-top: ${sSize};
  padding-bottom: ${lSize};
  background-color: ${mainColor};
  color: ${white};
  text-align: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  animation: ${spin} infinite 20s linear;
`;

const Header = () => (
  <Wrapper>
    <Image src={logo} alt="logo" />
    <h2>React Content Manager</h2>
  </Wrapper>
);

export default Header;
