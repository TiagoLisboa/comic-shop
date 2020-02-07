import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  background-color: ${colors.secondary};
  padding: 20px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Pagination = styled.div`
  flex-basis: 100%;
  text-align: right;
`;
