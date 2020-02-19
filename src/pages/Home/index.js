import Button from '@material-ui/core/Button';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ComicCard from '../../components/ComicCard';
import { fetchComics } from '../../store/modules/comics/actions';
import { Container, Pagination, BackDrop, Breadcrumb } from './style';
import { CircularProgress, Breadcrumbs } from '@material-ui/core';

/**
 * This function creates a component for the home page.
 * This component is connected to the comics state.
 * @returns {Obejct} a react component
 */
export default function Home() {
  const { comics, pagination, isLoading } = useSelector(state => state.comics);

  const { page = 0 } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();

  /**
   * This function changes the page number.
   * @params {number} page is any page number
   */
  function setPage(page) {
    if (page < 0) return;
    if (page * pagination.limit > pagination.total) return;
    history.push(`/comics/${page}`);
  }

  /**
   * This hook dispatches a redux action to fetch new comics based
   * when the page changes.
   */
  useEffect(() => {
    dispatch(fetchComics(page * 20));
  }, [page, dispatch]);

  return (
    <>
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Breadcrumb to="/">Comics</Breadcrumb>
        </Breadcrumbs>
      </Container>
      <Container>
        <BackDrop open={isLoading}>
          <CircularProgress data-testid="isLoading" />
        </BackDrop>
        {comics.map(comic => (
          <ComicCard
            key={comic.id}
            id={comic.id}
            image={
              comic.thumbnail.path +
              '/portrait_incredible.' +
              comic.thumbnail.extension
            }
            title={comic.title}
            prices={comic.prices}
          />
        ))}
        <Pagination>
          {`mostrando de ${pagination.offset} a ${pagination.offset +
            pagination.count} (total de ${pagination.total} quadrinhos) `}
          <Button onClick={() => setPage(Number(page) - 1)}>{'<'}</Button>
          <Button onClick={() => setPage(Number(page) + 1)}>{'>'}</Button>
        </Pagination>
      </Container>
    </>
  );
}
