import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link, CircularProgress, Grid, Typography } from '@material-ui/core';
import { FaCartPlus } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { Container, BackDrop } from '../Home/style';
import { Image, DottedList, DottedSeparator, Price } from './style';
import { fetchComic } from '../../store/modules/comics/actions';
import { addComic } from '../../store/modules/cart/actions';

/**
 * This function creates a component for the Comic page.
 * This component is connected to the comics state.
 * @returns {Object} a react component
 */
export default function Comic() {
  const { id } = useParams();
  const { comic, isLoading } = useSelector(store => store.comics);

  const dispatch = useDispatch();
  const history = useHistory();

  /**
   * This hook dispatches a redux action to fetch a comic
   * when the id changes
   */
  useEffect(() => {
    dispatch(fetchComic(id));
  }, [id, dispatch]);

  /**
   * This function dispatches a redux action to add
   * a comic to the cart.
   */
  function addToCart() {
    dispatch(
      addComic({
        id: comic.id,
        title: comic.title,
        image:
          comic.thumbnail.path +
          '/portrait_incredible.' +
          comic.thumbnail.extension,
        price: comic.prices[0].price,
      })
    );
    history.push(`/cart`);
  }

  if (isLoading) {
    return (
      <Container data-testid="isLoading">
        <BackDrop open={isLoading}>
          <CircularProgress />
        </BackDrop>
      </Container>
    );
  }
  const year = new Date(
    comic.dates.reduce(
      (acc, date) => acc + (date.type === 'onsaleDate' ? date.date : ''),
      ''
    )
  ).getFullYear();

  return (
    <Container data-testid="isLoaded">
      <BackDrop open={isLoading}>
        <CircularProgress />
      </BackDrop>
      <Typography variant="h5" component="h2" gutterBottom>
        {comic.title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Image src={comic.thumbnail.path + '.' + comic.thumbnail.extension} />
        </Grid>
        <Grid item xs={6}>
          <Price>
            <small>$</small>
            <b>
              <big>{comic.prices[0].price}</big>
            </b>
            <Link onClick={addToCart} data-testid="addToCart">
              <FaCartPlus />
            </Link>
          </Price>
          <DottedList>
            <li>
              <span>Series</span>
              <DottedSeparator />
              <span>{comic.series.name || 'N/A'}</span>
            </li>
            <li>
              <span>Year</span>
              <DottedSeparator />
              <span>{year}</span>
            </li>
            <li>
              <span>Issue Number</span>
              <DottedSeparator />
              <span>{comic.issueNumber}</span>
            </li>
            <li>
              <span>Publishing</span>
              <DottedSeparator />
              <span>Marvel</span>
            </li>
            <li>
              <span>Pages</span>
              <DottedSeparator />
              <span>{comic.pageCount}</span>
            </li>
            <li>
              <span>Format</span>
              <DottedSeparator />
              <span>{comic.format}</span>
            </li>
          </DottedList>
          <Typography variant="body2" gutterBottom>
            {comic.description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
