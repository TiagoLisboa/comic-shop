import React from 'react';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FaCartPlus } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchComic } from '../../store/modules/comics/actions';
import { addComic } from '../../store/modules/cart/actions';

import { RootCard, Picture, Footer, SpacedLabel } from './style';

export default function ComicCard({ image, title, id, prices }) {
  let history = useHistory();
  const dispatch = useDispatch();

  function openComic() {
    dispatch(fetchComic(id));
    history.push(`/comic/${id}`);
  }

  function addToCart() {
    dispatch(addComic({ id, title, image, price: prices[0].price }));
    history.push(`/cart`);
  }

  return (
    <RootCard>
      <CardActionArea onClick={openComic}>
        <Picture image={image} title={title} component="img" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Footer>
        <span>$ {prices[0].price}</span>
        <Button size="small" color="primary" onClick={addToCart}>
          <SpacedLabel> Add to Cart </SpacedLabel>
          <FaCartPlus />
        </Button>
      </Footer>
    </RootCard>
  );
}
