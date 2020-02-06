import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 10px;
  background-color: ${colors.primary};
  color: #fff;
`;

console.log(colors.primary);

export const Navigation = styled.ul`
  display: flex;
  justify-content: space-between;
  aign-items: center;
  list-style: none;

  li a {
    text-decoration: none;
    color: #fff;
    display: box;
    padding: 0 10px;
  }
`;
