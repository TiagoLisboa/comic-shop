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

/**
 * This function creates a ComicCard component.
 * This component is a simple Card with the comic information.
 * @params {Object} comic is a comic object
 * @params {String} comic.image is a string with a link to a image
 * @params {String} comic.title is a string with the comic title
 * @params {number} comic.id is the comic id
 * @params {Array} comic.prices is the comic prices
 * @returns {Object} a react component
 */
export default function ComicCard({ image, title, id, prices }) {
  let history = useHistory();
  const dispatch = useDispatch();

  /**
   * This function dispatches a redux action to fetch a single comic information
   * and also change the page.
   */
  function openComic() {
    dispatch(fetchComic(id));
    history.push(`/comic/${id}`);
  }

  /**
   * This function dispatches a redux action to add a comic to the cart
   * and also change the page.
   */
  function addToCart() {
    dispatch(addComic({ id, title, image, price: prices[0].price }));
    history.push(`/cart`);
  }

  return (
    <RootCard>
      <CardActionArea onClick={openComic} data-testid="openComic">
        <Picture image={image} title={title} component="img" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Footer>
        <span>$ {prices[0].price}</span>
        <Button
          size="small"
          color="primary"
          onClick={addToCart}
          data-testid="addToCart"
        >
          <SpacedLabel> Add to Cart </SpacedLabel>
          <FaCartPlus />
        </Button>
      </Footer>
    </RootCard>
  );
}
