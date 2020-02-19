import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Grow = styled.div`
  flex: 1;
`;

export const Logo = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  li button {
    color: #fff;
  }
`;
