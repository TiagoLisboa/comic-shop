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

export const RootCard = styled(Card)`
  flex: 0 1 calc(25% - 1em);
  margin: 0 0 10px;
  flex-direction: column;
  display: flex;

  h2 {
    font-size: 10pt;
  }
`;

export const Picture = styled(CardMedia)`
  height: 140px;
`;

export const Footer = styled(CardActions)`
  margin-top: auto;
`;

export const Navigation = styled(ButtonGroup)`
  flex-basis: 100%;
  text-align: center;
`;
