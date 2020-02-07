import React from 'react';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FaCartPlus } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { RootCard, Picture, Footer, SpacedLabel } from './style';

export default function ComicCard({ image, title, id, prices }) {
  let history = useHistory();

  function openComic(id) {
    history.push(`/comic/${id}`);
  }

  return (
    <RootCard>
      <CardActionArea onClick={() => openComic(id)}>
        <Picture image={image} title={title} component="img" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Footer>
        <span>$ {prices[0].price}</span>
        <Button size="small" color="primary">
          <SpacedLabel> Add to Cart </SpacedLabel>
          <FaCartPlus />
        </Button>
      </Footer>
    </RootCard>
  );
}
