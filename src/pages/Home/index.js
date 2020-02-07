import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import { useParams, useHistory } from 'react-router-dom';

import { fetchComics as fc } from '../../store/modules/comics/actions';

import { Container, Pagination } from './style';
import ComicCard from '../../components/ComicCard';

export default function Home() {
  const { comics, pagination } = useSelector(state => state.comics);

  const { page = 0 } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();

  function setPage(page) {
    if (page < 0) return;
    if (page * pagination.limit > pagination.total) return;
    history.push(`/comics/${page}`);
  }

  useEffect(() => {
    dispatch(fc(page * 20));
  }, [page, dispatch]);

  return (
    <Container>
      {comics.map(comic => (
        <ComicCard
          key={comic.id}
          id={comic.id}
          image={
            comic.thumbnail.path +
            '/portrait_xlarge.' +
            comic.thumbnail.extension
          }
          title={comic.title}
          description={comic.description}
        />
      ))}
      <Pagination>
        {`mostrando de ${pagination.offset} a ${pagination.offset +
          pagination.count} (total de ${pagination.total} quadrinhos) `}
        <Button onClick={() => setPage(Number(page) - 1)}>{'<'}</Button>
        <Button onClick={() => setPage(Number(page) + 1)}>{'>'}</Button>
      </Pagination>
    </Container>
  );
}
