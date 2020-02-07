import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

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
  height: 324px;
`;

export const Footer = styled(CardActions)`
  margin-top: auto;
  justify-items: right;
  justify-content: space-between;

  button {
    margin-left: auto;
  }
`;

export const SpacedLabel = styled.span`
  margin: 0 10px;
`;
