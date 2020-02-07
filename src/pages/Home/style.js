import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  background-color: ${colors.secondary};
  padding: 20px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Navigation = styled.div`
  flex-basis: 100%;
  text-align: right;
`;
