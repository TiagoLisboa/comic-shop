import React from 'react';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FaCartPlus } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { RootCard, Picture, Footer, SpacedLabel } from './style';

import TruncateText from '../../components/TruncateText';
export default function ComicCard({ image, title, description, id }) {
  let history = useHistory();

  function openComic(id) {
    console.log(id);
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
          <Typography variant="body2" color="textSecondary" component="p">
            <TruncateText text={description} />
          </Typography>
        </CardContent>
      </CardActionArea>
      <Footer>
        <Button size="small" color="primary">
          <SpacedLabel> Add to Cart </SpacedLabel>
          <FaCartPlus />
        </Button>
      </Footer>
    </RootCard>
  );
}
