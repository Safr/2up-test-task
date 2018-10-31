import React from 'react';
import styled from 'styled-components';
import { mainColor } from '../theme/variables';
import { ellipsis1, ellipsis2, ellipsis3 } from '../theme/animations';

const Wrapper = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  margin: 0 auto;

  & div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${mainColor};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 6px;
      animation: ${ellipsis1} 0.6s infinite;
    }

    &:nth-child(2) {
      left: 6px;
      animation: ${ellipsis2} 0.6s infinite;
    }

    &:nth-child(3) {
      left: 26px;
      animation: ${ellipsis2} 0.6s infinite;
    }

    &:nth-child(4) {
      left: 45px;
      animation: ${ellipsis3} 0.6s infinite;
    }
  }
`;


const Loader = () => (
  <Wrapper><div /><div /><div /><div /></Wrapper>
);

export default Loader;
