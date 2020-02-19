import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Breadcrumb = styled(Link)`
  color: black;
`;

export const CartList = styled.table`
  width: 100%;
  border-spacing: 0;

  th {
    padding-bottom: 20px;
    text-align: left;
  }

  td {
    padding-bottom: 20px;
  }

  th {
    width: 17.5%;
  }

  th:first-child {
    width: 15%;
  }

  th:nth-child(2) {
    width: 32.5%;
  }
`;

export const Total = styled.tr`
  td {
    padding-top: 20px;
    border-top: 5px solid black;
  }
`;
