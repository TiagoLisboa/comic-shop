import React from 'react';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { RootCard, Picture, Footer } from './style';

import TruncateText from '../../components/TruncateText';
export default function ComicCard({ image, title, description }) {
  return (
    <RootCard>
      <CardActionArea>
        <Picture image={image} title={title} />
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
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </Footer>
    </RootCard>
  );
}
