import styled from 'styled-components';

import Backdrop from '@material-ui/core/Backdrop';
import { Link } from 'react-router-dom';

export const Breadcrumb = styled(Link)`
  color: black;
`;

export const Container = styled.div`
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

export const BackDrop = styled(Backdrop)`
  z-index: 99999999 !important;
  color: '#fiff';
`;
