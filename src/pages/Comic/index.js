import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link, CircularProgress, Grid, Typography } from '@material-ui/core';
import { FaCartPlus } from 'react-icons/fa';

import { Container, BackDrop } from '../Home/style';
import { Image, DottedList, DottedSeparator, Price } from './style';
import { fetchComic } from '../../store/modules/comics/actions';

export default function Comic() {
  const { id } = useParams();
  const { comic, isLoading } = useSelector(store => store.comics);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComic(id));
  }, [id, dispatch]);

  if (isLoading) {
    return (
      <Container>
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
    <Container>
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
            <Link>
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
